import { Request, Router } from 'express';
import { logger } from '../utils/logger.utils';
import { ServicePayload } from '../types/index.types';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info('Cart update extension executed');
  const payload = req.body as ServicePayload<any>
  console.log('a', payload)
  res.status(200)
  res.send();
});

export default serviceRouter;
