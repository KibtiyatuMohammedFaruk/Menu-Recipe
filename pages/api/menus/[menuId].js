import { dbConnect } from "../../../libs/dbConnect";
import { menuSchema } from "../../../libs/validations";
import Menu from "../../../models/menu.model";

const getMenuById = async (menuId) => {
  const menu = await Menu.findById(menuId);
  if (!menu) {
    return res.status(404).json({ error: "Menu Not Found" });
  }
  return menu;
};

export default async function handler(req, res) {
  await dbConnect();
  const { method, body, query } = req;

  if (method === "GET") {
    const menu = await getMenuById(query.menuId);
    res.status(200).json({ menu });
  } else if (method === "PATCH") {
    let menu = await getMenuById(query.menuId);
    menu = await Menu.findByIdAndUpdate(query.menuId, body, { new: true });
    res.status(200).json({ menu });
  } else if (method === "DELETE") {
    let menu = await getMenuById(query.menuId);
    await Menu.findByIdAndDelete(query.menuId);
    res.status(200).json({ msg: "Menu deleted successfully." });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
