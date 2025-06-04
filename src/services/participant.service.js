import db from "../config/db.js";

export async function joinQuest(id, quest_id) {
  return new Promise((resolve, reject) => {
    const checkSql = `SELECT 1 FROM participants WHERE id = ? AND quest_id = ? AND status = 'joined'`;
    db.get(checkSql, [id, quest_id], (err, row) => {
      if (err) {
        console.log(err);
        return reject(err);
      }

      if (row) {
        {
          return resolve({ alreadyJoined: true });
        }
      }
      const insertSql = `
        INSERT INTO participants (id, quest_id, status, joined_at)
        VALUES (?, ?, 'joined', CURRENT_TIMESTAMP)
      `;
      db.run(insertSql, [id, quest_id], function (err) {
        if (err) return reject(err);
        resolve(this.lastID);
      });
    });
  });
}

export async function leaveQuest(id, quest_id) {
  return new Promise((resolve, reject) => {
    const checkSql = `
      SELECT status FROM participants
      WHERE id = ? AND quest_id = ?
    `;
    db.get(checkSql, [id, quest_id], (err, row) => {
      if (err) return reject(err);

      if (!row) {
        return resolve({ notFound: true });
      }

      if (row.status === "left") {
        return resolve({ alreadyLeft: true });
      }

      const updateSql = `
        UPDATE participants
        SET status = 'left'
        WHERE id = ? AND quest_id = ?
      `;
      db.run(updateSql, [id, quest_id], function (err) {
        if (err) return reject(err);
        resolve({ success: true });
      });
    });
  });
}

export async function getParticipantsByQuest(quest_id) {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM participants WHERE quest_id = ?`,
      [quest_id],
      (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      }
    );
  });
}
