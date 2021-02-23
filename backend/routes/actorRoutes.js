import express from "express";
import {
  getAllActors,
  createActor,
  updateActor,
} from "../controller/actorController.js";

const router = express.Router();

router.get("/", getAllActors).post(createActor);
router.route("/:id").put(updateActor);

export default router;
