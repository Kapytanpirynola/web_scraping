const fs = require("fs");

// Leer datos
const data = JSON.parse(fs.readFileSync("data/jobs.json", "utf-8"));

// Contar trabajos por ubicación
const locations = {};

data.forEach(job => {
    const loc = job.location;

    if (locations[loc]) {
        locations[loc]++;
    } else {
        locations[loc] = 1;
    }
});

console.log("📍 Trabajos por ubicación:");
console.log(locations);

const sorted = Object.entries(locations)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

console.log("\n🏆 Top 5 ubicaciones:");
console.log(sorted);