import { Router } from "express";
import { createReservationHandler } from "../handlers/reservation/createReservationHandler";

const router = Router();

router.post("/", createReservationHandler);

export default router;