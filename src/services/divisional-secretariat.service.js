import { db } from "../config/db.js";

export async function getAllDivisionalSecretariats() {
    const result = await db.query(`
        SELECT
            ds.id,
            ds.name,
            ds.slug,
            d.id AS district_id,
            d.name AS district_name,
            d.code AS district_code
        FROM divisional_secretariats ds
        JOIN districts d
            ON ds.district_id = d.id
        ORDER BY ds.id
    `);

    return result.rows;
}

export async function findDivisionalSecretariatsByDistrict(districtSlug) {
    const result = await db.query(
        `
        SELECT
            ds.id,
            ds.name,
            ds.slug,
            d.id AS district_id,
            d.name AS district_name,
            d.code AS district_code,
            p.name AS province_name,
            p.code AS province_code,
            p.id AS province_id
        FROM divisional_secretariats ds
        JOIN districts d
            ON ds.district_id = d.id
        JOIN provinces p
            ON d.province_id = p.id
        WHERE d.slug = $1
        ORDER BY ds.id
        `,
        [districtSlug]
    );

    return result.rows;
}