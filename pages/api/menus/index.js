import { dbConnect } from "../../../libs/dbConnect";
import Menu from "../../../models/menu.model";

export default async function handler(req, res) {
  await dbConnect();
  const { method, body } = req;

  if (method === "GET") {
    const menus = await Menu.find({});
    res.status(200).json({ menus });
  } else if (method === "POST") {
    const menu = await Menu.create(body);
    res.status(201).json({ menu });
  } else {
    res
      .status(405)
      .json({ error: "Method Not Allowed. Only GET and POST is allowed." });
  }
}
