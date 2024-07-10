import { CustomerEntity } from '../../domain/entities/customer.entity';
import { ICustomerRepository } from '../../domain/interfaces/ICustomerRepository';
import CustomerModel from '../models/customer.schema';

export class MongoCustomerRepository implements ICustomerRepository {
    constructor() {
        this.create = this.create.bind(this)
        this.findByUid = this.findByUid.bind(this)
        this.findByEmail = this.findByEmail.bind(this)
    }

    async create(customer: CustomerEntity):Promise<CustomerEntity | null> {
        const newCustomer = await CustomerModel.create(customer)
        return newCustomer
    }

    async findByUid(uid: string): Promise<CustomerEntity | null> {
        const customer = await CustomerModel.findOne({ uid })
        return customer
    }

    async findByEmail(email: string): Promise<CustomerEntity | null> {
        const customer = await CustomerModel.findOne({ email })
        return customer
    }

}