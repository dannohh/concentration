import { Router } from 'express';

import { addScore, getScores } from '../db';

const router = new Router();

router.get('/', async (_, res) => {
  const mongoRes = await getScores();
  res.status(200);
  res.json(mongoRes);
});

router.post('/add', async ({ body }, res) => {
  const mongoRes = await addScore(body);
  res.status(201);
  res.json(mongoRes);
});

export default router;
