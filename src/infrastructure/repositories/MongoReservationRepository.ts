import { ReservationEntity } from "../../domain/entities/reservation.entity";
import { IReservationRepository } from "../../domain/interfaces/IReservationRepository";
import ReservationModel from '../models/reservation.schema';

export class MongoReservationRepository implements IReservationRepository {
    constructor() {
        this.create = this.create.bind(this)
        this.findByUid = this.findByUid.bind(this)
        this.findByCustomerId = this.findByCustomerId.bind(this)
        this.findByCourtId = this.findByCourtId.bind(this)
        this.findByDate = this.findByDate.bind(this)
        this.findByDateRange = this.findByDateRange.bind(this)
        this.findAll = this.findAll.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async create(reservation: ReservationEntity): Promise<ReservationEntity | null> {
        const newReservation = await ReservationModel.create(reservation)
        return newReservation
    }

    async findByUid(uid: string): Promise<ReservationEntity | null> {
        const reservation = await ReservationModel.findOne({ uid })
        return reservation
    }

    async findByCustomerId(customerId: string): Promise<ReservationEntity[] | null> {
        const reservations = await ReservationModel.find({ customerId })
        return reservations
    }

    async findByCourtId(courtId: string): Promise<ReservationEntity[] | null> {
        const reservations = await ReservationModel.find({ courtId })
        return reservations
    }

    async findByDate(date: Date): Promise<ReservationEntity[] | null> {
        const reservations = await ReservationModel.find({ date })
        return reservations
    }

    async findByDateRange(startDate: Date, endDate: Date): Promise<ReservationEntity[] | null> {
        const reservations = await ReservationModel.find({ date: { $gte: startDate, $lte: endDate } })
        return reservations
    }

    async findAll(): Promise<ReservationEntity[] | null> {
        const reservations = await ReservationModel.find()
        return reservations
    }

    async update(reservation: ReservationEntity): Promise<ReservationEntity | null> {
        const updatedReservation = await ReservationModel.findOneAndUpdate({ uid: reservation.uid }, reservation, { new: true })
        return updatedReservation
    }

    async delete(uid: string): Promise<boolean> {
        const isDeleted = await ReservationModel.deleteOne({ uid })
        return isDeleted.deletedCount === 1
    }
}