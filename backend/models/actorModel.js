import mongoose from "mongoose";

const actorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Actor = mongoose.model("actor", actorSchema);

export default Actor;
