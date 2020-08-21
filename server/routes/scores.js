import { Router } from 'express';

const router = new Router();

router.post('/add', ({ body }) => {
  console.log(body);
});

export default router;
