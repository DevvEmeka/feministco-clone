import React from "react";
import feministCo from "../assets/feministco-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="mx-auto z-10 max-w-[96.875rem] top-0 w-full absolute">
      <nav className=" bg-[#ffe369] flex justify-between w-full items-center left-0 right-0 py-[40px] px-[25px] laptop:pt-[2.5rem] laptop:pr-[7.5rem] laptop:pb-[2.5rem] laptop:pl-[7.1875rem]">
        <a className="w-[4em] laptop:text-[16px] text-[14px]" href="/">
          <img className="w-full " src={feministCo} alt="feministco logo" />
        </a>
        <ul className="laptop:flex text-[1.02em] items-center ease-in font-mono font-medium hidden">
          <li className="text-[1.02em] mr-[3.125rem] cursor-pointer">
            <Link to="/endsars">#Endsars</Link>
          </li>
          <li className="text-[1.02em] mr-[3.125rem] cursor-pointer">
            About Us
          </li>
          <li className="text-[1.02em] mr-[3.125rem] cursor-pointer">
            Account Summary
          </li>
          <li className="text-[1.02em] mr-[3.125rem] cursor-pointer">
            Contact Us
          </li>
          <li className="-mt-1">
            <button className="py-[0.5rem] px-[2.375rem] rounded-[3px] cursor-pointer bg-[#000] text-[#ffe369] mr-0">
              Join Us
            </button>
          </li>
        </ul>

        <ul className="flex md:hidden items-center ease-out font-mono font-medium">
          <li className="text-[1.2em] mr-[3.5rem] ">Home</li>
          <li className="text-[1.2em]">
            <Link to="/endsars">#Endsars</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
