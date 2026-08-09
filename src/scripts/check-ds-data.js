import data from "../data/divisional-secretariats.json" with { type: "json" };

let total = 0;

for (const province of data.provinces) {
    for (const district of province.districts) {
        total += district.divisional_secretariats.length;
    }
}

console.log(`Total DS divisions: ${total}`);