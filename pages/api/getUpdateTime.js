import clientPromise from "../../lib/mongodb";

export default async function reqHandler(req, res) {
  const client = await clientPromise;
  const database = await client.db("battery_test_db");
  const volta = database.collection("users");

  try {
    const checkUser = await volta
      .find({ accnt_id: req.body.accnt_id })
      .toArray();
    if (!checkUser[0]) {
      res.json({
        message: `User With ${req.body.accnt_id} Does Not Exist!!`,
        status: "not ok",
      });
    }
    res.json({ updateTime: checkUser[0]["updateTime"], status: "ok" });
  } catch (err) {
    res.json({
      message: `Server Error! Please try again.`,
      status: "not ok",
    });
  }
}
