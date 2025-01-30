import asyncHandler from "express-async-handler";
import Forum from "../models/forumModel.js";
import expressAsyncHandler from "express-async-handler";

// @desc    Create a new forum post
// @route   POST /api/forums
// @access  Private
const createForumPost = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const forumPost = new Forum({
    title,
    description,
    postedBy: req.user._id,
  });

  const createdForumPost = await forumPost.save();
  res.status(201).json(createdForumPost);
});

// @desc    Get all forum posts
// @route   GET /api/forums
// @access  Public
const getAllForumPosts = asyncHandler(async (req, res) => {
  const forumPosts = await Forum.find({}).populate("postedBy", "fullName");
  res.json(forumPosts);
});

// @desc    Get a specific forum post
// @route   GET /api/forums/:id
// @access  Public
const getForumPostById = asyncHandler(async (req, res) => {
  const forumPost = await Forum.findById(req.params.id)
    .populate("postedBy", "fullName")
    .populate("replies.user", "fullName");

  if (forumPost) {
    res.json(forumPost);
  } else {
    res.status(404);
    throw new Error("Forum post not found");
  }
});

// @desc    Delete a specific forum post
// @route   DELETE /api/forums/:id
// @access  Private
const deleteForumPost = asyncHandler(async (req, res) => {
  const forumPost = await Forum.findById(req.params.id);

  if (forumPost) {
    if (forumPost.postedBy.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Not authorized as forum post creator");
    }
    await forumPost.remove();
    res.json({ message: "Forum post removed" });
  } else {
    res.status(404);
    throw new Error("Forum post not found");
  }
});

// @desc    Post a reply to a forum post
// @route   POST /api/forums/:id/reply
// @access  Private
const postReply = asyncHandler(async (req, res) => {
  const { comment } = req.body;
  const forumPost = await Forum.findById(req.params.id);

  if (forumPost) {
    const reply = {
      user: req.user._id,
      comment,
    };
    forumPost.replies.push(reply);
    await forumPost.save();
    res.json({ message: "Reply posted" });
  } else {
    res.status(404);
    throw new Error("Forum post not found");
  }
});

const viewAllReply = expressAsyncHandler(async (req, res, next) => {
  const forumPost = await Forum.findById(req.params.id);

  if (forumPost) {
    res.json(forumPost.replies);
  } else {
    res.status(404);
    throw new Error("Forum post not found");
  }
});

// @desc    Like a forum post
// @route   POST /api/forums/:id/like
// @access  Private
const likeForumPost = asyncHandler(async (req, res) => {
  const forumPost = await Forum.findById(req.params.id);

  if (forumPost) {
    if (forumPost.likes.includes(req.user._id)) {
      res.status(400);
      throw new Error("Forum post already liked");
    }
    forumPost.likes.push(req.user._id);
    await forumPost.save();
    res.json({ message: "Forum post liked" });
  } else {
    res.status(404);
    throw new Error("Forum post not found");
  }
});

export {
  createForumPost,
  getAllForumPosts,
  getForumPostById,
  deleteForumPost,
  postReply,
  likeForumPost,
  viewAllReply,
};
