import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import femcoLogo from "../assets/feministco-logo.png";

const EndSarsFooter = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#f9dd58] max-w-full text-[#000] font-mono">
      <div className="mx-auto pb-[80px] pt-[80px] px-[30px] laptop:pt-[5rem] laptop:pb-[5rem] mt-[72px] laptop:max-w-[67.6rem] w-full text-center">
        <div className="flex text-center justify-center">
          <img
            src={femcoLogo}
            alt="feministco logo"
            className="w-[3.6em] laptop:w-[4.1em] text-center"
          />
        </div>
        <h2 className="uppercase laptop:my-5 my-[15px] font-bold text-[1.6em] laptop:text-[2.8em] font-sangbleu">"all lives matter"</h2>
        <h2 className="uppercase text-center font-bold text-[1.45em] laptop:text-[2.2em] font-sangbleu">#endsarsnow</h2>
        <div className="flex justify-between laptop:justify-center px-[8px] items-center mt-[43px] laptop:text-[0.9em] text-[0.8em] overflow-clip">
          <div className="flex items-center">
            <span className="mr-[10px]">
              <FaTwitter className="text-[1.7em] laptop:text-[1.7em]" />
            </span>
            <a href="https://x.com/feminist_co?s=21">@feminist_co</a>
          </div>
          <div className="flex items-center ml-[60px]">
            <span className="mr-[10px]">
              <FaInstagram className="text-[1.7em] laptop:text-[1.7em]" />
            </span>
            <a href="https://www.instagram.com/feminist.co/">@feminist.co</a>
          </div>
        </div>
        <div className="flex justify-evenly pt-[60px] laptop:text-[1em] text-[0.8em]">
          <div className="">About us</div>
          <div className="ml-[3.5px]">Account Summary</div>
          <div className="ml-[3.5px]" onClick={() => navigate("/endsars")}>
            #EndSARS
          </div>
          <div className="ml-[3.5px]">Contact Us</div>
        </div>
      </div>
    </footer>
  );
};

export default EndSarsFooter;
