import express from "express";
import cors from "cors";

import provinceRoutes from "./routes/province.routes.js";
import districtRoutes from "./routes/district.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/provinces", provinceRoutes);
app.use("/api/v1/districts", districtRoutes);

export default app;