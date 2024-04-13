import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import femcoLogo from "../assets/feministco-logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#000] max-w-full text-[#fff] font-mono">
      <div className="mx-auto pb-[80px] pt-[80px] px-[30px] laptop:pt-[5rem] laptop:pb-[5rem] mt-[72px] laptop:max-w-[67.6rem] w-full text-center">
        <div className="flex text-center justify-center">
          <img
            src={femcoLogo}
            alt="feministco logo"
            className="w-[3.6em] laptop:w-[4.1em] text-center"
          />
        </div>
        <div className="flex justify-between laptop:justify-center px-[5px] items-center mt-[43px] laptop:text-[1.3em] text-[1.1em]">
          <div className="flex items-center">
            <span className="mr-[10px]">
              <FaTwitter className="text-[1.7em] laptop:text-[1.7em]" />
            </span>
            <small>@feminist_co</small>
          </div>
          <div className="flex items-center ml-[70px]">
            <span className="mr-[10px]">
              <FaInstagram className="text-[1.7em] laptop:text-[1.7em]" />
            </span>
            <small>@feminist.co</small>
          </div>
        </div>
        <div className="flex justify-evenly pt-[60px] laptop:text-[1em] text-[0.8em]">
          <div className="">About us</div>
          <div className="ml-[3.5px]">Account Summary</div>
          <div className="ml-[3.5px]" onClick={() => navigate("/endsars")}>#EndSARS</div>
          <div className="ml-[3.5px]">Contact Us</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
