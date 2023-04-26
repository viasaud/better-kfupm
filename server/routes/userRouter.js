import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { getProfile, updateProfile, getUserEvaluations } from '../Controllers/userController.js'

const router = express.Router()

router.post('/profile', requireAuth, getProfile);
router.post('/update-profile', requireAuth, updateProfile);
router.post('/user-evaluations', requireAuth, getUserEvaluations);

export default router