import expressAsyncHandler from "express-async-handler";
import Actor from "./../models/actorModel.js";

// @desc    Fetch all producers
// @route   GET /api/producers
// @access  Public
const getAllActors = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const actors = await Actor.find({ ...keyword });
  res.json({ actors });
});

const createActor = expressAsyncHandler(async (req, res) => {
  const actor = new Actor({
    name: "Sample actor",
    gender: "other",
    dob: "1/12/2000",
    bio: "some random bio",
  });
  const createdActor = await actor.save();
  res.status(201).json(createdActor);
});

// @desc    Update a movie
// @route   PUT /api/movies/:id
// @access  Public for now
const updateActor = expressAsyncHandler(async (req, res) => {
  const { name, gender, dob, bio } = req.body;

  const actor = await Actor.findById(req.params.id);

  if (actor) {
    actor.name = name;
    actor.gender = gender;
    actor.dob = dob;
    actor.bio = bio;

    const updatedActor = await actor.save();
    res.json(updatedActor);
  } else {
    res.status(404);
    throw new Error("Actor not found");
  }
});

export { getAllActors, createActor, updateActor };
