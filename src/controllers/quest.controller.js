import * as questService from "../services/quest.service.js";

export async function createQuest(req, res) {
  const dto = req.body;
  try {
    const quest = await questService.createQuest(dto);
    res.status(201).json(quest);
  } catch (err) {
    res.status(500).json({ error: "Failed to create quest" });
  }
}

export async function getQuestsByLocation(req, res) {
  const lat = parseFloat(req.query.lat);
  const lon = parseFloat(req.query.lon);
  if (isNaN(lat) || isNaN(lon)) {
    return res.status(400).json({ error: "Invalid coordinates" });
  }

  try {
    const quests = await questService.getQuestsByLocation(lat, lon);
    res.status(200).json(quests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quests" });
  }
}
export async function getAllQuests(req, res) {
  try {
    const quests = await questService.getAllQuests();
    res.json(quests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch all quests" });
  }
}
export async function getQuestById(req, res) {
  const questId = parseInt(req.params.questId);
  if (isNaN(questId)) {
    return res.status(400).json({ error: "Invalid questId" });
  }

  try {
    const quest = await questService.getQuestById(questId);
    if (!quest) {
      return res.status(404).json({ error: "Quest not found" });
    }
    res.json(quest);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quest" });
  }
}
