import {
    getAllDivisionalSecretariats,
    findDivisionalSecretariatsByDistrict
} from "../services/divisional-secretariat.service.js";

import { successResponse } from "../utils/response.js";

export async function getDivisionalSecretariats(req, res, next) {
    try {
        const { district } = req.query;

        let divisionalSecretariats;
        let data;

        // if (district !== undefined && districts.trim() === "") {

        //     const error = new Error("Province cannot be empty");
        //     error.statusCode = 400;

        //     return next(error);
        // }

        if (district) {
            divisionalSecretariats = await findDivisionalSecretariatsByDistrict(district.toLowerCase());
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
        } else {
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