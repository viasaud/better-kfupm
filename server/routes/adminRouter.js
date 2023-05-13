import express from 'express';
import {updateEvaluation} from '../Controllers/AdminController.js'
import { requireAdmin } from '../middleware/authMiddleware.js';
const router = express.Router()

router.post('/update-evaluation' ,requireAdmin, updateEvaluation);

export default router