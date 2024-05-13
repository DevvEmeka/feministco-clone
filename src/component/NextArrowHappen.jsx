import React from "react";
import { BsChevronRight } from "react-icons/bs";

const NextArrowHappen = ({onClick}) => {
  return (
    <div
      className="absolute laptop:left-[999px] laptop:-top-[-190px] left-[265px] -top-[-155px]"
      onClick={onClick}
    >
      <div className="bg-inherit border-[#000] border-[1.98px] h-[34px] w-[34px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronRight className="fill-[#000]" />
      </div>
    </div>
  );
};

export default NextArrowHappen;
