import express from 'express';
import welcomeController from '../controllers/welcomeControllers.js';
import SendEmail from '../controllers/mailController.js';

const router = express.Router();  

router.get('/', welcomeController);
router.post('/', SendEmail);

export default router;