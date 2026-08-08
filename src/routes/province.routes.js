import express from "express";

import { getProvinces } from "../controllers/province.controller.js";
import { getDistrictsByProvince } from "../controllers/district.controller.js";

const router = express.Router();

router.get("/", getProvinces);
router.get("/:provinceId/districts", getDistrictsByProvince);

export default router;