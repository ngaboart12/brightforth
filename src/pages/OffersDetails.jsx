import React from "react";
import LinkComponent from "../components/LinkComponet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OffersDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />

      <div className="flex flex-col gap-6 w-full max-w-7xl px-[20px] md:px-24  py-4 pb-20">
        <h1 className="text-[30px] text-center font-bold text-[#123E6C]">
          SPECIAL OFFERS
        </h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#C8C8C8] text-[14px]">
            special offers <span className="text-black">/ Study in poland</span>
          </h1>
          <h1 className="text-[30px] text-[#123E6C] font-bold">
            Study In Poland
          </h1>
          <span className="text-[18px] text-[#6E6E6E] font-[200] max-w-[900px]">
            Mindfulness price corporate no-brainer stakeholder sop define info
            are. Cloud let's run tiger baseline dogpile good rundown post field.
            / alarming charts would tiger ipsum walk. Then food like seems
            t-shaped devil strategies solutionize businesses. Feed status those
            ping cob cta. First dogpile boil status involved container
            commitment we quick unpack. Slipstream adoption eat technologically
            pulling. Synchronise gmail invested money existing involved
            innovation mint you.
          </span>
          <button className=" bg-[#123E6C] rounded-xl text-white w-[200px] p-4 flex justify-center">
            Download pdf
          </button>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default OffersDetails;
