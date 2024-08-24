import { MongoClient } from 'mongodb';

export default async function featchData(request) {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        
        const db = client.db(process.env.DB_NAME);
        const collection = db.collection(process.env.WEB_CONTENT);

        // Project only necessary fields (excluding _id)
        const cursor = collection.find({}, { projection: { _id: 0 } });

        const documents = await cursor.toArray();
        await client.close();

        // Transform data into an object with page as the key
        const json = documents.reduce((acc, item) => {
            if (item.page) { // Ensure the field exists for a unique key
                acc[item.page] = item;
            }
            return acc;
        }, {});

        return {
            props: {
                webContent: json, //sending the { json data }
            },
            revalidate: 600000, // revalidate every 400 second
        };
    } catch (err) {
        console.error("Error fetching data from MongoDB", err);
        res.status(500).json({ error: 'Failed to fetch data' }); // Send error response
    }
}