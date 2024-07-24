import { Router } from "express";
import customerRouter from "./customerRouter"; // Replace "./customerRouter" with the correct path to your customerRouter file
import courtRouter from "./courtRouter"; // Replace "./courtRouter" with the correct path to your courtRouter file
import reservationRouter from "./reservationRouter"; // Replace "./reservationRouter" with the correct path to your reservationRouter file

const router = Router();

router.use("/customers", customerRouter);
router.use("/court", courtRouter);
router.use("/reservation", reservationRouter);

export default router;