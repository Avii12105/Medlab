// Test Category routes
import express, { Router, Request, Response, NextFunction } from 'express';
import * as testCategoryModel from '../models/testCategoryModel';
import { CreateTestCategoryRequest } from '../types/index';

const router: Router = express.Router();

// Get all test categories
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await testCategoryModel.getTestCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

// Get test category by ID
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await testCategoryModel.getTestCategoryById(parseInt(req.params.id));
    if (!category) {
      return res.status(404).json({ error: 'Test category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

// Create test category
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body as CreateTestCategoryRequest;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const result = await testCategoryModel.createTestCategory({ name });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

// Update test category
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body as Partial<CreateTestCategoryRequest>;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const result = await testCategoryModel.updateTestCategory(parseInt(req.params.id), { name });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

// Delete test category
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await testCategoryModel.deleteTestCategory(parseInt(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;
