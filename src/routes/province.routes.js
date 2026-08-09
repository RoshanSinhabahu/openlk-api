import express from "express";

import { getProvinces } from "../controllers/province.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/v1/provinces:
 *   get:
 *     summary: Get all provinces
 *     description: Returns a list of all provinces in Sri Lanka.
 *     responses:
 *       200:
 *         description: Successfully retrieved provinces
 */

router.get("/provinces", getProvinces);

export default router;