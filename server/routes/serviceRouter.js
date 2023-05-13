import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { getServices, 
    getEvaluations, 
    addEvaluation, 
    upvoteEvaluation, 
    unvoteEvaluation, 
    downvoteEvaluation, 
    unDownvoteEvaluation, 
    requestService, 
    addcomments } from '../Controllers/serviceController.js'

const router = express.Router()

router.get('/service/:type', getServices);
router.get('/evaluations/:service_id&:access_token', getEvaluations);
router.get('/evaluations/:service_id', getEvaluations);
router.post('/addEvaluation', requireAuth, addEvaluation);
router.post('/upvote', requireAuth, upvoteEvaluation);
router.post('/unvote', requireAuth, unvoteEvaluation);
router.post('/downvote', requireAuth, downvoteEvaluation);
router.post('/un-downvote', requireAuth, unDownvoteEvaluation);
router.post('/request-service', requestService);
router.post('/addcomments', requireAuth, addcomments);

export default router
