import { Router } from 'express';

import { logger } from '../utils/logger.utils';
import { ServicePayload } from '../types/index.types';

const eventRouter: Router = Router();

eventRouter.post('/', async (req, res) => {
  logger.info('Event message received');
  const payload = req.body as ServicePayload
  logger.info(`Notification type: ${payload.notificationType}`)
  res.status(200);
  res.send();
});

export default eventRouter;
