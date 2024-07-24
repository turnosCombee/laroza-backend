import { ReservationUseCases } from "../../../application/useCases/ReservationUseCases";
import { ReservationEntity } from "../../../domain/entities/reservation.entity";
import { MongoReservationRepository } from "../../../infrastructure/repositories/MongoReservationRepository";
import { v4 as uuidv4 } from 'uuid';  // Importa uuid
import { MongoCourtRepository } from "../../../infrastructure/repositories/MongoCourtRepository";

const reservationRepository = new MongoReservationRepository();
const courtRepository = new MongoCourtRepository(); // Replace CourtRepository with the actual repository class
const reservationUseCases = new ReservationUseCases(reservationRepository, courtRepository);

export const createReservation = async (data: ReservationEntity): Promise<ReservationEntity> => {
    const { courtId, customerId, date, startTime, endTime } = data;
    console.log('llegue al controller')
    const reservation = await reservationUseCases.createReservation({
        uid: uuidv4(),
        courtId,
        customerId,
        date,
        startTime,
        endTime,
        duration: 0,
        price: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return reservation;
};