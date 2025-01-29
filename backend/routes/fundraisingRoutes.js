import express from "express";
const router = express.Router();
import {
  createFundraising,
  getAllFundraisings,
  getFundraisingById,
  donateToFundraising,
} from "../controllers/fundraisingController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createFundraising).get(getAllFundraisings);

router.route("/:id").get(getFundraisingById);

router.route("/:id/donate").post(donateToFundraising);

export default router;
