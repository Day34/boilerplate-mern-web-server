import Express from 'express';
const router = Express.Router();

router.get('/health-check', (req, res, next) => {
  res.set('Content-Type', 'application/json');
  res.status(200).json({
    success: true,
    message: 'web-server is healthy',
    data: {}
  });
});

export default router;
