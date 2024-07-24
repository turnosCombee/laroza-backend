import { Schema, model } from 'mongoose';
import { ReservationEntity } from '../../domain/entities/reservation.entity';

const ReservationSchema = new Schema<ReservationEntity>({
    uid: { type: String, unique: true },
    customerId: String,
    courtId: String,
    date: Date,
    startTime: Date,
    endTime: Date,
    duration: Number,
    price: Number,
}, { timestamps: true });

const ReservationModel = model<ReservationEntity>('Reservation', ReservationSchema);

export default ReservationModel;