import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { storage } from "./storage";

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static assets folder at /assets
  app.use("/assets", express.static(path.join(__dirname, "../attached_assets")));

  // other routes...

  const httpServer = createServer(app);
  return httpServer;
}
