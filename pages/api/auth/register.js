import bcrypt from "bcryptjs";
import { dbConnect } from "../../../libs/dbConnect";
import User from "../../../models/user.model";

export default async function handler(req, res) {
  await dbConnect();
  const { method, body } = req;

  if (method === "POST") {
    const { email, password } = body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Email already in used" });
    }
    let hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ ...body, password: hashedPassword });
    res.status(201).json({ user });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
