import { Router } from 'express';
import * as smsController from '../controllers/sms.controller';
const router = new Router();

router.route('/smsGateway').post(smsController.sendSms);

export default router;