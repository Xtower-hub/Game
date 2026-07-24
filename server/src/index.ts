import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "colyseus";
import { TowerRoom } from "./TowerRoom";

dotenv.config();

const port = Number(process.env.PORT || 2567);
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", game: "XTOWER Server 3D", timestamp: new Date() });
});

const server = http.createServer(app);
const gameServer = new Server({
  server,
});

gameServer.define("tower_room", TowerRoom);

server.listen(port, () => {
  console.log(`[XTOWER SERVER] Colyseus 3D game server running on port ${port}`);
});
