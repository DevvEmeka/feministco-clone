import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import femcoLogo from "../assets/feministco-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#000] max-w-full text-[#fff]">
      <div className="mx-auto pb-[40px] pt-[80px] px-[30px] laptop:pt-[12.6rem] laptop:pb-[2rem] mt-[72px] laptop:max-w-[67.6rem] w-full text-center">
        <div className="flex text-center justify-center">
          <img
            src={femcoLogo}
            alt="feministco logo"
            className="w-[3.6em] text-center"
          />
        </div>
        <div className="flex justify-between px-[5px] items-center mt-[43px] text-[1.1em]">
          <div className="flex items-center">
            <span className="mr-[10px]">
              <FaTwitter className="text-[1.38em]" />
            </span> 
            <small>@feminist_co</small>
          </div>
          <div className="flex items-center ml-[70px]">
            <span className="mr-[10px]">
              <FaInstagram className="text-[1.38em]" />
            </span>
            <small>@feminist.co</small>
          </div>
        </div>
        <div className="flex pt-[60px] justify-evenly text-[0.8em]">
            <div>About us</div>
            <div>Account Summary</div>
            <a href="/endsars">#EndSARS</a>
            <div>Contact Us</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
