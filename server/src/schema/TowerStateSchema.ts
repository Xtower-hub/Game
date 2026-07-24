import { Schema, MapSchema, type } from "@colyseus/schema";

export class Vector3Schema extends Schema {
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
}

export class PlayerSchema extends Schema {
  @type("string") id: string = "";
  @type("string") username: string = "";
  @type(Vector3Schema) position: Vector3Schema = new Vector3Schema();
  @type("number") rotationY: number = 0;
  @type("number") hp: number = 100;
  @type("number") maxHp: number = 100;
  @type("number") altitude: number = 0;
  @type("boolean") isShielded: boolean = false;
  @type("string") lastSeenAt: string = new Date().toISOString();
}

export class ShelterSchema extends Schema {
  @type("string") id: string = "";
  @type("string") ownerId: string = "";
  @type(Vector3Schema) position: Vector3Schema = new Vector3Schema();
  @type("number") hp: number = 100;
  @type("number") maxHp: number = 100;
  @type("boolean") shieldActive: boolean = true;
}

export class RatSchema extends Schema {
  @type("string") id: string = "";
  @type(Vector3Schema) position: Vector3Schema = new Vector3Schema();
  @type("string") targetId: string = "";
  @type("number") hp: number = 20;
  @type("number") speed: number = 5;
}

export class TowerStateSchema extends Schema {
  @type({ map: PlayerSchema }) players = new MapSchema<PlayerSchema>();
  @type({ map: ShelterSchema }) shelters = new MapSchema<ShelterSchema>();
  @type({ map: RatSchema }) rats = new MapSchema<RatSchema>();
  @type("boolean") currentInvasionActive: boolean = false;
  @type("string") weekResetAt: string = new Date().toISOString();
}
