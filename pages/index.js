import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const getMenus = async () => {
      const res = await axios("http://localhost:3000/api/menus");

      setMenus(res.data.menus);
    };

    getMenus();
  }, []);

  return (
    <div className="max-w-6xl mx-auto flex justify-center flex-wrap gap-10">
      {menus.map((menu, idx) => (
        <Card key={idx} menu={menu} />
      ))}
    </div>
  );
}
