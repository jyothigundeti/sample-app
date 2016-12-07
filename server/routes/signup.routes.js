import { Router } from 'express';
import * as signupController from '../controllers/signup.controller';
const router = new Router();

router.route('/userRegistration').post(signupController.addUser);

export default router;