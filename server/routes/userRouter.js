import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { getProfile, updateProfile, getUserEvaluations } from '../Controllers/userController.js'

const router = express.Router()

router.get('/profile', requireAuth, getProfile);
router.post('/update-profile', requireAuth, updateProfile);

router.get('/user-evaluations', requireAuth, getUserEvaluations);

export default router