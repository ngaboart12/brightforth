import React from "react";
import herroBackground from "../../assets/herroBackground.svg";

import Navbar2 from "../Navbar2";
import LinkComponent2 from "../LinkComponet2";

const Hero = () => {
  return (
    <div className="relative flex flex-col   w-full items-center pb-10">
      <LinkComponent2 />
      <Navbar2 />
      <div className="absolute w-screen h-full -z-10">
        <img
          src={herroBackground}
          alt=""
          className="w-full object-cover h-full "
        />
      </div>
      <div className="flex flex-col gap-4 w-full px-[20px]  py-[16vh]  justify-center items-center ">
        <h1 className="text-white text-[40px]  leading-[40px] text-center max-w-[551px] md:leading-[40px] ">
          Welcome To BrightForth Your Career Partner
        </h1>
        <p className="text-center text-[16px] text-[#fff] max-w-[433px] font-[300]">
          Welcome To BrightForthYour Career Partner Contact us for a free
          consultation Because we are leading educational consultant popularly
          recognized
        </p>
        <div className="flex gap-4">
          <a
            href="/"
            className="text-white items-center bg-[#FFA800] hover:bg-[#FFA800]/80 py-[16px] px-[20px] md:px-[40px] rounded-2xl"
          >
            Apply now
          </a>
          <a
            href="/"
            className="bg-white items-center hover:bg-white/80 text-[#FFA800] py-[16px] px-[20px] md:px-[40px] rounded-2xl"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="flex mx-auto px-[100px]  md:ml-auto md:mx-0">
        <a
          href="/"
          className="p-[10px] bg-[#FFA800] hover:bg-[#FFA800]/80 hover:scale-110 rounded-xl rounded-br-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.2117 2.66667C26.6517 2.66667 29.9997 6.28934 29.9997 11.0933V20.2507C29.9997 22.7093 29.1303 24.9307 27.5503 26.5067C26.133 27.9187 24.2943 28.6667 22.233 28.6667H9.09567C7.03834 28.6667 5.20101 27.92 3.78234 26.5067C2.20234 24.9307 1.33301 22.7093 1.33301 20.2507V11.0933C1.33301 6.28934 4.68101 2.66667 9.12101 2.66667H22.2117ZM22.2117 4.66667H9.12101C5.76767 4.66667 3.33301 7.36934 3.33301 11.0933V20.2507C3.33301 22.1747 3.99434 23.8933 5.19434 25.0893C6.22901 26.1227 7.57967 26.6667 9.09967 26.6667H22.2117C22.2143 26.664 22.225 26.6667 22.233 26.6667C23.7543 26.6667 25.1037 26.1227 26.1383 25.0893C27.3397 23.8933 27.9997 22.1747 27.9997 20.2507V11.0933C27.9997 7.36934 25.565 4.66667 22.2117 4.66667ZM24.313 10.8384C24.661 11.2664 24.5957 11.8957 24.1677 12.2451L18.2423 17.0611C17.493 17.6557 16.597 17.9531 15.7023 17.9531C14.8103 17.9531 13.921 17.6584 13.177 17.0691L7.19701 12.2477C6.76634 11.9011 6.69967 11.2704 7.04501 10.8411C7.39301 10.4131 8.02234 10.3451 8.45167 10.6904L14.4263 15.5064C15.177 16.1011 16.2343 16.1011 16.9903 15.5011L22.905 10.6931C23.3343 10.3424 23.9637 10.4091 24.313 10.8384Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
