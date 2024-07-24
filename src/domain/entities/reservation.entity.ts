export interface ReservationEntity {
    uid: string;
    customerId: string;
    courtId: string;
    date: Date;
    startTime: Date;
    endTime: Date;
    duration: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    }