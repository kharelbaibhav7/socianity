import express from 'express';
const router = express.Router();
import { createContribution, getAllContributions, getContributionById, deleteContribution, likeContribution } from '../controllers/contributionController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/')
  .post(protect, createContribution)
  .get(getAllContributions);

router.route('/:id')
  .get(getContributionById)
  .delete(protect, deleteContribution);

router.route('/:id/like')
  .post(protect, likeContribution);

export default router;