import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const PrevArrowHappen = ({ onClick }) => {
  return (
    <div
      className="absolute laptop:left-[937px] laptop:-top-[-190px] left-[201px] -top-[-155px] mobile:-top-[-500px]"
      onClick={onClick}
    >
      <div className="bg-inherit border-[#000] border-[1.5px] h-[34px] w-[34px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronLeft className="fill-[#000]" />
      </div>
    </div>
  );
};

export default PrevArrowHappen;
