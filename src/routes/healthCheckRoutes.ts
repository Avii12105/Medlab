// Health check routes
import express, { Router } from 'express';

const router: Router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default router;
