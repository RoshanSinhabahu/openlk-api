import { getAllDistricts, findDistrictsByProvince } from "../services/district.service.js";

export async function getDistricts(req, res) {
    try {
        const districts = await getAllDistricts();

        const formattedDistricts = districts.map((district) => ({
            id: district.id,
            name: district.district_name,
            code: district.district_code,

            province: {
                id: district.province_id,
                name: district.province_name,
                code: district.province_code
            }
        }));

        res.json(formattedDistricts);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to retrieve districts"
        });
    }
}

export async function getDistrictsByProvince(req, res) {
    try {
        const { provinceId } = req.params;

        const districts = await findDistrictsByProvince(provinceId);

        res.json(districts);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to retrieve districts"
        });
    }
}