import { db } from "../config/db.js";

export async function getAllDistricts() {
    const result = await db.query(
        `SELECT
            d.id,
            d.name AS district_name,
            d.code AS district_code,
            p.id AS province_id,
            p.name AS province_name,
            p.code AS province_code
        FROM districts d
        JOIN provinces p
            ON d.province_id = p.id
        ORDER BY d.id`
    );

    return result.rows;
}

export async function findDistrictsByProvince(provinceSlug) {
    const result = await db.query(
        `
        SELECT
            districts.id,
            districts.name AS district_name,
            districts.code AS district_code,
            provinces.id AS province_id,
            provinces.name AS province_name,
            provinces.code AS province_code
        FROM districts
        JOIN provinces
            ON districts.province_id = provinces.id
        WHERE provinces.slug = $1
        ORDER BY districts.id
        `,
        [provinceSlug]
    );

    return result.rows;
}