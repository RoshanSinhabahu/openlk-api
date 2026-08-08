import { getAllDistricts, findDistrictsByProvince } from "../services/district.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

export async function getDistricts(req, res) {
    try {
        const { province } = req.query;
        const normalizedProvince = province?.toLowerCase();

        let districts;

        if (normalizedProvince) {
            districts = await findDistrictsByProvince(normalizedProvince);
        } else {
            districts = await getAllDistricts();
        }

        return successResponse(res, districts);

    } catch (error) {
        console.error(error);

        return errorResponse(res, "Failed to retrieve districts");
    }
}