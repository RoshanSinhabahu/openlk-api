import express from "express";
import cors from "cors";

import provinceRoutes from "./routes/province.routes.js";
import districtRoutes from "./routes/district.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/v1", provinceRoutes);
app.use("/api/v1", districtRoutes);

app.use(errorMiddleware);

export default app;