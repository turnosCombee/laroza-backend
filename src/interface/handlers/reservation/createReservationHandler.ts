import { Request, Response } from 'express';
import * as ReservationController from "../../controllers/reservation/createReservation";

export const createReservationHandler = async (req: Request, res: Response): Promise<void> => {
    console.log('llegue al reservation handler')
    try {
        const reservation = await ReservationController.createReservation(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
