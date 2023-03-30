import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import {getServices, getEvaluations, addEvaluation} from '../Controllers/serviceController.js'

const router = express.Router()

router.get('/service/:type', getServices);
router.get('/evaluations/:service_id', getEvaluations);
router.post('/addEvaluation',requireAuth, addEvaluation);

export default router