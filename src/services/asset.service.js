import db from "../config/db.js";
import { isWithinGeoBoundary } from "../utils/geoUtils.js";

export async function placeAsset(dto) {
  const { quest_id, user_id, content, lat, lon } = dto;
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO assets (quest_id, user_id, content, lat, lon) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [quest_id, user_id, content, lat, lon], function (err) {
      if (err) return reject(err);
      resolve(this.lastID);
    });
  });
}

export async function getAssetsByLocation(lat, lon, radiusMeters = 50) {
  return new Promise((resolve, reject) => {
    const latDiff = radiusMeters / 111000;
    const lonDiff = radiusMeters / (111000 * Math.cos(lat * (Math.PI / 180)));

    const minLat = lat - latDiff;
    const maxLat = lat + latDiff;
    const minLon = lon - lonDiff;
    const maxLon = lon + lonDiff;

    const sql = `
      SELECT * FROM assets
      WHERE lat BETWEEN ? AND ? AND lon BETWEEN ? AND ?
    `;

    db.all(sql, [minLat, maxLat, minLon, maxLon], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

export async function validatePlacement(dto) {
  const questSql = `SELECT geo_boundary FROM quests WHERE id = ?`;
  return new Promise((resolve, reject) => {
    db.get(questSql, [dto.quest_id], (err, row) => {
      if (err || !row) return reject(err || new Error("Quest not found"));
      const geoBoundary = JSON.parse(row.geo_boundary);
      const result = isWithinGeoBoundary(dto.lat, dto.lon, geoBoundary);
      resolve(result);
    });
  });
}
