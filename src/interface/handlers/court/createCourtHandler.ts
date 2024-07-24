import { Request, Response } from 'express';
import * as CourtController from '../../controllers/court/createCourt';

export const createCourtHandler = async (req: Request, res: Response): Promise<void> => {
    console.log('llegue al handler')
    try {
        const court = await CourtController.createCustomer(req.body);
        res.status(201).json(court);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
