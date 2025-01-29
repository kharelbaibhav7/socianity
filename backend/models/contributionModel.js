import mongoose from "mongoose";

const contributionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Contribution = mongoose.model("Contribution", contributionSchema);

export default Contribution;
