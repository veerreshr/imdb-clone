import express from "express";
import {
  createProducer,
  getAllProducers,
  updateProducer,
  getAllProducersName,
} from "../controller/producerController.js";

const router = express.Router();

router.get("/", getAllProducers);
router.post("/", createProducer);
router.route("/:id").put(updateProducer);
router.get("/nameList", getAllProducersName);
export default router;
