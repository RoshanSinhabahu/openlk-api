import { getAllProvinces } from "../services/province.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

export async function getProvinces(req, res) {

    try {

        const provinces = await getAllProvinces();

        return successResponse(res, provinces);

    } catch (error) {
        
        console.error(error);
        return errorResponse(res,"Failed to retrieve provinces");

    }

}