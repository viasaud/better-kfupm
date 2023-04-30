import express from 'express';
import {signupUser, loginUser, resetPassword, updatePassword} from '../Controllers/authController.js'
const router = express.Router()

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/reset-password', resetPassword);
router.post('/update-password', updatePassword);

export default router