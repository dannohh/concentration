import { Router } from 'express';

const router = new Router();

router.post('/add', (req) => {
  console.log(req);
});

export default router;
