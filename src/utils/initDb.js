import fs from "fs";
import path from "path";
import db from "../config/db.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function initializeDatabase() {
  const initSqlPath = path.resolve(__dirname, "../../database/init.sql");
  const initSQL = fs.readFileSync(initSqlPath, "utf-8");

  db.exec(initSQL, (err) => {
    if (err) {
      console.error("Failed to initialize database:", err.message);
    } else {
      console.log("Database schema initialized");
    }
  });
}
