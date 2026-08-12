import { getAllDistricts,findDistrictsByProvince } from "../services/district.service.js";
import { successResponse } from "../utils/response.js";
import { PROVINCE_SLUGS } from "../constants/provinces.js";

export async function getDistricts(req, res, next) {
    try {
        const { province } = req.query;

        if (province !== undefined && province.trim() === "") {

            const error = new Error("Province cannot be empty");
            error.statusCode = 400;

            return next(error);
        }

        const normalizedProvince = province?.toLowerCase();

        if (
            normalizedProvince &&
            !PROVINCE_SLUGS.includes(normalizedProvince)
        ) {
            const error = new Error("Invalid province, Check for spellings or documentation!");
            error.statusCode = 400;

            return next(error);
        }

        let districts;

        if (normalizedProvince) {
            districts = await findDistrictsByProvince(normalizedProvince);
        } else {
            districts = await getAllDistricts();
        }

        districts = districts.map((district) => ({
            id: district.id,
            name: district.name,
            code: district.code,
            ds_count: district.divisional_secretariat_count,
            province: {
                id: district.province_id,
                name: district.province_name,
                code: district.province_code
            }
        }));

        return successResponse(res, districts);
        
    } catch (error) {
        next(error);
    }
}