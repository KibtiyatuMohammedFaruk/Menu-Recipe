import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import Link from "next/link";

const Card = ({ menu }) => {
  return (
    <div className="w-80 shadow-md rounded-md bg-white">
      <div className="relative h-52">
        <Image src={menu.imageUrl} layout="fill" />
      </div>
      <div className="px-3 py-5 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-gray-500 font-semibold italic">
            {menu.name}
          </h3>
          <div className="flex items-center space-x-2">
            <HeartIconSolid className="w-5 right-0 text-red-500 cursor-pointer" />
            <span>250</span>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-600">
            <span className="w-20 inline-block font-bold">Type:</span>{" "}
            {menu.type}
          </p>
          <p className="text-lg text-gray-600">
            <span className="w-20 inline-block font-bold">Time:</span>{" "}
            {menu.timeToBeTaken}
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            href={`/${menu._id}`}
          >
            <a
            className="px-10 bg-slate-400 text-white rounded-full py-1.5 font-semibold"
            >

            How To Prepare
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
