import clientPromise from "../../lib/mongodb";

export default async function reqHandler(req, res) {
  const client = await clientPromise;
  const database = await client.db("battery_test_db");
  const volta = database.collection("volta");
  const users = database.collection("users");

  try {
    const checkUser = await users
      .find({ accnt_id: req.body.accnt_id })
      .toArray();
    if (!checkUser[0]) {
      res.json({
        message: `User With ${req.body.accnt_id} Does Not Exist!!`,
        status: "not ok",
      });
      return false;
    }
  } catch (err) {
    res.json({
      message: `Server Error! Please try again.`,
      status: "not ok",
    });
  }

  try {
    let date = new Date(req.body.date.slice(0, 10) + " 00:00:00");
    date = new Date(date.getTime() + 330 * 60000);

    const dateTime = new Date(new Date(req.body.date).getTime() + 330 * 60000);

    await volta.updateOne(
      {
        date: date,
        accnt_id: req.body.accnt_id,
      },
      {
        $push: {
          data: {
            time: dateTime,
            voltage: req.body.voltage || null,
            current: req.body.current || null,
            capacity: req.body.capacity || null,
            avl: req.body.avl || null,
          },
        },
      },
      { upsert: true }
    );

    res.json({ message: "Inserted Successfully!", status: "ok" });
  } catch (err) {
    res.json({
      message: `Server Error! Please try again.`,
      status: "not ok",
    });
  }
}
