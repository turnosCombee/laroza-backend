import { CustomerUseCases } from '../../../application/useCases/CustomerUseCases';
import { CustomerEntity } from '../../../domain/entities/customer.entity';
import {MongoCustomerRepository}  from '../../../infrastructure/repositories/MongoCostumerRepository'
import { v4 as uuidv4 } from 'uuid';  // Importa uuid

const customerRepository = new MongoCustomerRepository();
const customerUseCases = new CustomerUseCases(customerRepository);

export const createCustomer = async (data: CustomerEntity): Promise<CustomerEntity> => {
    const { name, email, phone } = data;
    console.log('llegue al controller')
    const customer = await customerUseCases.createCustomer({
        uid: uuidv4(),
        name,
        email,
        phone,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return customer;
};