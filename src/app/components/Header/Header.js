import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <ul className="flex w-[100vw] py-[2rem]  justify-center items-center justify-between px-12">
      <div>
        <h1 className="text-gray-900 text-2xl font-bold">episym</h1>
      </div>
      <div className="gap-4 font-light line-clamp-2 flex">
        <Link href={"/"}>Menu</Link>
        <Link href={"/"}>Events</Link>
        <Link href={"/"}>Gallery</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <button className="w-fit px-4 py-2 bg-orange-400 text-white">
        Book a Table
      </button>
    </ul>
  );
};

export default Header;
