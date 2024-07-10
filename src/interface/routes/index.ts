import { Router } from "express";
import customerRouter from "./customerRouter"; // Replace "./customerRouter" with the correct path to your customerRouter file

const router = Router();

router.use("/customers", customerRouter);

export default router;