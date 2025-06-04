// src/controllers/participant.controller.js
import * as participantService from "../services/participant.service.js";

export async function joinQuest(req, res) {
  const id = parseInt(req.params.userId);
  const questId = parseInt(req.params.questId);

  if (isNaN(questId) || isNaN(id)) {
    return res.status(400).json({ error: "Invalid userId / questId" });
  }

  try {
    const result = await participantService.joinQuest(id, questId);
    if (result.alreadyJoined) {
      return res
        .status(409)
        .json({ message: "User already joined this quest" });
    }

    res.status(200).json({ message: "User successfully joined the quest" });
  } catch (err) {
    res.status(500).json({ error: "Failed to join quest" });
  }
}

export async function leaveQuest(req, res) {
  const id = parseInt(req.params.userId);
  const questId = parseInt(req.params.questId);

  if (isNaN(questId) || isNaN(id)) {
    return res.status(400).json({ error: "Invalid userId / questId" });
  }

  try {
    const result = await participantService.leaveQuest(id, Number(questId));

    if (result.notFound) {
      return res
        .status(404)
        .json({ message: "User is not a participant of this quest" });
    }

    if (result.alreadyLeft) {
      return res
        .status(200)
        .json({ message: "User has already left this quest" });
    }

    if (result.success) {
      return res
        .status(200)
        .json({ message: "User successfully left the quest" });
    }

    return res.status(500).json({ error: "Unknown error occurred" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to leave quest" });
  }
}

export async function getParticipantsByQuest(req, res) {
  const questId = parseInt(req.params.questId);

  if (isNaN(questId)) {
    return res.status(400).json({ error: "Invalid questId" });
  }

  try {
    const participants = await participantService.getParticipantsByQuest(
      questId
    );
    res.status(200).json(participants);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch participants" });
  }
}
