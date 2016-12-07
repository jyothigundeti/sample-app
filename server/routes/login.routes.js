import { Router } from 'express';
import * as loginController from '../controllers/login.controller';
const router = new Router();

router.route('/userLogin').post(loginController.createUser);

export default router;