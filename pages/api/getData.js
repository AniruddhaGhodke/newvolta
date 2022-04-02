import clientPromise from "../../lib/mongodb";

export default async function reqHandler(req, res) {
  const client = await clientPromise;
  const database = await client.db("battery_test_db");
  const volta = database.collection("volta");

  let data = await volta
    .find({ date: new Date("2021-10-21 05:30:00") })
    .toArray();
  res.json({ message: data });
}
