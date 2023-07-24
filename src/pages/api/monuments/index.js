import connectDB from "../../../../db/connect";
import Monument from "../../../../db/models/monuments";

export default async function handler(req, res) {
  await connectDB();

  const monuments = await Monument.find();

  res.status(200).json(monuments);
}
