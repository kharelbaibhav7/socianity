import express from "express";
const router = express.Router();
import { createEvent, getAllEvents } from "../controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createEvent).get(getAllEvents);

export default router;
