import { ReservationEntity } from "../entities/reservation.entity";

export interface IReservationRepository {
    create(reservation: ReservationEntity): Promise<ReservationEntity | null>;
    findByUid(uid: string): Promise<ReservationEntity | null>;
    findByCustomerId(customerId: string): Promise<ReservationEntity[]>;
    findByCourtId(courtId: string): Promise<ReservationEntity[]>;
    findByDate(date: Date): Promise<ReservationEntity[]>;
    findByDateRange(startDate: Date, endDate: Date): Promise<ReservationEntity[]>;
    findAll(): Promise<ReservationEntity[]>;
    update(reservation: ReservationEntity): Promise<ReservationEntity | null>;
    delete(uid: string): Promise<boolean>;
}
