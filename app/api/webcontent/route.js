import { MongoClient, ServerApiVersion } from 'mongodb';
import { NextResponse } from 'next/server';
//import fetchData from "@/app/(pages)/api/fetchdata";
export async function getStaticProps(request) {
    const uri = process.env.MONGODB_URI;
    //console.log(request);
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Access the database and collection
        const database = client.db(process.env.DB_NAME);
        const collection = database.collection(process.env.WEB_CONTENT);
        if (!collection) {
            throw new Error(`Collection not found: ${process.env.WEB_CONTENT}`);
        }
        // Perform the query
        const result = await collection.find({}, { projection: { _id: 0 } }).toArray();
        await client.close();
        // Process the result
        const json = result.reduce((acc, item) => {
            if (item.page) {
                //console.log(item,'rout');
                // Ensure the field exists for a unique key
                acc[item.page] = item;
            }
            return acc;
        }, {});
        //return json;
        // console.log(json); //whole data of webcontent
        const record = json[request];
        //console.log(record,'sdf')
        return {
            props: {
                webContent: record, //sending the { json data }
            },
            revalidate: 60000, // revalidate every 400 second
        };
    } catch (error) {
        if (error.codeName === 'AtlasError') {
            console.error('AtlasError:', error.code, error.codeName, error.errmsg);
            return { error: 'An error occurred while connecting to the database. Please try again later.' };
        } else {
            console.error(error);
            return { error: error.message };
        }
    } finally {
        // Close the client connection
        await client.close();
    }
}
export async function GET(request) {
    const url = new URL(request.url);
    const queryParams = Object.fromEntries(url.searchParams.entries());
    const webcontent = queryParams.webcontent;
    //console.log(webcontent);
    const data = await getStaticProps(webcontent);
    // console.log(webcontent);
    // const webcontent= request.query.webcontent;
    //const data = await getStaticProps(webcontent);
    // const data = await fetchData(webcontent);
    //console.log(data);
    //const res = await request.json()
    //const data = await fetchdata();
    return NextResponse.json(data);
}