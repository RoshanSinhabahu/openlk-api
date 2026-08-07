import { getAllProvinces } from "../services/province.service.js";


export async function getProvinces(req, res) {

    try {

        const provinces = await getAllProvinces();

        res.json(provinces);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}