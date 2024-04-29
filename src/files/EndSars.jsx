import React from "react";
import feministCo from "../assets/feministco-logo.png";
import protesters from "../assets/protesters.png";
import { Link } from "react-router-dom";
import Journey from "./Journey";
import Heroes from "./Heroes";
import Movement from "./Movement";
import EndSarsFooter from "./EndSarsFooter";

const EndSars = () => {
  return (
    <>
      <section
        className="relative z-10 h-screen bg-cover bg-top bg-opacity-50 w-full md:h-96 lg:h-screen"
        style={{ backgroundImage: `url(${protesters})` }}
      >
        <div className="bakground h-screen w-full">
          <header className="mx-auto z-40 max-w-[96.875rem] top-0 w-full absolute">
            <nav className="bg-transparent flex justify-between w-full items-center left-0 right-0 py-[40px] px-[25px] laptop:pt-[2.5rem] laptop:pr-[7.5rem] laptop:pb-[2.5rem] laptop:pl-[7.1875rem]">
              <a className="w-[4em] laptop:text-[16px] text-[14px]" href="/">
                <img
                  className="w-full"
                  src={feministCo}
                  alt="feministco logo"
                />
              </a>
              <ul className="laptop:flex text-[1.02em] items-center ease-in font-mono font-medium hidden">
                <li className="text-[1.02em] mr-[3.125rem] cursor-pointer text-[#fff]">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="text-[1.02em] mr-[3.125rem] cursor-pointer text-[#fff]">
                  <Link to="/endsars">
                    #EndSARS
                  </Link>
                </li>
                <li className="text-[1.02em] mr-[3.125rem] cursor-pointer text-[#fff]">
                  Contact Us
                </li>
                <li className="-mt-1">
                  <button className="py-[0.5rem] px-[2.375rem] rounded-[3px] cursor-pointer bg-[#000] text-[#ffe369] mr-0">
                    Join Us
                  </button>
                </li>
              </ul>
              <ul className="flex md:hidden items-center ease-out font-mono font-medium text-[#fff]">
                <li className="text-[1.2em] mr-[3.5rem] ">
                  <Link className="text-[#fff]" to="/">
                    Home
                  </Link>
                </li>
                <li className="text-[1.2em]">
                  <Link className="text-[#fff]" to="/endsars">
                    #EndSARS
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className="flex items-center justify-center laptop:pt-[230px] pt-[419px]">
            <div className="text-[6.8em] mb-[80px] font-semibold laptop:text-[13em] text-[#ffe369] mr-5 laptop:mr-[40px]">
              #
            </div>
            <span className="font-sangbleu mb-[80px] laptop:mt-5 text-[2.3em] font-normal laptop:text-[5em] uppercase text-[#fff] inline-block leading-10 laptop:leading-none relative overflow-hidden">
              <span className="">e</span>
              <span className="">n</span>
              <span className="">d</span>
              <span className="">p</span>
              <span className="">o</span>
              <span className="">l</span>
              <span className="">i</span>
              <span className="">c</span>
              <span className="">e</span>
              <br />
              <span className="">b</span>
              <span className="">r</span>
              <span className="">u</span>
              <span className="">t</span>
              <span className="">a</span>
              <span className="">l</span>
              <span className="">i</span>
              <span className="">t</span>
              <span className="">y</span>
            </span>
          </div>
        </div>
        {/* journey component */}
        <div className="">
          <Journey />
        </div>
        {/* Heroes component */}
        <div>
          <Heroes />
        </div>
        {/* Movement component */}
        <Movement />
        {/* EndSarsFooter Component */}
        <EndSarsFooter />
      </section>
    </>
  );
};

export default EndSars;
