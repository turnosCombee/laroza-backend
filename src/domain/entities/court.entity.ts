interface ReservationDuration {
  duration: number;
  price: number;
}

interface CourtSettings {
  lighting: boolean;
  open: boolean;
  openTime: string;
  closeTime: string;
  reservationDurations: ReservationDuration[];
}

export interface CourtEntity {
  uid: string;
  name: string;
  type: string;
  location?: string;
  settings: CourtSettings;
}
