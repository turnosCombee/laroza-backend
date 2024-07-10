import { Request, Response } from 'express';
import * as CustomerController from '../../controllers/customer/createCustomer';

export const createCustomerHandler = async (req: Request, res: Response): Promise<void> => {
    console.log('llegue al handler')
    try {
        const customer = await CustomerController.createCustomer(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
