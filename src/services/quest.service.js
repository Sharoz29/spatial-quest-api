import db from "../config/db.js";
import { pointInPolygon } from "../utils/geoUtils.js";

export async function createQuest(dto) {
  const { name, description, geo_boundary } = dto;
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO quests (name, description, geo_boundary) VALUES (?, ?, ?)`;
    db.run(sql, [name, description || null, geo_boundary], function (err) {
      if (err) return reject(err);
      resolve(this.lastID);
    });
  });
}

export async function getQuestById(id) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM quests WHERE id = ?`, [id], (err, row) => {
      if (err) return reject(err);
      if (!row) return resolve(null);
      resolve(row);
    });
  });
}

export async function getAllQuests() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM quests`, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

export async function getQuestsByLocation(lat, lon) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM quests`, [], (err, rows) => {
      if (err) return reject(err);

      const filtered = rows.filter((quest) => {
        try {
          const geo = JSON.parse(quest.geo_boundary);
          return pointInPolygon([lon, lat], geo.coordinates[0]);
        } catch {
          return false;
        }
      });

      resolve(filtered);
    });
  });
}
