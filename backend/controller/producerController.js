import expressAsyncHandler from "express-async-handler";
import Producer from "./../models/producerModel.js";

// @desc    Fetch all producers
// @route   GET /api/producers
// @access  Public
const getAllProducers = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const producers = await Producer.find({ ...keyword });
  res.json({ producers });
});

const createProducer = expressAsyncHandler(async (req, res) => {
  const producer = new Producer({
    name: "Sample producer",
    gender: "other",
    dob: "1/12/2000",
    bio: "some random bio",
  });
  const createdProducer = await producer.save();
  res.status(201).json(createdProducer);
});

// @desc    Update a movie
// @route   PUT /api/movies/:id
// @access  Public for now
const updateProducer = expressAsyncHandler(async (req, res) => {
  const { name, gender, dob, bio } = req.body;

  const producer = await Producer.findById(req.params.id);

  if (producer) {
    producer.name = name;
    producer.gender = gender;
    producer.dob = dob;
    producer.bio = bio;

    const updatedProducer = await producer.save();
    res.json(updatedProducer);
  } else {
    res.status(404);
    throw new Error("Producer not found");
  }
});

export { getAllProducers, createProducer, updateProducer };
