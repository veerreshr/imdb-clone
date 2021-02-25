import express from "express";
import {
  getAllActors,
  createActor,
  updateActor,
  getAllActorsName,
} from "../controller/actorController.js";

const router = express.Router();

router.get("/", getAllActors);
router.post("/", createActor);
router.route("/:id").put(updateActor);
router.get("/nameList", getAllActorsName);

export default router;
