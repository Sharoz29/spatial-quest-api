import express from "express";
import assetRoutes from "./routes/asset.route.js";
import questRoutes from "./routes/quest.route.js";
import participantRoutes from "./routes/participant.route.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/quests", questRoutes);
app.use("/participants", participantRoutes);
app.use("/assets", assetRoutes);

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

export default app;
