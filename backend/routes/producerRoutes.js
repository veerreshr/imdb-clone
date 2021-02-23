import express from "express";
import {
  createProducer,
  getAllProducers,
  updateProducer,
} from "../controller/producerController.js";

const router = express.Router();

router.get("/", getAllProducers).post(createProducer);
router.route("/:id").put(updateProducer);

export default router;
