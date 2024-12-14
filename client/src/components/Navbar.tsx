import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" cursor-pointer">
      <div className="flex justify-between ">
        {/* logo */}
        <div className="flex ">
          <Image src={logo} alt="logo" width={115} height={115} />
          <h1 className="mt-8 text-xl font-medium text-yellow-600  ">
            Click to events
          </h1>
        </div>

        {/* menus */}
        <div>
          <ul className="flex gap-12 font-semibold text-gray-600 mt-8 text-medium">
            <Link href="/home">Home</Link>
            <li>vendors</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* button */}
        <div className="mt-7 ">
          <Link href={"/signUp"}>
            <Button variant="contained">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
