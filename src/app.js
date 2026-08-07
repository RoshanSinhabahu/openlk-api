import express from "express";
import cors from "cors";

import provinceRoutes from "./routes/province.routes.js";


const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/v1/provinces", provinceRoutes);


export default app;