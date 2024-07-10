import { Router } from "express";
import { createCustomerHandler } from "../handlers/customer/createCustomerHandler";

const router = Router();

router.post("/", createCustomerHandler);

export default router;