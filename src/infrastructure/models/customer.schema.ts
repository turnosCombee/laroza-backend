import { Schema, model } from 'mongoose';
import { CustomerEntity } from '../../domain/entities/customer.entity';

const CustomerSchema = new Schema<CustomerEntity>({
    uid: { type: String, unique: true },
    name: String,
    email: { type: String, unique: true },
    phone: String
}, { timestamps: true });

const CustomerModel = model<CustomerEntity>('Customer', CustomerSchema);

export default CustomerModel;