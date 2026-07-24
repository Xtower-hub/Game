export interface Vector3D {
  x: number;
  y: number;
  z: number; // Altitude in meters
}

export interface PlayerState {
  id: string;
  username: string;
  position: Vector3D;
  rotationY: number;
  hp: number;
  maxHp: number;
  altitude: number;
  inventory: Record<string, number>;
  isShielded: boolean;
  lastSeenAt: string;
}

export interface ShelterState {
  id: string;
  ownerId: string;
  position: Vector3D;
  hp: number;
  maxHp: number;
  shieldActive: boolean;
  storedResources: Record<string, number>;
  createdAt: string;
}

export interface RatState {
  id: string;
  position: Vector3D;
  targetId?: string;
  hp: number;
  speed: number;
}

export interface TowerWorldState {
  players: Record<string, PlayerState>;
  shelters: Record<string, ShelterState>;
  rats: Record<string, RatState>;
  currentInvasionActive: boolean;
  weekResetAt: string;
}

export interface GameConfig {
  vulnerabilityDelaySeconds: number;
  resourceSpawnRate: number;
  ratDamage: number;
  nextInvasionAt: string;
  invasionFrequencyDays: number;
}

export interface LeaderboardEntry {
  playerId: string;
  username: string;
  maxAltitude: number;
  rank: number;
  updatedAt: string;
}

export interface ReportItem {
  id: string;
  reporterId: string;
  reportedPlayerId: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';
  createdAt: string;
}
