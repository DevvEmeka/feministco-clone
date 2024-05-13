import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../assets/El1M4QdXIAMkF4e.jpg";
import image2 from "../assets/eduniyi_px.jpg";
import image3 from "../assets/eduniyi_px.jpg";
import image4 from "../assets/El1M4QdXIAMkF4e.jpg";
import image5 from "../assets/eduniyi_px.jpg";
import image6 from "../assets/eduniyi_px.jpg";
import NextArrow from "../component/NextArrow";
import PrevArrow from "../component/PrevArrow";


const Members = () => {
  const data = [
    {
      name: "Damilola Odufuwa",
      img: image1,
      position: "Founding Member",
    },
    {
      name: "Odun Eweniyi",
      img: image2,
      position: "Founding Member",
    },
    {
      name: "Damilola Odufuwa",
      img: image3,
      position: "Founding Member",
    },
    {
      name: "Odun Eweniyi",
      img: image4,
      position: "Founding Member",
    },
    {
      name: "Odun Eweniyi",
      img: image5,
      position: "Founding Member",
    },
    {
      name: "Odun Eweniyi",
      img: image6,
      position: "Founding Member",
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
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
    <>
      <section className="bg-[#000] max-w-full laptop:pb-[58px] laptop:overflow-x-hidden">
        <div className="mx-auto laptop:ml-[14px] laptop:mx-0 laptop:px-0 laptop:w-screen pb-[12px] pt-[50px] px-[30px] laptop:pt-[55px]">
          <div className="mx-auto pb-[134px]">
            <div className="pt-[25px] relative">
              <div className="laptop:w-[50%] laptop:float-left laptop:pt-[98px] laptop:pl-[108px]">
                <div className="text-[#ffe369] text-[2em] mb-[1px] ml-4 laptop:ml-0 font-sangbleu laptop:font-bold laptop:text-[3.8em] laptop:mb-5">
                  Meet Our Members
                </div>
                <div>
                  <p className="laptop:text-[#fff] font-sans laptop:text-[1.4em] laptop:mb-[50px] laptop:leading-8">
                    We uniquely select our members. Members <br />
                    can choose to work on specific and stand <br />
                    alone projects in line with their passions.
                  </p>
                  <button className="laptop:text-[#000] font-sans font-medium laptop:text-[1.2em] laptop:rounded-[3px] laptop:cursor-pointer laptop:py-[10px] laptop:px-[38px] laptop:inline-block laptop:bg-[#ffe369] laptop:mb-5">
                    Join Us
                  </button>
                </div>
              </div>
              <div className="laptop:w-[50%] lead laptop:mt-0 -mt-[70px] laptop:float-right">
                <Slider {...settings}>
                  {data.map((d, index) => (
                    <div key={index} className="">
                      <div className="h-[370px]">
                        <img
                          src={d.img}
                          alt="slider image"
                          className="object-fill ml-[16px] h-[100%] w-[100%] filter grayscale-[100]"
                        />
                      </div>

                      <div className="flex flex-col gap-4 ml-4 py-4 px-[5px]">
                        <h2 className="text-[#ffe369] text-[1.7em] mb-[-18px] laptop:text-[2.1em] font-sangbleu font-medium">
                          {d.name}
                        </h2>
                        <p className="text-[#cdcdcd] text-[1.2em] laptop:text-[1.3em]">
                          {d.position}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
