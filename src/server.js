import express from "express";
import { initializeDatabase } from "./utils/initDb.js";
import app from "./app.js";

// const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

initializeDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
