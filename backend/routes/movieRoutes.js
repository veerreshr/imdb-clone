import express from "express";
import {
  createMovie,
  getAllMovies,
  updateMovie,
} from "../controller/movieController.js";

const router = express.Router();

router.get("/", getAllMovies).post(createMovie);
router.route("/:id").put(updateMovie);

export default router;
