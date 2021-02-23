import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    yearofrelease: {
      type: String,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    actors: {
      type: Array,
      required: true,
    },
    producers: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movie", movieSchema);

export default Movie;
