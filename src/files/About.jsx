import React from "react";
import aboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <section className="max-w-[70rem]">
      <div className="flex items-center">
        <div className="[transform:rotate(270deg)] whitespace-nowrap text-[4em] font-bold font-sangbleu">
          Who We Are
        </div>
        <div className="">
          <img
            className="w-full h-full object-cover object-center-twice delay-500"
            src={aboutImage}
            alt="about"
          />
        </div>
        <div className="">
          <p className="mb-[20px]">
            In July 2020, Damilola Odufuwa and Odunayo Eweniyi decided to come
            together to create a coalition of feminist women with a vision of a
            Nigeria where equality for all people is a reality in our laws and
            everyday lives.
          </p>
          <p className="mb-[20px]">
            We approached 12 other exceptional women who were equally passionate
            about changing our country and the role of women.
          </p>
          <p className="mb-[20px]">
            Together with these women we became the Feminist Coalition. The
            Feminist Coalition aims to further the rights of Nigerian women by
            focusing on three (3) pillars: womens rights & safety, financial
            equality for women; and political & legislative power for women.
          </p>
        </div>
      </div>
    </section>
    // <section className="mx-auto bg-[#ffe369] px-[30px] laptop:max-w-[68rem] pb-[120px] pt-[120px]">
    //   <div className="flex gap-1 items-center pt-[120px]">
    //     <div className="[transform:rotate(270deg)] whitespace-nowrap text-[4em] font-bold font-sangbleu">Who We Are</div>
    //     <div className="w-full h-full max-w-[37%]  bg-[#fff]">
    //       <img
    //         className="w-full h-full object-cover object-center-twice delay-500"
    //         src={aboutImage}
    //         alt="about"
    //       />
    //     </div>
    //     <div className="text-[1em] leading-7 max-w-[52%]">
    //       <p className="mb-[20px]">
    //         In July 2020, Damilola Odufuwa and Odunayo Eweniyi decided to come
    //         together to create a coalition of feminist women with a vision of a
    //         Nigeria where equality for all people is a reality in our laws and
    //         everyday lives.
    //       </p>
    //       <p className="mb-[20px]">
    //         We approached 12 other exceptional women who were equally passionate
    //         about changing our country and the role of women.
    //       </p>
    //       <p className="mb-[20px]">
    //         Together with these women we became the Feminist Coalition. The
    //         Feminist Coalition aims to further the rights of Nigerian women by
    //         focusing on three (3) pillars: womens rights & safety, financial
    //         equality for women; and political & legislative power for women.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default About;
