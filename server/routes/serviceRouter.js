import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import {getServices, getEvaluations, addEvaluation, upvoteEvaluation, unvoteEvaluation} from '../Controllers/serviceController.js'

const router = express.Router()

router.get('/service/:type', getServices);
router.get('/evaluations/:service_id', getEvaluations);
router.post('/addEvaluation',requireAuth, addEvaluation);
router.post('/upvote',requireAuth, upvoteEvaluation);
router.post('/unvote',requireAuth, unvoteEvaluation);

export default router