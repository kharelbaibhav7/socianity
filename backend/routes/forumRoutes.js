import express from "express";
const router = express.Router();
import {
  createForumPost,
  getAllForumPosts,
  getForumPostById,
  deleteForumPost,
  postReply,
  likeForumPost,
} from "../controllers/forumController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createForumPost).get(getAllForumPosts);

router.route("/:id").get(getForumPostById).delete(protect, deleteForumPost);

router.route("/:id/reply").post(protect, postReply);
router.route("");

router.route("/:id/like").post(protect, likeForumPost);

export default router;
