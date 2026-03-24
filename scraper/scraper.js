const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const URL = "https://realpython.github.io/fake-jobs/";

async function scrapeJobs() {
    try{
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        const jobs = [];

        $(".card-content").each((i, el) =>{
            const title = $(el).find(".title").text().trim();
            const company = $(el).find(".company").text().trim();
            const location = $(el).find(".location").text().trim();


            // Con esto evitamos guardar datos basios 
            if ( title && company && location){
                jobs.push({
                    title,
                    company,
                    location,
                    date: new Date().toISOString()
                });
            }
        });
        
        // Guarda los datos en un .json
        fs.writeFileSync("data/jobs.json", JSON.stringify(jobs, null, 2));

        console.log(`✅ ${jobs.length} trabajos guardados`);
    } catch (error) {
        console.error("❌ Error:", error.message);
    }
    
}

scrapeJobs();
