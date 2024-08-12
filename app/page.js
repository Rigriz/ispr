import { MongoClient } from "mongodb";
import "dotenv/config";
const connectToMongo = async () => {
  const uri = "mongodb+srv://5g:5g@cluster0.o98aylc.mongodb.net/";
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const db = client.db("Isrp");
    const cursor = db.collection("webpages").find();
    const documents = await cursor.toArray();
    const jsonData = documents.map((doc) => JSON.stringify(doc));
    console.log(jsonData);
    await client.close();
    return jsonData;
  } catch (err) {
    console.error("error connecting to MongoDB", err);
  }
};
const data = connectToMongo();
function Home() {
  return (
    <main className={styles.main}>
      <div className={style.imagecontainer}>
        <img className={style.image} src="./needed/main.png" alt="College Picture" />
      </div>
      <MainPage />
    </main>
  );
}
