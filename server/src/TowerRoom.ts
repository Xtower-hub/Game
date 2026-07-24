import { Room, Client } from "colyseus";
import { TowerStateSchema, PlayerSchema, ShelterSchema } from "./schema/TowerStateSchema";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://iclnjxdwpmxpfanmxijt.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export class TowerRoom extends Room<TowerStateSchema> {
  maxClients = 100;

  onCreate(options: any) {
    this.setState(new TowerStateSchema());

    this.onMessage("move", (client, data: { x: number; y: number; z: number; rotationY?: number }) => {
      const player = this.state.players.get(client.sessionId);
      if (player) {
        // Validate 3D position server-side
        player.position.x = data.x;
        player.position.y = data.y;
        player.position.z = Math.max(0, data.z); // Altitude in 3D
        player.altitude = Math.round(data.z);
        if (data.rotationY !== undefined) player.rotationY = data.rotationY;
        player.lastSeenAt = new Date().toISOString();
      }
    });

    this.onMessage("build_shelter", (client, data: { x: number; y: number; z: number }) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;

      const shelterId = `shelter_${Date.now()}_${client.sessionId}`;
      const shelter = new ShelterSchema();
      shelter.id = shelterId;
      shelter.ownerId = player.id;
      shelter.position.x = data.x;
      shelter.position.y = data.y;
      shelter.position.z = data.z;

      this.state.shelters.set(shelterId, shelter);
    });

    this.onMessage("trigger_invasion_manual", (client, data) => {
      this.state.currentInvasionActive = true;
      console.log("[TOWER ROOM] Manual Rat Invasion Triggered!");
    });
  }

  onJoin(client: Client, options: any) {
    console.log(`[TOWER ROOM] Client joined: ${client.sessionId}`);
    const player = new PlayerSchema();
    player.id = options.userId || client.sessionId;
    player.username = options.username || `Climber_${client.sessionId.slice(0, 4)}`;
    player.position.x = 0;
    player.position.y = 0;
    player.position.z = 0; // Starting ground level

    this.state.players.set(client.sessionId, player);
  }

  async onLeave(client: Client, consented: boolean) {
    console.log(`[TOWER ROOM] Client left: ${client.sessionId}`);
    const player = this.state.players.get(client.sessionId);
    if (player && player.id) {
      // Save highest altitude to Supabase DB on disconnect
      try {
        await supabase
          .from('players')
          .upsert({
            id: player.id,
            username: player.username,
            current_altitude: player.altitude,
            updated_at: new Date().toISOString()
          });
      } catch (err) {
        console.error("Error saving player state to Supabase:", err);
      }
    }
    this.state.players.delete(client.sessionId);
  }

  onDispose() {
    console.log("[TOWER ROOM] Room disposed");
  }
}
