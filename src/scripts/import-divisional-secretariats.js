import { db } from "../config/db.js";
import data from "../data/divisional-secretariats.json" with { type: "json" };

function createSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

// MRCB-2024 district names → our database district slugs
const districtNameMap = {
    "Killinochchi": "kilinochchi",
    "Moneragala": "monaragala"
};

async function importDivisionalSecretariats() {
    try {
        for (const province of data.provinces) {
            for (const district of province.districts) {

                const districtSlug =
                    districtNameMap[district.name] ??
                    createSlug(district.name);

                const districtResult = await db.query(
                    `
                    SELECT id, name
                    FROM districts
                    WHERE slug = $1
                    `,
                    [districtSlug]
                );

                if (districtResult.rows.length === 0) {
                    console.error(
                        `District not found: ${district.name}`
                    );
                    continue;
                }

                const districtId = districtResult.rows[0].id;

                for (const dsName of district.divisional_secretariats) {

                    const dsSlug = createSlug(dsName);

                    await db.query(
                        `
                        INSERT INTO divisional_secretariats
                            (name, slug, district_id)
                        VALUES
                            ($1, $2, $3)
                        ON CONFLICT (slug) DO NOTHING
                        `,
                        [dsName, dsSlug, districtId]
                    );

                    console.log(
                        `Imported: ${dsName} → ${district.name}`
                    );
                }
            }
        }

        console.log("DS import completed.");

    } catch (error) {
        console.error("DS import failed:", error);

    } finally {
        await db.end();
    }
}

importDivisionalSecretariats();