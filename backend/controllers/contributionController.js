import asyncHandler from "express-async-handler";
import Contribution from "../models/contributionModel.js";

// @desc    Create a new contribution
// @route   POST /api/contributions
// @access  Private
const createContribution = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const contribution = new Contribution({
    title,
    postedBy: req.user._id,
    description,
  });

  const createdContribution = await contribution.save();
  res.status(201).json(createdContribution);
});

// @desc    Get all contributions
// @route   GET /api/contributions
// @access  Public
const getAllContributions = asyncHandler(async (req, res) => {
  const contributions = await Contribution.find({}).populate(
    "postedBy",
    "fullName"
  );
  res.json(contributions);
});

// @desc    Get a specific contribution
// @route   GET /api/contributions/:id
// @access  Public
const getContributionById = asyncHandler(async (req, res) => {
  const contribution = await Contribution.findById(req.params.id).populate(
    "postedBy",
    "fullName"
  );

  if (contribution) {
    res.json(contribution);
  } else {
    res.status(404);
    throw new Error("Contribution not found");
  }
});

// @desc    Delete a specific contribution
// @route   DELETE /api/contributions/:id
// @access  Private
const deleteContribution = asyncHandler(async (req, res) => {
  const contribution = await Contribution.findById(req.params.id);

  if (contribution) {
    if (contribution.postedBy.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Not authorized as contribution creator");
    }
    await contribution.remove();
    res.json({ message: "Contribution removed" });
  } else {
    res.status(404);
    throw new Error("Contribution not found");
  }
});

// @desc    Like a specific contribution
// @route   POST /api/contributions/:id/like
// @access  Private
const likeContribution = asyncHandler(async (req, res) => {
  const contribution = await Contribution.findById(req.params.id);

  if (contribution) {
    if (contribution.likes.includes(req.user._id)) {
      res.status(400);
      throw new Error("Contribution already liked");
    }
    contribution.likes.push(req.user._id);
    await contribution.save();
    res.json({ message: "Contribution liked" });
  } else {
    res.status(404);
    throw new Error("Contribution not found");
  }
});

export {
  createContribution,
  getAllContributions,
  getContributionById,
  deleteContribution,
  likeContribution,
};
