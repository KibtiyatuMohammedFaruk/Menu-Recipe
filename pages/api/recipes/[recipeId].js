import { dbConnect } from "../../../libs/dbConnect";
import Recipe from "../../../models/recipe.model";

export default async function handler(req, res) {
  await dbConnect();
  const { method, body } = req;

  if (method === "GET") {
  } else if (method === "PATCH") {
  } else if (method === "DELETE") {
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
