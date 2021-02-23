import expressAsyncHandler from "express-async-handler";
import Movie from "./../models/movieModel.js";

// @desc    Fetch all producers
// @route   GET /api/producers
// @access  Public
const getAllMovies = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const movies = await Movie.find({ ...keyword });
  res.json({ movies });
});

// @desc    Create a movie
// @route   POST /api/movies
// @access  Public for now
const createMovie = expressAsyncHandler(async (req, res) => {
  const movie = new Movie({
    name: "Sample movie",
    yearofrelease: "2021",
    plot: "some random plot about the movie",
    poster: "/uploads/poster1.jpg",
    actors: ["sample actor"],
    producers: ["sample producer"],
  });
  const createdMovie = await movie.save();
  res.status(201).json(createdMovie);
});

// @desc    Update a movie
// @route   PUT /api/movies/:id
// @access  Public for now
const updateMovie = expressAsyncHandler(async (req, res) => {
  const { name, yearofrelease, plot, poster, actors, producers } = req.body;

  const movie = await Movie.findById(req.params.id);

  if (movie) {
    movie.name = name;
    movie.yearofrelease = yearofrelease;
    movie.plot = plot;
    movie.poster = poster;
    movie.actors = actors;
    movie.producers = producers;

    const updatedMovie = await movie.save();
    res.json(updatedMovie);
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
});

export { getAllMovies, createMovie, updateMovie };
