import { ObjectID } from "bson";
import { connectToDatabase } from "../../lib/mongodb";
const ObjectId = require("mongodb").ObjectID;

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const userDB = await db.collection("users");

  const id = req.query;
  if (req.method === "GET") {
    const data = await userDB.find({ _id: ObjectID(id) }).toArray();
    res.json(data);
  }
  if (req.method === "PUT") {
    const options = { upsert: true };
    const filter = { _id: ObjectId(id) };
    const data = req.body;
    console.log(data);
    console.log(req.body);

    const updatedUser = {
      $set: {
        name: data.name,
        email: data.email,
        location: data.location,
        position: data.position,
      },
    };

    const result = await userDB.updateOne(filter, updatedUser, options);
    res.json(result);
  }
}
