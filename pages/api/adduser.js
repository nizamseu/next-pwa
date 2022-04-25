// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// aamartaka
// bep6Epaoy46ol1Kv
// export default function handler(req, res) {
//   console.log(req.body);
//   res.status(200).json(req.body, { name: "John Doe" });
// }

import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const data = req.body;
  console.log(data);
  const { db } = await connectToDatabase();
  const collection = await db.collection("users");
  const result = await collection.insertOne(data);
  console.log(result);

  res.json(result);
}
