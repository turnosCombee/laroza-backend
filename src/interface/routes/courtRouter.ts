import { Router } from "express";
import { createCourtHandler } from "../handlers/court/createCourtHandler";

const router = Router();

router.post("/", createCourtHandler);

export default router;