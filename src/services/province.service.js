import { db } from "../config/db.js";


export async function getAllProvinces() {

    const result = await db.query(
        "SELECT * FROM provinces ORDER BY id"
    );

    return result.rows;
}