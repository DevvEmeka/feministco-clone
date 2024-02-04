import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto pb-[150px] pt-[3px] px-[30px] laptop:pt-[12.6rem] laptop:pb-[2rem] laptop:max-w-[67.6rem] w-full">
      <div className="flex laptop:flex-row flex-col justify-between laptop:items-center items-start">
        <div className="laptop:font-normal font-medium [flex:unset] font-sangbleul [max-width:unset] laptop:max-w-[50%] text-[2.2em] mb-[30px] laptop:text-[3.6em] leading-snug grow-0 shrink-0 basis-[50%]">
          <p>Championing</p>
          <p className="">Equality For Women </p>
          <p className="">In Nigerian Society.</p>
        </div>
        <div className="md:max-w-[50%] leading-6 [flex:unset] [max-width:unset] text-[1.1em] laptop:text-[1.32em] font-normal laptop:leading-8 grow-0 shrink-0 basis-[50%]">
          <p>
            The feminist coalition is a group of young Nigerian feminists formed
            in July 2020 with a mission to champion equality for women in
            Nigerian society with a core focus on education, financial freedom
            and representation in public office.
          </p>
          <p className="hidden laptop:block">
            We have a vision for a Nigeria where equality for all people is a
            reality in our laws and everyday lives.
          </p>
        </div>
      </div>
    </section>
    // <section className="mx-auto max-w-[60rem] h-full">
    //   <div className="flex items-center justify-between gap-20 mt-[7.5rem]">
    //     <div className="mt-[1.25rem] max-w-[50%]">
    //         <p className=" font-medium block leading-3 overflow-hidden text-[2.8em]">Championing</p>
    //         <p className=" font-medium block leading-3 overflow-hidden"> Equality For Women </p>
    //         <p className=" font-medium block leading-3 overflow-hidden">In Nigerian Society.</p>
    //     </div>
    //     <div>
    //       "The feminist coalition is a group of young Nigerian feminists formed
    //       in July 2020 with a mission to champion equality for women in Nigerian
    //       society with a core focus on education, financial freedom and
    //       representation in public office."
    //       <p>
    //         "We have a vision for a Nigeria where equality for all people is a
    //         reality in our laws and everyday lives.""
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
