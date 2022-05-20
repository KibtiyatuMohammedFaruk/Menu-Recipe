import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {PencilIcon, TrashIcon} from "@heroicons/react/outline"

const MenuDetails = ({ menu }) => {
  return (
    <div className="max-w-4xl mx-auto shadow-lg">
      <div className="relative h-96">
        <Image src={menu.imageUrl} layout="fill" />
      </div>
      <div className="p-4 mb-5">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold italic">{menu.name}</h2>
          <div className="flex items-center space-x-2">
            <HeartIconSolid className="w-10 right-0 text-red-500 cursor-pointer" />
            <span className="text-2xl">250</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-3xl mb-5 bg-slate-600 w-40 text-white p-2 rounded-r-full">
          Recipe:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mb-10">
            <h4 className="text-2xl font-bold italic underline">Ingredients</h4>
            <ul className="ml-10 text-2xl list-disc">
              {menu.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold italic underline">Step</h4>
            <ul className="ml-10 text-2xl list-disc">
              {menu.steps.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-5 mr-10">
        <button className="flex items-center border border-red-500 text-red-500 px-4 space-x-2  mb-8 hover:bg-red-500 hover:text-white transition duration-300 rounded-md">
        <PencilIcon className="w-5" />
          <span>Edit</span>
        </button>
        <button className="flex items-center border border-red-500 text-red-500 p-2 space-x-2  mb-8 hover:bg-red-500 hover:text-white transition duration-300 rounded-md">
        <TrashIcon className="w-5" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default MenuDetails;

export async function getServerSideProps(context) {
  const { menuId } = context.query;
  const res = await axios(`http://localhost:3000/api/menus/${menuId}`);

  console.log(res);

  return {
    props: {
      menu: res.data.menu,
    },
  };
}
