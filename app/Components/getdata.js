import { MongoClient } from "mongodb";
//import "dotenv/config";
async function getStaticProps() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const db = client.db(process.env.DB_NAME);
    const cursor = db
      .collection(process.env.WEB_CONTENT)
      .find({}, { projection: { _id: 0 } });

    const documents = await cursor.toArray();
    // console.log(documents, "Fetched documents from MongoDB");
   // const jsonData = documents.map((doc) => JSON.stringify(doc));
  //  const json = JSON.parse(JSON.stringify(documents));
    await client.close();
    // Transform array into an object with unique field as keys

    const json = documents.reduce((acc, item) => {
      if (item.page) {
        // Ensure the field exists unique key
        acc[item.page] = item;
      }
       return acc;
    }, {});
   // console.log(json, "Transformed JSON data");
     
    return {
      props: {
        webContent: json, //sending the { json data }
      },
      revalidate: 55000, // revalidate every 400 second
    };
  } catch (err) {
    console.error("Error fetching data from MongoDB", err);
    return {
      notFound: true,
    };
  }
}
export default getStaticProps;
