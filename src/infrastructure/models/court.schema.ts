import { Schema, model } from "mongoose";
import { CourtEntity } from "../../domain/entities/court.entity";

const CourtSchema = new Schema<CourtEntity>(
  {
    uid: { type: String, unique: true },
    name: String,
    type: String,
    location: String,
    settings: {
      lighting: Boolean,
      open: Boolean,
      openTime: String,
      closeTime: String,
      reservationDurations: [
        {
          duration: Number,
          price: Number,
        },
      ],
    },
  },
  { timestamps: true }
);

const CourtModel = model<CourtEntity>("Court", CourtSchema);

export default CourtModel;
