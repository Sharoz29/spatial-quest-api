import express from "express";
import {
  placeAsset,
  getAssetsByLocation,
} from "../controllers/asset.controller.js";

/**
 * @swagger
 * tags:
 *   name: Assets
 *   description: Digital Asset management and retrieval
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Asset:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         quest_id:
 *           type: integer
 *           example: 123
 *         user_id:
 *           type: string
 *           example: "user_abc123"
 *         content:
 *           type: string
 *           example: "A hidden treasure chest"
 *         lat:
 *           type: number
 *           format: float
 *           example: 37.7749
 *         lon:
 *           type: number
 *           format: float
 *           example: -122.4194
 *         placed_at:
 *           type: string
 *           format: date-time
 *           example: "2025-06-04T15:30:00Z"
 */
const router = express.Router();

/**
 * @swagger
 * /assets:
 *   post:
 *     summary: Place a new digital asset at a specific location
 *     tags: [Assets]
 *     requestBody:
 *       description: Asset placement data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quest_id
 *               - user_id
 *               - content
 *               - lat
 *               - lon
 *               - placed_at
 *             properties:
 *               quest_id:
 *                 type: integer
 *                 example: 1
 *               user_id:
 *                 type: int
 *                 example: 1
 *               content:
 *                 type: string
 *                 example: "A hidden treasure chest"
 *               lat:
 *                 type: number
 *                 format: float
 *                 example: 37.7749
 *               lon:
 *                 type: number
 *                 format: float
 *                 example: -122.4194
 *               placed_at:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-06-04T15:30:00Z"
 *     responses:
 *       201:
 *         description: Asset placed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       400:
 *         description: Invalid location for asset placement
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid location for asset placement"
 *       500:
 *         description: Server error when placing asset
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to place asset"
 */
router.post("/", placeAsset);

/**
 * @swagger
 * /assets/location:
 *   get:
 *     summary: Retrieve assets near a specific location
 *     tags: [Assets]
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: number
 *           format: float
 *         required: true
 *         description: Latitude of the location
 *         example: 37.7749
 *       - in: query
 *         name: lon
 *         schema:
 *           type: number
 *           format: float
 *         required: true
 *         description: Longitude of the location
 *         example: -122.4194
 *     responses:
 *       200:
 *         description: List of assets near the specified location
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Asset'
 *       400:
 *         description: Invalid coordinates supplied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid coordinates"
 *       500:
 *         description: Server error when fetching assets
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to fetch assets"
 */

router.get("/location", getAssetsByLocation);

export default router;
