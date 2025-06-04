import express from "express";
import {
  getQuestsByLocation,
  createQuest,
  getAllQuests,
  getQuestById,
} from "../controllers/quest.controller.js";

/**
 * @swagger
 * tags:
 *   name: Quests
 *   description: Quest creation and retrieval based on location
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Quest:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Treasure Hunt"
 *         description:
 *           type: string
 *           nullable: true
 *           example: "Find hidden treasures around the city"
 *         geo_boundary:
 *           type: string
 *           description: GeoJSON or other format defining quest boundary
 *           example: '{"type":"Polygon","coordinates":[[[...]]]}'
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2025-06-04T15:30:00Z"
 */
const router = express.Router();

/**
 * @swagger
 * /quests/location:
 *   get:
 *     summary: Retrieve quests near a specific location
 *     tags: [Quests]
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: number
 *           format: float
 *         required: true
 *         description: Latitude of the location to search quests nearby
 *         example: 37.7749
 *       - in: query
 *         name: lon
 *         schema:
 *           type: number
 *           format: float
 *         required: true
 *         description: Longitude of the location to search quests nearby
 *         example: -122.4194
 *     responses:
 *       200:
 *         description: List of quests near the specified location
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quest'
 *       400:
 *         description: Invalid coordinates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid coordinates"
 *       500:
 *         description: Failed to fetch quests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to fetch quests"
 */
router.get("/location", getQuestsByLocation);

/**
 * @swagger
 * /quests/all:
 *   get:
 *     summary: Retrieve all available quests
 *     tags: [Quests]
 *     responses:
 *       200:
 *         description: List of all quests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quest'
 *       500:
 *         description: Failed to fetch quests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to fetch quests"
 */
router.get("/all", getAllQuests);

/**
 * @swagger
 * /quests/create:
 *   post:
 *     summary: Create a new quest
 *     tags: [Quests]
 *     requestBody:
 *       description: Quest data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - geo_boundary
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Treasure Hunt"
 *               description:
 *                 type: string
 *                 nullable: true
 *                 example: "Find hidden treasures around the city"
 *               geo_boundary:
 *                 type: string
 *                 description: GeoJSON or other format defining quest boundary
 *                 example: '{"type":"Polygon","coordinates":[[[...]]]}'
 *     responses:
 *       201:
 *         description: Quest created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 *       500:
 *         description: Failed to create quest
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to create quest"
 */
router.post("/create", createQuest);
/**
 * @swagger
 * /quests/{questId}:
 *   get:
 *     summary: Get a quest by its ID
 *     tags: [Quests]
 *     parameters:
 *       - in: path
 *         name: questId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the quest to retrieve
 *     responses:
 *       200:
 *         description: Quest retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 *       400:
 *         description: Invalid quest ID supplied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid questId"
 *       404:
 *         description: Quest not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Quest not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to retrieve quest"
 */
router.get("/:questId", getQuestById);
export default router;
