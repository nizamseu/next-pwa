import { connectToDatabase } from "../../lib/mongodb";
const ObjectId = require("mongodb").ObjectID;
export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const collection = await db.collection("users");

  if (req.method === "GET") {
    const data = await db.collection("users").find({}).toArray();
    res.json(data);
  }

  if (req.method === "DELETE") {
    const id = req.query;
    const result = await collection.deleteOne({ _id: ObjectId(id) });
    res.json(result);
  }
}
