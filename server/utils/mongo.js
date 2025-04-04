import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // make sure .env is loaded

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI is missing! Check your .env file.");
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

export default async function getDB(dbName = "anonymous_social") {
  const client = await clientPromise;
  return client.db(dbName);
}
