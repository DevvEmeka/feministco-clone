import React from "react";

const Movement = () => {
  return (
    <section className="bg-[#0000] py-[80px] laptop:px-[120px] px-[20px] w-full">
      <h2 className="text-[#ffe369] font-bold mb-[50px] font-sangbleu text-[1.5em] laptop:text-[2.5em] text-center capitalize">
        join the movement. take action
      </h2>
      <ul className="m-0 p-0 list-none grid gap-[2rem] text-[#fff] font-sans justify-center">
        <span className="flex items-center justify-center">
          <li className="before-bl-star laptop:leading-6 laptop:text-[1.5em] text-[0.7em] font-medium relative">
            Join the physical protest
          </li>
        </span>
        <span className="flex items-center justify-center">
          <li className="before-bl-star laptop:leading-6 laptop:text-[1.5em] text-[0.7em] font-medium relative">
            Educate the older generation
          </li>
        </span>
        <span className="flex items-center justify-center">
          <li className="before-bl-star laptop:leading-6 laptop:text-[1.5em] text-[0.7em] font-medium relative">
            Donate to families of our heroes
          </li>
        </span>
        <span className="flex items-center justify-center">
          <li className="before-bl-star laptop:leading-6 laptop:text-[1.5em] text-[0.7em] font-medium relative">
            Join the online protest using the hashtag #EndSARS
          </li>
        </span>
      </ul>
    </section>
  );
};

export default Movement;
