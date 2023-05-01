import express from 'express';
import { requireProvider } from '../middleware/authMiddleware.js';
import {hide_evaluation} from '../Controllers/providerController.js'

const router = express.Router()

router.post('/hide_evaluation', requireProvider, hide_evaluation );


export default router
