import express from "express";
import { getDivisionalSecretariats } from "../controllers/divisional-secretariat.controller.js";

const router = express.Router();

router.get("/divisional-secretariats", getDivisionalSecretariats);

export default router;