import React from "react";
import Navbar from "../components/Navbar";
import LinkComponent from "../components/LinkComponet";
import up1 from "../assets/up1.png";
import up2 from "../assets/up2.png";
import up3 from "../assets/up3.png";

const StudyInPoland = () => {
  return (
    <div className="flex flex-col items-center  w-full">
      <LinkComponent />
      <Navbar />

      {/* hero */}
      <div className=" px-4 flex flex-col gap-4 w-full items-center py-5">
        <h1 className="text-[#123E6C] text-[32px] font-bold">Study Poland</h1>
        <div className="flex flex-col md:flex-row gap-4 w-full ">
          <div className="relative w-full h-80 md:w-1/2 px-40">
            <img
              src={up1}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="rounded-lg absolute w-[250px] h-[200px] bottom-0 right-0">
              <img
                src={up2}
                alt=""
                className="w-full h-full object-cover rounded-lg "
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <p className="text-[18px] text-[#4D4D4D] font-[300] leading-6 max-w-[600px]">
              Poland is a European nation that provides affordable and
              high-quality higher education. And this country has a remarkably
              long academic tradition with roots in the Middle Ages and a
              thousand years of cultural history. International students are
              always warmly welcomed at Polish universities. Additionally, the
              Polish cities provide appropriate conditions for worldwide
              learners to study in Poland.
            </p>

            <h1 className="text-[#07294D] text-[18px] font-bold">
              Why Study in Poland?
            </h1>
            <p className="text-[18px] text-[#4D4D4D] font-[300] leading-6 max-w-[600px]">
              Students are interested in studying in Poland for a variety of
              reasons. One significant factor is that, unlike other European
              nations, Poland offers public and private schools that provide
              education at the third level in nearly every major city.
              Institutions and schools consistently increase the range of
              courses they provide to meet consumer demand. As a result, you can
              choose your desired course from the numerous options.
              Additionally, the European Union and other countries worldwide
              recognize the degrees awarded by Polish universities. You can
              obtain a solid foundational education in Poland that will prepare
              you for employment in the EU and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInPoland;
