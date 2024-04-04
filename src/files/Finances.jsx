import React from "react";
import finImage from "../assets/finance.png";

const Finances = () => {
  return (
    // mx-auto pb-[30px] pt-[100px] px-[30px] laptop:pt-[2rem] laptop:pb-[9px] laptop:max-w-[67.6rem] w-full
    <section className="bg-[#ffe369] pt-[100px] laptop:px-[130px] px-[30px] py-[80px] mx-auto">
      <h2 className="text-[1.6em] laptop:text-[3.8em] font-sangbleu mb-[30px] font-semibold laptop:font-bold ">
        What We Have Done.
      </h2>
      <p className="text-[1.18em] laptop:text-[1.51em] mb-[30px] laptop:leading-9 leading-7">
        Here is a summary of the total funds we received and disbursed (in
        Naira) as of <br /> October 22nd, 2020: Total received = ₦147,855,788.28
        (includes donations in USD, <br /> CAD, GBP, EUR, GHS, KES, and BTC)
      </p>
      <div className="laptop:flex laptop:pt-[50px] laptop:justify-between laptop:items-center">
        <div className="laptop:laptop:bg-[#fff] laptop:flex-grow-0 laptop:flex-shrink-0 laptop:w-[44%] laptop:max-w-[44%]">
          <div className="laptop:p-[5px] hidden laptop:block">
            <img src={finImage} alt="finance image" className="laptop:w-full" />
          </div>
        </div>
        <div className="laptop:flex-grow-0 laptop:flex-shrink-0 laptop:w-[52%] laptop:max-w-[52%]">
          <ul className="m-0 p-0 list-none grid gap-[0.5rem]">
            <li className="before-ti-star laptop:text-[1.4em] text-[1.1em] font-medium laptop:leading-7">Total disbursed = ₦60,403,235.00</li>
            <li className="before-ti-star laptop:text-[1.4em] text-[1.1em] font-medium laptop:leading-7">Total left = ₦87,452,553.28</li>
          </ul>
          <p className="leading-6 text-[1.1em] font-extrabold px-0 py-[20px] laptop:py-[40px] laptop:font-extrabold laptop:text-[1.4rem] laptop:leading-8">
            The remaining funds will be channeled through the following
            initiatives/organizations:
          </p>
          <ul className="m-0 p-0 list-none grid gap-[0.5rem]">
            <li className="before-ti-star laptop:text-[1.4em] text-[1.1em] font-medium laptop:leading-7">
              #EndSARSresponse (Medical) - ₦20,114,087.25
            </li>
            <li className="before-ti-star laptop:text-[1.4em] text-[1.1em] font-medium laptop:leading-7">
              The Legal Aid Network - ₦15,741,459.59
            </li>
            <li className="before-ti-star laptop:text-[1.4em] text-[1.1em] font-medium laptop:leading-7">
              Relief for victims of police brutality and families of the
              deceased - ₦40,228,174.51
            </li>
            <li className="before-ti-star laptop:text-[1.4em] text-[1.1em] font-medium laptop:leading-7">
              Memorial for the Fallen - ₦5,247,153.197
            </li>
            <li className="before-ti-star laptop:text-[1.4em] text-[1.1em] font-medium laptop:leading-7">
              #EndSARSMentalHealthSupport - ₦6,121,678.73
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Finances;
