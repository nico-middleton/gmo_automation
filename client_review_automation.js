const fs = require('fs');
const path = require('path'); 
const { MongoClient } = require('mongodb'); 

// mongoDB connection URI and database details
// make sure to update w/ your MongoDB compass connection string, /v5 should be at the end
const uri = "mongodb+srv://nico:8SnSHzOJNZGA2y97@cleandns-prod.ltzfv.mongodb.net/test/v5";
const client = new MongoClient(uri);
const dbName = "v5";
const collectionName = "cases";

async function generateCSV() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // calculate date range (today and tomorrow in UTC)
        const today = new Date();
        const startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
        const endDate = new Date(startDate);
        endDate.setUTCDate(startDate.getUTCDate() + 1);

        // define the aggregation pipeline
        const pipeline = [
            {
                $match: {
                    owner: "gmoregistry",
                    "status.workflow.current.status": "Client Review",
                    "status.workflow.current.ts": {
                        $gte: startDate,
                        $lt: endDate
                    }
                }
            },
            { $project: { actors: 1, _id: 1 } },
            { $unwind: { path: "$actors" } },
            {
                $lookup: {
                    from: "actorsClient",
                    localField: "actors",
                    foreignField: "value",
                    as: "domain_info"
                }
            },
            { $unwind: { path: "$domain_info" } },
            { $match: { "domain_info.client": "gmoregistry" } },
            {
                $project: {
                    _id: 1,
                    actors: 1,
                    "domain_info.whois.registrar.name": 1,
                    "domain_info.whois.ts.created": 1
                }
            }
        ];

        // execute the aggregation pipeline
        const results = await collection.aggregate(pipeline).toArray();

        // prepare CSV headers
        const csvHeaders = ["_id", "actors", "domain_info.whois.registrar.name", "domain_info.whois.ts.created"];
        const csvRows = [csvHeaders.join(",")];

        // convert query results to CSV rows
        results.forEach(doc => {
            const id = doc._id || "";
            const actor = doc.actors || "";
            const registrarName = doc.domain_info?.whois?.registrar?.name || "";
            const createdTs = doc.domain_info?.whois?.ts?.created || "";

            const row = [id, actor, registrarName, createdTs].map(field => `"${field}"`).join(",");
            csvRows.push(row);
        });

        const month = today.getUTCMonth() + 1; // Months are zero-based
        const day = today.getUTCDate();
        const fileName = `gmo_review_${month}-${day}.csv`;

        // use the directory of the script as the output path
        const scriptDir = __dirname;
        const outputPath = path.join(scriptDir, fileName);

        fs.writeFileSync(outputPath, csvRows.join("\n"));
        console.log(`CSV saved to ${outputPath}`);
    } catch (error) {
        console.error("Error generating CSV:", error);
    } finally {
        // close the MongoDB connection
        await client.close();
    }
}

generateCSV();