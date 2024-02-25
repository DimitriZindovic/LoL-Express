import express from "express";
import {
  getChampions,
  getChampion,
  createChamipon,
  updateChampion,
  deleteChampion,
} from "../controllers/ChampionController.js";

const router = express.Router();

router.get("/", getChampions);
router.get("/:id", getChampion);
router.post("/", createChamipon);
router.put("/:id", updateChampion);
router.delete("/:id", deleteChampion);

export default router;
