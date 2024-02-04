import React from "react";
import mainOne from "../assets/main-1.png";
import mainTwo from "../assets/main-2.png";
import mainThree from "../assets/main-3.png";
import smallOne from "../assets/small-1.png";
import smallTwo from "../assets/small-2.png";
import smallThree from "../assets/small-3.png";
import smallFour from "../assets/small-4.png";
import smallFive from "../assets/small-5.png";
import smallSix from "../assets/small-6.png";
import smallSeven from "../assets/small-7.png";
import smallEight from "../assets/small-8.png";
import smallNine from "../assets/small-9.png";
import smallTen from "../assets/small-10.png";
import smallEleven from "../assets/small-11.png";
import smallTwelve from "../assets/small-12.png";

const GridCon = () => {
  const images = [
    mainOne,
    mainTwo,
    mainThree,
    smallOne,
    smallTwo,
    smallThree,
    smallFour,
    smallFive,
    smallSix,
    smallSeven,
    smallEight,
    smallNine,
    smallTen,
    smallEleven,
    smallTwelve,
  ];

  return (
    <section className="mx-auto pb-[150px] pt-[3px] px-[30px] laptop:pt-[2rem] laptop:pb-[2rem] laptop:max-w-[67.6rem] w-full">
      <div className="grid-mix grid gap-[6px] bg-[rgb(255,255,255)] overflow-hidden grid-cols-gridmix grid-rows-gridcon">
        {images.map((image, index) => (
          <img
            className="w-full h-full object-cover object-center-twice delay-500"
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default GridCon;
