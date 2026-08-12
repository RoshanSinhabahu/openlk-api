import { db } from "../config/db.js";

export async function getAllDistricts() {
    const result = await db.query(
        `
        SELECT
            d.id,
            d.name,
            d.slug,
            d.code,

            COUNT(ds.id)::INTEGER AS divisional_secretariat_count,

            p.id AS province_id,
            p.name AS province_name,
            p.code AS province_code

        FROM districts d

        JOIN provinces p
            ON d.province_id = p.id

        LEFT JOIN divisional_secretariats ds
            ON ds.district_id = d.id

        GROUP BY
            d.id,
            d.name,
            d.slug,
            d.code,
            p.id,
            p.name,
            p.code

        ORDER BY d.id;
        `
    );

    return result.rows;
}

export async function findDistrictsByProvince(provinceSlug) {
    const result = await db.query(
        `
        SELECT
            d.id,
            d.name,
            d.slug,
            d.code,

            COUNT(ds.id)::INTEGER AS divisional_secretariat_count,

            p.id AS province_id,
            p.name AS province_name,
            p.code AS province_code

        FROM districts d

        JOIN provinces p
            ON d.province_id = p.id

        LEFT JOIN divisional_secretariats ds
            ON ds.district_id = d.id

        WHERE p.slug = $1
        
        GROUP BY
            d.id,
            d.name,
            d.slug,
            d.code,
            p.id,
            p.name,
            p.code
        
        ORDER BY d.id;
        `,
        [provinceSlug]
    );

    return result.rows;
}