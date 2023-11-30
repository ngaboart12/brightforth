import React from "react";
import LinkComponent from "../components/LinkComponet";
import Navbar from "../components/Navbar";
import duolingPic from "../assets/duolingo.png";

const Duolingo = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />

      {/* hero */}
      <div className="flex px-[20px] md:px-20 lg:px-40 gap-10 flex-col md:flex-row w-full max-w-7xl py-10">
        <div className="w-full md:w-1/2 p-2">
          <img src={duolingPic} alt="" className="w-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] font-[700] text-[#07294D]">
              Duolingo English Test
            </h1>
            <p className="text-[16px] text-[#4D4D4D] font-[300] leading-5 ">
              Duolingo English Test is a computer based English proficiency test
              which assesses the test taker’s Listening, Reading, Writing and
              Speaking skills. The test is administered using computer adaptive
              technology, meaning that the question difficulty adapts to each
              test taker. The test also integrates a video interview and writing
              sample, which are not graded, but are sent to the institution
              along with your proficiency score when you report your results.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <div className="h-[60px] md:h-full w-2 bg-[#FFA800]"></div>
            <div className="">
              <p className="text-[16px] text-[#4D4D4D] font-[300] leading-5">
                Test Format <br />
                The total duration of Duolingo English Test is 60 minutes,
                divided into three parts. Questions are not in chronological
                order, you can get a question related to any module anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* sections */}
      <div className="w:full pl-[179px] pr-[184px] pt-[45px] pb-[67px] bg-[#07294D] flex-col justify-start items-center gap-[35px] inline-flex">
        <div className="text-amber-500 text-[32px] font-bold font-['Outfit']">
          Sections
        </div>
        <div className="self-stretch flex-col justify-start items-center gap-6 inline-flex">
          <div className="justify-start items-start gap-[27px] inline-flex">
            <div className="pl-[38px] pr-[27px] pt-8 pb-[39px] bg-[#0A335E] justify-end items-center flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-white text-xl font-bold font-['Outfit']">
                  Quick Setup :
                </div>
                <div className="w-[496px] text-white text-lg font-normal font-['Outfit']">
                  Introduction of the exam, along with the rules and
                  regulations. It also includes checking the function of
                  cameras, Speakers & Microphones and submission of important
                  documents.
                </div>
                <div className="text-amber-500 text-lg font-normal font-['Outfit']">
                  To be answered in 5 minutes
                </div>
              </div>
            </div>
            <div className="px-[46px] pt-8 pb-[39px] bg-[#0A335E] justify-center items-center flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-white text-xl font-bold font-['Outfit']">
                  Adaptive Test :
                </div>
                <div className="w-[469px] text-white text-lg font-normal font-['Outfit']">
                  Includes a variety of questions related to all the 4 modules-
                  Reading, Listening, Writing and Speaking. The questions appear
                  randomly.
                </div>
                <div className="text-amber-500 text-lg font-normal font-['Outfit']">
                  To be answered in 45 minutes
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[43px] pr-[22px] pt-[47px] pb-12 bg-[#0A335E] justify-end items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[157px] h-6 text-white text-xl font-bold font-['Outfit']">
                Video Interview :
              </div>
              <div className="w-[496px] text-white text-lg font-normal font-['Outfit']">
                This part is not assessed, but the reporting institution
                receives it along with your scores.
              </div>
              <div className="text-amber-500 text-lg font-normal font-['Outfit']">
                To be answered in 10 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AC2w4Q-7jqs?si=KiD4uBt4LZ02-bxY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Duolingo;
