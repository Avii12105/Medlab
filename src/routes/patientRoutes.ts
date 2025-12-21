// Patient routes
import express, { Router, Request, Response, NextFunction } from 'express';
import * as patientModel from '../models/patientModel';
import { Patient, CreatePatientRequest } from '../types/index';

const router: Router = express.Router();

// Get all patients
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patients = await patientModel.getPatients();
    res.status(200).json(patients);
  } catch (error) {
    next(error);
  }
});

// Get patient by ID
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patient = await patientModel.getPatientById(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    next(error);
  }
});

// Create patient
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, age, phone, email } = req.body as CreatePatientRequest;

    if (!name || !age) {
      return res.status(400).json({ error: 'Name and age are required' });
    }

    const result = await patientModel.createPatient({ name, age, phone, email });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

// Update patient
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, age, phone, email } = req.body as Partial<CreatePatientRequest>;

    if (!name || !age) {
      return res.status(400).json({ error: 'Name and age are required' });
    }

    await patientModel.updatePatient(req.params.id, { name, age, phone, email });
    res.status(200).json({ id: req.params.id, name, age, phone, email });
  } catch (error) {
    next(error);
  }
});

// Delete patient
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await patientModel.deletePatient(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

// Search patients
router.get('/search/:name', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patients = await patientModel.searchPatientsByName(req.params.name);
    res.status(200).json(patients);
  } catch (error) {
    next(error);
  }
});

export default router;
