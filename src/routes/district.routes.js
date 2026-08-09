import express from "express";
import { getDistricts } from "../controllers/district.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/v1/districts:
 *   get:
 *     summary: Get districts
 *     description: Returns all districts or filters districts by province.
 *     parameters:
 *       - in: query
 *         name: province
 *         required: false
 *         schema:
 *           type: string
 *         description: Province slug used to filter districts.
 *         example: western
 *     responses:
 *       200:
 *         description: Successfully retrieved districts.
 *       400:
 *         description: Invalid or empty province.
 *       500:
 *         description: Internal server error.
 */

router.get("/districts", getDistricts);

export default router;