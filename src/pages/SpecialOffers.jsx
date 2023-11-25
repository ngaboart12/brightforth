import React from "react";
import Navbar from "../components/Navbar";
import LinkComponent from "../components/LinkComponet";
import specialpic from "../assets/special.png";

const SpecialOffers = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />
      {/* heders */}
      <div class="w-full px-[20px] md:px-40    pt-9 pb-[37px] bg-slate-50 rounded-3xl justify-center items-center inline-flex">
        <div class="self-stretch flex-col  items-center gap-[17px] inline-flex">
          <div class=" pb-3 bg-orange-100 rounded-[14px] justify-center items-center inline-flex">
            <div class="text-amber-500 md:text-xl font-medium font-['Outfit']">
              Study & Work
            </div>
          </div>
          <div class="text-sky-900 text-[30px] md:text-[46px] font-bold font-['Outfit']">
            {" "}
            Full-Scholarships
          </div>
        </div>
      </div>

      {/* hero */}
      <div class="max-w-7xl w-full md:px-20 px-[20px] flex-col justify-start items-start gap-10 inline-flex">
        <div class="flex-col justify-start items-center md:items-start gap-6 flex">
          <div class="flex-col justify-start items-start gap-6 flex">
            <div class="w-[65px] h-2 bg-amber-500"></div>
          </div>
          <div class="justify-start items-center md:items-start gap-[100px] flex flex-col md:flex-row">
            <div class="max-w-[517px] text-center md:text-start text-sky-900 text-[32px] font-semibold font-['Outfit']">
              Why Choose this offer
            </div>
            <div class="max-w-[584px] md:pl-24 text-center md:text-start text-black text-2xl font-normal font-['Outfit']">
              For non-EU students scholarships are granted as from 2nd year of
            </div>
          </div>
        </div>
        <div class="justify-start items-center gap-[50px] flex flex-col md:flex-row">
          <div className="max-w-[472px] h-[250px]">
            <img
              class=""
              className="w-full h-full object-cover"
              src={specialpic}
            />
          </div>

          <div class="flex-col justify-start items-start gap-6 inline-flex">
            <div>
              <span className="text-black text-xl font-medium font-['Outfit']">
                Scholarships
              </span>
              <span className="text-black text-2xl font-bold font-['Outfit']">
                {" "}
              </span>
              <span className="text-black text-2xl font-medium font-['Outfit']">
                include:
              </span>
            </div>
            <div class="justify-start items-start gap-6 flex flex-col sm:flex-row">
              <div class="flex-col justify-start items-start gap-4 inline-flex">
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 py-1.5 bg-blue-50 rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal font-['Outfit']">
                      1
                    </div>
                  </div>
                  <div class="max-[250px] text-neutral-700 text-[14px] font-normal font-['Outfit']">
                    Full coverage of the annual tuition fees
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-2.5 py-1.5 bg-blue-50 rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal font-['Outfit']">
                      2
                    </div>
                  </div>
                  <div class="max-w-[250px] text-neutral-700 text-[14px] font-normal font-['Outfit']">
                    Accommodation in employee dormitories
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-2.5 py-1.5 bg-blue-50 rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal font-['Outfit']">
                      3
                    </div>
                  </div>
                  <div class="text-neutral-700 text-[14px] font-normal font-['Outfit']">
                    Practice / Internship /Work
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-[9px] py-1.5 bg-blue-50 rounded-lg justify-end items-center flex">
                    <div class="text-sky-900 text-base font-normal font-['Outfit']">
                      4
                    </div>
                  </div>
                  <div class="text-neutral-700 text-[14px] font-normal font-['Outfit']">
                    Two meals daily
                  </div>
                </div>
              </div>
              <div class="flex-col justify-start items-start gap-4 inline-flex">
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-2.5 py-1.5 bg-blue-50 rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal font-['Outfit']">
                      5
                    </div>
                  </div>
                  <div class="max-w-[250px] text-neutral-700 text-[14px] font-normal font-['Outfit']">
                    Monthly pocket money from €300
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-[9px] py-1.5 bg-blue-50 rounded-lg justify-end items-center flex">
                    <div class="text-sky-900 text-base font-normal font-['Outfit']">
                      6
                    </div>
                  </div>
                  <div class="max-w-[250px] text-neutral-700 text-[14px] font-normal font-['Outfit']">
                    Medical care (National Health System)
                  </div>
                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                  <div class="h-8 pl-[13px] pr-2.5 py-1.5 bg-blue-50 rounded-lg justify-center items-center flex">
                    <div class="text-sky-900 text-base font-normal font-['Outfit']">
                      7
                    </div>
                  </div>
                  <div class="max-w-[250px] text-neutral-700 text-[14px] font-normal font-['Outfit']">
                    Full employment (4-year work permit) upon graduation Other
                    benefits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* academic program */}
      <div class="w-full  px-[20px] md:px-40 py-20  flex-col justify-start items-center gap-8 inline-flex">
        <div class="flex-col justify-start items-center gap-4 flex">
          <div class="w-[65px] h-2 bg-amber-500"></div>
          <div class="text-sky-900 text-[24px] md:text-[40px] font-bold font-['Outfit']">
            Academic Programs of Study:
          </div>
        </div>
        <div class=" gap-x-20 gap-y-10 grid grid-cols-1 md::grid-cols-2 lg:grid-cols-4">
          <div class="pl-[6px] pr-[6px] max-w-[200px]  pb-7 bg-blue-50 justify-start items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div class=" text-sky-900 text-mds font-semibold font-['Outfit']">
                Hotel, Casino & Resort Management
              </div>
              <div class="text-neutral-500 text-base font-normal font-['Outfit']">
                4 years bachelor’s degree
              </div>
            </div>
          </div>
          <div class="pl-[6px] pr-[6px]  max-w-[200px]  bg-blue-50 justify-center items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div class=" text-sky-900 text-md font-semibold font-['Outfit']">
                Hotel Management
              </div>
              <div class="text-neutral-500 text-base font-normal font-['Outfit']">
                3 years higher diploma
              </div>
            </div>
          </div>
          <div class="pl-[6px] pr-[6px] max-w-[200px]  bg-blue-50 justify-center items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div class=" text-sky-900 text-md font-semibold font-['Outfit']">
                Business Administration (hospitality direction)
              </div>
              <div class="text-neutral-500 text-md font-normal font-['Outfit']">
                4 years bachelor’s degree
              </div>
            </div>
          </div>
          <div class="pl-[6px] pr-[6px] max-w-[200px]  pb-6 bg-blue-50 justify-center items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div class=" text-sky-900 text-md font-medium font-['Outfit']">
                Hospitality Operations Management
              </div>
              <div class="text-stone-500 text-md font-normal font-['Outfit']">
                {" "}
                2 years diploma
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
