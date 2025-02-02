import express from "express";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";
import {
  createCertificate,
  getCertificateById,
} from "../controllers/certificateController.js";

router.route("/create").post(protect, createCertificate);
router.route("/:id").get(getCertificateById);

export default router;
