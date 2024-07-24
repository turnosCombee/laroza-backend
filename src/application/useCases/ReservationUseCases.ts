import { ReservationEntity } from "../../domain/entities/reservation.entity";
import { IReservationRepository } from "../../domain/interfaces/IReservationRepository";
import { ICourtRepository } from "../../domain/interfaces/ICourtRepository"; // Importar el repositorio de canchas
import { CourtEntity } from "../../domain/entities/court.entity"; // Importar la entidad de canchas

export class ReservationUseCases {
  constructor(
    private reservationRepository: IReservationRepository,
    private courtRepository: ICourtRepository // Incluir el repositorio de canchas
  ) {}

  async createReservation(
    reservation: ReservationEntity
  ): Promise<ReservationEntity> {
    // Obtener las configuraciones de la cancha
    const court = await this.courtRepository.findByUid(reservation.courtId);
    console.log(court);
    if (!court) {
      throw new Error("Court not found");
    }

    const duration = this.calculateDuration(
      reservation.startTime.toString(),
      reservation.endTime.toString()
    );

    const price = this.calculatePrice(duration, court);
    console.log(price)
    const reservationWithDetails = { ...reservation, duration, price };

    await this.reservationRepository.create(
      reservationWithDetails
    );
    return reservationWithDetails;
  }

  private calculateDuration(startTime: string, endTime: string): number {
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);

    const duration = (endDate.getTime() - startDate.getTime()) / (1000 * 60); // Duración en minutos
    return duration;
}

  private calculatePrice(duration: number, court: CourtEntity): number {
    const { reservationDurations } = court.settings;
    const durationConfig = reservationDurations.find(
      (d) => d.duration === duration
    );
    console.log(durationConfig);
    if (!durationConfig) {
      throw new Error(`No price defined for the given ${duration}`);
    }
    return durationConfig.price;
  }

  async getReservationByUid(uid: string): Promise<ReservationEntity> {
    const reservation = await this.reservationRepository.findByUid(uid);
    return reservation;
  }

  async getReservationByCustomerId(
    customerId: string
  ): Promise<ReservationEntity[]> {
    const reservations = await this.reservationRepository.findByCustomerId(
      customerId
    );
    return reservations;
  }

  async getReservationByCourtId(courtId: string): Promise<ReservationEntity[]> {
    const reservations = await this.reservationRepository.findByCourtId(
      courtId
    );
    return reservations;
  }

  async getReservationByDate(date: Date): Promise<ReservationEntity[]> {
    const reservations = await this.reservationRepository.findByDate(date);
    return reservations;
  }

  async getReservationByDateRange(
    startDate: Date,
    endDate: Date
  ): Promise<ReservationEntity[]> {
    const reservations = await this.reservationRepository.findByDateRange(
      startDate,
      endDate
    );
    return reservations;
  }

  async getAllReservations(): Promise<ReservationEntity[]> {
    const reservations = await this.reservationRepository.findAll();
    return reservations;
  }

  async updateReservation(
    reservation: ReservationEntity
  ): Promise<ReservationEntity> {
    const updatedReservation = await this.reservationRepository.update(
      reservation
    );
    return updatedReservation;
  }

  async deleteReservation(uid: string): Promise<boolean> {
    const isDeleted = await this.reservationRepository.delete(uid);
    return isDeleted;
  }
}
