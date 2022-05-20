import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-md py-5 bg-white fixed w-full z-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-xl text-teal-500 font-semibold">
          <Link href="/">CHEF'S TOUCH</Link>
        </h2>
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/">Chef's Recipe</Link>
            </li>
            <li>
              <Link href="/add-menu">Add Menu</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
