import { CustomerEntity } from "../entities/customer.entity";

export interface ICustomerRepository {
    create(customer: CustomerEntity): Promise<CustomerEntity | null>;
    findByUid(uid: string): Promise<CustomerEntity | null>;
    findByEmail(email: string): Promise<CustomerEntity | null>;
}