import express from 'express';
import {updateRole} from '../Controllers/adminController.js'
import { requireAdmin } from '../middleware/authMiddleware.js';
const router = express.Router()

router.post('/update-user',requireAdmin, updateRole);

export default router