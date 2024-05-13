import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrowHappen from "../component/NextArrowHappen";
import PrevArrowHappen from "../component/PrevArrowHappen";
/* import "./index.css"; */
import "../happen.css";

const Happen = () => {
  const data = [
    {
      txt: "Daily Summary of Account",
    },
    {
      txt: "Statement on October 20th, 2020",
    },
    {
      txt: "Progress Report October 15th, 2020",
    },
    {
      txt: "Progress Report October 10th, 2020",
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <NextArrowHappen />,
    nextArrow: <PrevArrowHappen />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // mx-auto pb-[40px] px-[30px] laptop:pt-[6px] laptop:pb-[rem] mt-[72px] laptop:ml-[58px] laptop:max-w-[] w-full
    <section className="relative mx-auto laptop:ml-[-39px] laptop:max-w-[80rem] laptop:pt-[6px] mt-[72px]">
      <div className="laptop:ml-[120px] px-[5px]">
        <h2 className="mb-10 text-[1.6em] font-bold font-sangbleu ml-[40px] laptop:ml-[45px] laptop:text-[3.5em]">
          Other Happenings
        </h2>
        <div className="pb-[40px] laptop:pb-[53px]">
          <div className="flex justify-center items-center ml-[45px]">
            <div className="laptop:w-[100%] w-[104%]">
              <Slider {...settings}>
                {data.map((d, index) => (
                  <div key={index} className="mb-10">
                    <div className="laptop:text-[1.7em] text-[1.2em] laptop:py-[35px] laptop:px-[18px] py-[25px] px-[50px] font-mono text-center bg-[#000] text-[#fff]">
                      {d.txt}
                    </div>

                    {/* <div className="flex flex-col gap-4 ml-4 py-4 px-[5px]">
                    <h2 className="text-[#ffe369] text-[1.7em] mb-[-18px] laptop:text-[2.1em] font-sangbleu font-medium">
                      {d.name}
                    </h2>
                    <p className="text-[#cdcdcd] text-[1.2em] laptop:text-[1.3em]">
                      {d.position}
                    </p>
                  </div> */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happen;
