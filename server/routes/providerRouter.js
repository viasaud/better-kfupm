import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import {hide_evaluation} from '../Controllers/providerController.js'

const router = express.Router()

router.post('/hide_evaluation',requireAuth, hide_evaluation );


export default router
