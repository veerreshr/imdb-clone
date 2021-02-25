import express from "express";
import {
  createMovie,
  getAllMovies,
  updateMovie,
  getMovieById,
} from "../controller/movieController.js";

const router = express.Router();

router.get("/", getAllMovies);
router.post("/", createMovie);
router.route("/:id").put(updateMovie);
router.get("/:id", getMovieById);

export default router;
