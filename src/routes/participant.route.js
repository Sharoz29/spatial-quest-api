import express from "express";
import {
  joinQuest,
  leaveQuest,
  getParticipantsByQuest,
} from "../controllers/participant.controller.js";

/**
 * @swagger
 * tags:
 *   name: Participants
 *   description: Quest participation management
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Participant:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         quest_id:
 *           type: integer
 *           example: 123
 *         status:
 *           type: string
 *           example: "joined"
 *         joined_at:
 *           type: string
 *           format: date-time
 *           example: "2025-06-04T15:30:00Z"
 */
const router = express.Router();

/**
 * @swagger
 * /participants/{questId}/join/{userId}:
 *   post:
 *     summary: Join a quest
 *     tags: [Participants]
 *     parameters:
 *       - in: path
 *         name: questId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the quest to join
 *         example: 123
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user
 *         example: 123
 *
 *     responses:
 *       201:
 *         description: Participant successfully joined the quest
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participant'
 *       400:
 *         description: Invalid questId or missing data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid questId"
 *       500:
 *         description: Failed to join quest
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to join quest"
 */
router.post("/:questId/join/:userId", joinQuest);

/**
 * @swagger
 * /participants/{questId}/leave/{userId}:
 *   post:
 *     summary: Leave a quest
 *     tags: [Participants]
 *     parameters:
 *       - in: path
 *         name: questId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the quest to leave
 *         example: 123
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of user
 *         example: 123
 *     responses:
 *       204:
 *         description: Participant successfully left the quest (No Content)
 *       400:
 *         description: Invalid questId or missing data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid questId"
 *       500:
 *         description: Failed to leave quest
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to leave quest"
 */
router.post("/:questId/leave/:userId", leaveQuest);

/**
 * @swagger
 * /participants/{questId}/participants:
 *   get:
 *     summary: Retrieve all participants of a specific quest
 *     tags: [Participants]
 *     parameters:
 *       - in: path
 *         name: questId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the quest to fetch participants for
 *         example: 1
 *     responses:
 *       200:
 *         description: List of participants in the specified quest
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Participant'
 *       400:
 *         description: Invalid quest ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid quest ID"
 *       404:
 *         description: Quest not found or has no participants
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No participants found"
 *       500:
 *         description: Server error while retrieving participants
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to fetch participants"
 */
router.get("/:questId/participants", getParticipantsByQuest);

export default router;
