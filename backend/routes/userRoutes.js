import express from "express";
const router = express.Router();
import {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router.get("/me", protect, getUserProfile);

export default router;
