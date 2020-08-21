import { Router } from 'express';

import addScore from '../db';

const router = new Router();

router.post('/add', async ({ body }, res) => {
  const mongoRes = await addScore(body);
  res.status(201);
  res.json(mongoRes);
});

export default router;
