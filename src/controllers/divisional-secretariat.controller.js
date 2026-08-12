import { getAllDivisionalSecretariats,findDivisionalSecretariatsByDistrict, findDivisionalSecretariatsByProvince } from "../services/divisional-secretariat.service.js";
import { PROVINCE_SLUGS,DISTRICT_SLUGS } from "../constants/provinces.js";

import { successResponse } from "../utils/response.js";

export async function getDivisionalSecretariats(req, res, next) {
    try {
        const { district } = req.query;
        const { province } = req.query;

        let divisionalSecretariats;
        let data;

        //error if empty
        if (district !== undefined && district.trim() === "") {

             const error = new Error("District cannot be empty");
             error.statusCode = 400;

             return next(error);
        }

        if (province !== undefined && province.trim() === "") {

             const error = new Error("Province cannot be empty");
             error.statusCode = 400;

             return next(error);
        }

        const normalizedDistricts = district?.toLowerCase();
        const normalizedProvince = province?.toLowerCase();

        //error if wrong
        if (
            normalizedDistricts &&
            !DISTRICT_SLUGS.includes(normalizedDistricts)
        ) {
            const error = new Error("Invalid district, Check for spellings or documentation!");
            error.statusCode = 400;

            return next(error);
        }

        if (
            normalizedProvince &&
            !PROVINCE_SLUGS.includes(normalizedProvince)
        ) {
            const error = new Error("Invalid Province, Check for spellings or documentation!");
            error.statusCode = 400;

            return next(error);
        }

        if (normalizedDistricts) {
            divisionalSecretariats = await findDivisionalSecretariatsByDistrict(normalizedDistricts);
                data = divisionalSecretariats.map((ds) => ({
                    id: ds.id,
                    name: ds.name,
                    slug: ds.slug,

                    district: {
                        id: ds.district_id,
                        name: ds.district_name,
                        code: ds.district_code
                    },

                    province: {
                        id: ds.province_id,
                        name: ds.province_name,
                        code: ds.province_code
                    }
                }));
        } else if(normalizedProvince){
            divisionalSecretariats = await findDivisionalSecretariatsByProvince(normalizedProvince);
                data = divisionalSecretariats.map((ds) => ({
                    id: ds.id,
                    name: ds.name,
                    slug: ds.slug,

                    district: {
                        id: ds.district_id,
                        name: ds.district_name,
                        code: ds.district_code
                    },

                    province: {
                        id: ds.province_id,
                        name: ds.province_name,
                        code: ds.province_code
                    }
                }));
        }

        else {
            divisionalSecretariats = await getAllDivisionalSecretariats();
                data = divisionalSecretariats.map((ds) => ({
                    id: ds.id,
                    name: ds.name,
                    slug: ds.slug,

                    district: {
                        id: ds.district_id,
                        name: ds.district_name,
                        code: ds.district_code
                    }
                }));
        }

        

        return successResponse(res, data);

    } catch (error) {
        next(error);
    }
}