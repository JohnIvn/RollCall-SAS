import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.DATABASE_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
};

try {
  await client.connect();
  const database = client.db("myDatabase");
  const collection = database.collection("myCollection");

  const result = await collection.insertOne({
    name: "John Doe",
    age: 30,
    city: "New York",
  });

  console.log(`New document inserted with _id: ${result.insertedId}`);
} finally {
  await client.close();
}

run().catch(console.dir);
