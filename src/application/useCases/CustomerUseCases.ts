import { CustomerEntity } from "../../domain/entities/customer.entity";
import { ICustomerRepository } from "../../domain/interfaces/ICustomerRepository";

export class CustomerUseCases {
    constructor(private customerRepository: ICustomerRepository) {}

    async createCustomer(customer: CustomerEntity): Promise<CustomerEntity> {
        const createdCustomer = await this.customerRepository.create(customer);
        return createdCustomer;
    }

    async getCustomerByUid(uid: string): Promise<CustomerEntity> {
        const customer = await this.customerRepository.findByUid(uid);
        return customer;
    }

    async getCustomerByEmail(email: string): Promise<CustomerEntity> {
        const customer = await this.customerRepository.findByEmail(email);
        return customer;
    }
}