import React from "react";
import aboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <section className="mx-auto pb-[138px] px-[30px] laptop:pt-[12.6rem] laptop:pb-[2rem] laptop:max-w-[67.6rem] w-full">
      <div className="flex items-center justify-center gap-2 w-[100%] flex-col laptop:flex-row">
        <div className="mb-[28px] laptop:-mb-[185px] laptop:[transform:rotate(270deg)] laptop:w-[10%] laptop:whitespace-nowrap laptop:-ml-[12px] -ml-[180px] text-[2em] laptop:text-[3.5em] font-semibold- font-sangbleu">
          Who We Are
        </div>
        <div className="flex w-[90] gap-[39px] flex-col laptop:flex-row">
          <div className="mb-[26px]">
            <img
              className="w-full h-full object-cover object-center-twice delay-500 border-[rgb(255,255,255)] border-[5px]"
              src={aboutImage}
              alt="about"
            />
          </div>
          <div className="laptop:max-w-[510px] laptop:text-[1.3em] font-sans mt-[-36px] laptop:mt-[3px] text-[1em]">
            <p className="mb-[10px] mt-[10px] laptop:leading-7">
              In July 2020, Damilola Odufuwa and Odunayo Eweniyi decided to come
              together to create a coalition of feminist women with a vision of
              a Nigeria where equality for all people is a reality in our laws
              and everyday lives.
            </p>
            <p className="mb-[10px] laptop:leading-7 laptop:mt-[28px]">
              We approached 12 other exceptional women who were equally
              passionate about changing our country and the role of women.
            </p>
            <p className="mb-[10px] laptop:leading-7 laptop:mt-[35px]">
              Together with these women we became the Feminist Coalition. The
              Feminist Coalition aims to further the rights of Nigerian women by
              focusing on three (3) pillars: womens rights & safety, financial
              equality for women; and political & legislative power for women.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
