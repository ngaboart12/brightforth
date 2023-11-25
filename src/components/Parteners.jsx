import React from "react";
import dp1 from "../assets/dp1.svg";
import dp2 from "../assets/dp2.svg";
import dp3 from "../assets/dp3.svg";
import dp4 from "../assets/dp4.svg";
import dp5 from "../assets/dp5.svg";

const Parteners = () => {
  return (
    <div class="w-full  py-[47px] bg-sky-50 justify-center items-center inline-flex">
      <div class="self-stretch flex-col justify-start items-center gap-4 inline-flex">
        <div class="text-amber-500 text-2xl font-semibold font-['Outfit']">
          Parteners
        </div>
        <div class="justify-start items-center gap-[100px] inline-flex">
          <img class="w-[85px] h-[85px]" src={dp1} />
          <img class="w-20 h-20" src={dp2} />
          <img class="w-20 h-20" src={dp3} />
          <img class="w-[99px] h-[99px]" src={dp4} />
          <img class="w-[106px] h-[106px]" src={dp5} />
        </div>
      </div>
    </div>
  );
};

export default Parteners;
