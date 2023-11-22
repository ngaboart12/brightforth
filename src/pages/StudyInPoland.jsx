import React from "react";
import Navbar from "../components/Navbar";
import LinkComponent from "../components/LinkComponet";
import poland1 from "../assets/poland1.png";
import poland2 from "../assets/poland2.png";
import lifep1 from "../assets/lifep1.png";
import lifep2 from "../assets/lifep2.png";
import lifep3 from "../assets/lifep3.png";
import topu1 from "../assets/topu1.png";
import topu2 from "../assets/topu2.png";
import topumain from "../assets/topumain.png";
import acom1 from "../assets/acom1.png";
import acom2 from "../assets/acom2.png";

const StudyInPoland = () => {
  return (
    <div className="flex flex-col items-center  w-full">
      <LinkComponent />
      <Navbar />

      {/* hero */}
      <div className="max-w-7xl px-4 flex flex-col gap-8 w-full items-center py-5">
        <h1 className="text-[#123E6C] text-[32px] font-bold">Study Poland</h1>
        <div className="flex flex-col md:flex-row gap-4 gap-y-20 w-full ">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-[full] md:w-[60%] mr-10">
              <img
                src={poland1}
                className=" w-[300px] h-[300px] md:w-[408px] md:h-[358px]  object-cover  rounded-lg"
                alt="dd"
              />
              <img
                src={poland2}
                className="w-[200px] h-[200px] md:w-[255px] md:h-[255px] absolute right-[-70px] bottom-[-50px]"
                alt="dd"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-start">
            <p className="text-[16px] text-[#4D4D4D] font-medium leading-6 max-w-[600px]">
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
            <p className="text-[16px] text-[#4D4D4D] font-medium  leading-6 max-w-[600px]">
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

      {/* benefit of studying in poland */}
      <div className="w-full py-20 items-center max-w-7xl">
        <div class="w-full  px-[89px]  pt-[58px] py-[59px] bg-sky-950 flex-col justify-center items-start gap-[51px] inline-flex">
          <div class="self-stretch justify-start items-start gap-[42px] inline-flex">
            <div class="w-[567px] text-amber-500 text-[32px] font-bold font-['Outfit']">
              Benefits of Studying in Poland
            </div>
            <div class="max-w-[499px] text-white text-lg font-[300] font-['Outfit']">
              International students opt to study in Poland for a variety of
              reasons. Some of the world’s oldest, best higher education
              institutions are located in Poland. The following perks are
              available to international students who look forward to enrolling
              in various programmes at one of the Polish universities.
            </div>
          </div>
          <div class="self-stretch justify-start items-start gap-[83px] inline-flex">
            <div class="flex-col justify-start items-start gap-6 inline-flex">
              <div class="max-w-[526px] text-white text-lg font-[300] font-['Outfit']">
                Most students from salaried class families would benefit from
                low tuition fees and living expenses.
              </div>
              <div class="max-w-[526px] text-white text-lg font-[300] font-['Outfit']">
                Simple & straightforward visa application processes.
              </div>
              <div class="max-w-[526px] text-white text-lg font-[300] font-['Outfit']">
                Other European nations like Germany, Denmark etc., are easily
                accessible because Poland belongs to the Schengen group of
                countries within the European Union.
              </div>
            </div>
            <div class="flex-col justify-start  gap-[34px] inline-flex">
              <div class="max-w-[526px] text-white text-lg font-[300] font-['Outfit']">
                Opportunities for internships and transfers to other European
                universities without additional cost through the Erasmus+
                programme.
              </div>
              <div class="max-w-[526px] text-white text-lg font-[300] font-['Outfit']">
                Low Crime Rate Worldwide.
              </div>
              <div class="max-w-[526px] text-white text-lg font-[300] font-['Outfit']">
                Every significant city in Poland has a university.
              </div>
              <div class="max-w-[526px] text-white text-lg font-[300] font-['Outfit']">
                Scholarships options for non-EU students!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* education syatem in poland */}
      <div class="max-w-7xl px-[10px] md:px-20 w-full  flex-col justify-start items-center gap-[42px] inline-flex">
        <div class=" text-center text-sky-950 text-[32px] font-bold font-['Outfit']">
          Education System in Poland
        </div>
        <div class="justify-start items-start gap-[60px] inline-block md:inline-flex">
          <div class="w-full md:w-1/2  text-zinc-600 text-lg font-normal text-center md:text-start ">
            Most of Poland’s tertiary-level programs are formed of two cycles: a
            three-year bachelor’s degree and a two-year master’s degree. All
            universities follow the Bologna model, which makes the
            qualifications from other member countries equal and acceptable. At
            the same time, Polish institutions offer doctoral programs that can
            be completed in generally three years.
          </div>
          <div class="w-full md:w-1/2 flex-col justify-start items-start gap-[25px] inline-flex t">
            <div class="  text-zinc-600 text-lg font-normal text-center md:text-start mt-4 md:mt-0">
              Many Polish universities provide two- to three-year diploma and
              vocational programs in addition to these courses.
            </div>
            <div class="  text-zinc-600 text-lg font-normal text-center md:text-start ">
              The major Polish institutions overseeing quality assurance in
              higher education periodically monitor and assess the quality of
              education at the higher education institutions in Poland. Poland’s
              Quality Assurance Committee members include the General Council
              for Science and Higher Education, the Polish Accreditation
              Committee, and the Conference of Rectors of Academic Schools.
            </div>
          </div>
        </div>
      </div>

      {/* life style in poland */}
      <div class="max-w-7xl w-full px-[10px] md:px-20    py-[113px] justify-start items-center inline-flex">
        <div class="self-stretch justify-start items-center gap-[58px] inline-block lg:inline-flex">
          <div class="flex-col gap-6 inline-flex px-2">
            <div class=" text-sky-950 text-[32px] font-bold font-['Outfit'] lg:text-start text-center">
              Lifestyle in Poland
            </div>
            <div class=" text-neutral-600 text-center lg:text-start text-lg font-normal font-['Outfit']">
              Poland is one of the nations in Europe with the lowest crime
              rates. While visiting Poland, you can observe the civilizations
              where the East and West converge. Because of its location, it is a
              destination that most explorers find interesting. Poland is ideal
              for you if you want to combine your studies with other exciting
              interests like travelling. Poland has affordable living expenses
              when compared to other European nations. Therefore, student life
              is less expensive in Poland.
            </div>
          </div>
          <div class="justify-center lg:justify-start items-center lg:items-start gap-4 flex flex-col sm:flex-row mt-10">
            <div class="flex-col justify-start items-start gap-4 inline-flex">
              <img class="sm:max-w-[320px] max-w-[250px] " src={lifep1} />
              <img class="sm:max-w-[320px] max-w-[250px]" src={lifep2} />
            </div>
            <div className="sm:w-[213px] w-[250px] h-[100px] sm:h-full">
              <img class="w-full h-full object-cover" src={lifep3} />
            </div>
          </div>
        </div>
      </div>

      {/* poland top universities */}
      <div class="max-w-7xl w-full px-[10px] md:px-20  justify-start items-center gap-[82px] flex flex-col-reverse lg:flex-row">
        <div class="w-[498px] h-[481px] relative ">
          <div class="w-[421.97px] h-[349px] left-0 top-[72px] absolute">
            <div class="w-[421.97px] h-[349px] left-0 top-0 absolute">
              <div class="w-[421.97px] h-[349px] left-0 top-0 absolute "></div>
              <img
                class="w-[510.17px] h-[343.77px] left-[-47.56px] top-0 absolute"
                src={topumain}
              />
            </div>
            <div class="w-52 h-[50px] left-[35px] top-[276px] absolute justify-start items-center gap-2 inline-flex">
              <div class="w-[50px] h-[50px] relative">
                <div class="w-[50px] h-[50px] left-0 top-0 absolute bg-amber-500 bg-opacity-30 rounded-full"></div>
                <div class="w-10 h-10 left-[5px] top-[5px] absolute bg-amber-500 bg-opacity-40 rounded-full"></div>
                <div class="w-[31.14px] h-[31.14px] left-[9px] top-[9px] absolute">
                  <div class="w-[31.14px] h-[31.14px] left-0 top-0 absolute bg-amber-500 rounded-full"></div>
                  <div class="w-[17.79px] h-[17.79px] left-[7.41px] top-[7.41px] absolute"></div>
                </div>
              </div>
              <div class="text-white text-lg font-semibold font-['Outfit']">
                Warsaw university
              </div>
            </div>
          </div>
          <div class="w-[287px] h-[156px] left-0 top-0 absolute">
            <div class="w-[287px] h-[156px] left-0 top-0 absolute"></div>
            <img
              class="w-[420px] h-[165px] left-[-47px] top-0 absolute"
              src={topu1}
            />
          </div>
          <div class="w-[193px] h-[250px] left-[305px] top-[231px] absolute">
            <div class="w-[193px] h-[250px] left-0 top-0 absolute">
              <div class="w-[193px] h-[250px] left-0 top-0 absolute "></div>
              <img
                class="w-[273px] h-[286px] left-[-32px] top-0 absolute"
                src={topu2}
              />
            </div>
            <div class="w-[105px] h-[104px] left-[44px] top-[86px] absolute flex-col justify-start items-center gap-2 inline-flex">
              <div class="w-[50px] h-[50px] relative">
                <div class="w-[50px] h-[50px] left-0 top-0 absolute bg-amber-500 bg-opacity-30 rounded-full"></div>
                <div class="w-10 h-10 left-[5px] top-[5px] absolute bg-amber-500 bg-opacity-40 rounded-full"></div>
                <div class="w-[31.14px] h-[31.14px] left-[9px] top-[9px] absolute">
                  <div class="w-[31.14px] h-[31.14px] left-0 top-0 absolute bg-amber-500 rounded-full"></div>
                  <div class="w-[17.79px] h-[17.79px] left-[7.41px] top-[7.41px] absolute"></div>
                </div>
              </div>
              <div class="text-center text-white text-lg font-bold font-['Outfit']">
                Jagiellonian <br />
                University
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col justify-start items-start gap-8 inline-flex">
          <div class=" flex-col justify-start items-start gap-2 flex">
            <div class="text-sky-950 text-4xl font-bold font-['Outfit'] text-center lg:text-start">
              Poland’s Top Universities
            </div>
            <div class="max-w-[658px] text-stone-500 text-lg font-normal font-['Outfit'] text-center md:text-start">
              Polish universities always extend a warm welcome to students from
              other countries. The country is always proud of its former
              students, who include Nicolaus Copernicus, a renowned astronomer,
              and Marie Curie, the first woman ever to win the Nobel Prize.
              Poland is the only country where Jagiellonian University, one of
              Europe’s oldest universities, is located.
            </div>
          </div>
          <div class="justify-start items-start gap-2 inline-flex">
            <div class="flex-col justify-start items-start gap-2 inline-flex">
              <div class="flex-col justify-start items-start gap-[25px] flex">
                <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                  University of Warsaw
                </div>
              </div>
              <div class="text-stone-500 text-lg font-[300] font-['Outfit']">
                Jagiellonian University
              </div>
              <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                Warsaw University of Technology
              </div>
              <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                Wroclaw University of science and technology
              </div>
              <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                Collegium Medicum Jagiellonian University
              </div>
              <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                Medical University of Lodz
              </div>
            </div>
            <div class="flex-col justify-start items-start gap-4 inline-flex">
              <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                Medical University of Lublin
              </div>
              <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                Medical University of Wroclaw
              </div>
              <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                Medical University of Gdansk
              </div>
              <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                University of Warmia and Mazury
              </div>
              <div class="text-stone-500 text-lg font-[300]  font-['Outfit']">
                Medical University of Warsaw
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* education syatem in poland */}

      <div class="max-w-7xl w-full mt-20 px-[26px] py-[87px] bg-sky-950 justify-center items-center inline-flex">
        <div class="self-stretch flex-col justify-start items-center gap-8 inline-flex">
          <div class="max-w-[585px] text-center text-amber-500 text-[32px] font-bold font-['Outfit']">
            Education System in Poland
          </div>
          <div class="justify-start items-start gap-20 flex flex-col md:flex-row">
            <div class="max-w-[614px] text-white text-lg font-[300] font-['Outfit']">
              No entrance exams like the GRE or GMAT must be taken to be
              admitted to any higher education programme in Poland. After
              completing their upper secondary school studies, one will qualify
              to apply to higher education in Poland to study for a diploma or
              degree. One must have obtained a valid school-leaving certificate
              of 12th-grade academic education and be qualified for higher
              education studies in their home country. In addition, applicants
              must pass an English Language Test to provide evidence to meet the
              minimal language competency set by the individual Polish
              university.
            </div>
            <div class="max-w-[566px]  text-white text-lg font-[300] font-['Outfit']">
              To meet the language skills requirement, a minimum score of 6.5
              and 6.0 is a must to attend a Master’s or Bachelor’s degree
              course, respectively, at a Polish university. The Cambridge
              Certificate of Proficiency Grade C, Cambridge Advanced Certificate
              Grade B, and TEEP are also recognized by Polish universities.
              Every university has its requirements, so one should decide on the
              university and course first and look at the language requirements
              later to make it easy.
            </div>
          </div>
        </div>
      </div>

      {/* poland univeristy fees */}
      <div class="max-w-7xl w-full px-[10px] md:px-20  flex-col justify-start items-center gap-[75px] inline-flex py-20">
        <div class="flex-col justify-start items-center gap-[25px] flex">
          <div class="max-w-[358px] text-sky-950 text-[32px] font-bold font-['Outfit']">
            Poland University Fees:
          </div>
          <div class="max-w-[1107px] text-center text-neutral-600 text-lg font-[350] font-['Outfit']">
            No entrance exams like the GRE or GMAT must be taken to be admitted
            to any higher education programme in Poland. After completing their
            upper secondary school studies, one will qualify to apply to higher
            education in Poland to study for a diploma or degree. One must have
            obtained a valid school-leaving certificate of 12th-grade academic
            education and be qualified for higher education studies in their
            home country. In addition, applicants must pass an English Language
            Test to provide evidence to meet the minimal language competency set
            by the individual Polish university.
          </div>
        </div>
        <div class="justify-center items-start gap-[45px] flex flex-col md:flex-row">
          <div class="max-w-[257px] text-sky-950 text-lg font-bold font-['Outfit']">
            Courses <br />
            Tuition Fees in Poland
          </div>
          <div class="justify-start items-start gap-4 flex flex-col md:flex-row">
            <div class="flex-col justify-start items-start gap-4 inline-flex">
              <div class="ma-w-[358px] text-neutral-600 text-lg font-[300] font-['Outfit']">
                Bachelor and Masters 2000 – 4000 Euro / Year
              </div>
              <div class="text-neutral-600 text-lg font-[300] font-['Outfit']">
                PhD 3000 Euro / Year
              </div>
              <div class="text-neutral-600 text-lg font-[300] font-['Outfit']">
                Medicine and MBA 8000 – 12000 Euro / Year
              </div>
            </div>
            <div class="flex-col justify-start items-start gap-4 inline-flex">
              <div class="text-neutral-600 text-lg font-[300] font-['Outfit']">
                Vocational Studies 3000 Euro / Year
              </div>
              <div class="text-neutral-600 text-lg font-[300] font-['Outfit']">
                Language and Foundation Courses 2000 Euro / Year
              </div>
            </div>
          </div>
        </div>
        <div class="w-full  justify-start items-start gap-8 flex flex-col md:flex-row">
          <div class="max-w-[500px] text-sky-950 text-[32px] font-bold font-['Outfit'] text-center md:text-start">
            Living Costs for International Students to Study in Poland
          </div>
          <div class="max-w-[553px] text-neutral-600 text-lg font-normal font-['Outfit'] text-center md:text-start">
            Living costs in Poland largely depend on where you study and live.
            You will always pay more to live in a city like Warsaw than in a
            rural location. International students’ living costs in Poland range
            from 350 to 550 euros per month. There will be differences in the
            amount based on your accommodation type, lifestyle and social
            expenses in Poland, which is just an average number.
          </div>
        </div>
      </div>

      {/* accomododation */}
      <div class="w-full py-10 px-[10px] md:px-20  justify-start items-center gap-[75px] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-[full] md:w-[60%] mr-10">
            <img
              src={acom1}
              className=" w-[300px] h-[300px] md:w-[408px] md:h-[358px]  object-cover  rounded-lg"
              alt="dd"
            />
            <img
              src={acom2}
              className="w-[200px] h-[200px] md:w-[255px] md:h-[255px] absolute right-[-70px] bottom-[-50px]"
              alt="dd"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 flex-col justify-start items-start gap-6 inline-flex">
          <div class="max-w-[329px] text-sky-950 text-[32px] font-bold font-['Outfit'] text-center md:text-start">
            Accommodation
          </div>
          <div class=" text-neutral-600 text-lg font-normal font-['Outfit']">
            In Poland, there are two kinds of lodging—those at the university
            and those for private students. There are few university dormitories
            in Poland, although they are less expensive and naturally closer to
            the universities. The requirements and rents are higher in private
            renting units.
          </div>
          <div class=" text-neutral-600 text-lg font-normal font-['Outfit']">
            Private Rental Apartments for Students 350 to 400 EUR / Month
          </div>
          <div class="] text-neutral-600 text-lg font-normal font-['Outfit']">
            Campus Accommodation 170 to 200 EUR / Month
          </div>
          <div class=" text-neutral-600 text-lg font-normal font-['Outfit']">
            In locations like Warsaw, the cost of living for international
            students is higher in Poland. One-bedroom apartments typically cost
            between 360 and 500 euros per month to rent.
          </div>
        </div>
      </div>

      {/*   food express and transportation */}

      <div class="w-full justify-start px-[10px] md:px-20 items-start gap-[46px]  flex flex-col md:flex-row">
        <div class=" pt-14 pb-[146px] bg-sky-50 justify-start items-center flex">
          <div class="self-stretch flex-col justify-start items-start gap-8 inline-flex">
            <div class="w-12 h-12 relative">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.5 10.5V7.5H28.5C29.3295 7.5 30 6.8295 30 6C30 5.172 29.3295 4.5 28.5 4.5H19.5C18.6705 4.5 18 5.172 18 6C18 6.8295 18.6705 7.5 19.5 7.5H22.5V10.5C9.948 11.2785 0 21.7515 0 34.5V36C0 36.8295 0.6705 37.5 1.5 37.5H46.5C47.3295 37.5 48 36.8295 48 36V34.5C48 21.7515 38.052 11.2785 25.5 10.5ZM46.5 40.5H1.5C0.6705 40.5 0 41.172 0 42C0 42.8295 0.6705 43.5 1.5 43.5H46.5C47.3295 43.5 48 42.8295 48 42C48 41.172 47.3295 40.5 46.5 40.5Z"
                  fill="#FFA800"
                />
              </svg>
            </div>
            <div class="max-w-[509px] text-sky-950 text-2xl font-bold font-['Outfit']">
              Food Expenses
            </div>
            <div class="max-w-[509px] h-[168px] text-zinc-600 text-lg font-normal font-['Outfit']">
              The average monthly cost of meals for an international student in
              Poland is between 100 and 150 euros. Several affordable grocery
              options for international students can help you lower the cost of
              living in Poland. The prices at the restaurants are reasonable. A
              three-course meal costs about 23 euros, while drinks typically
              cost 2 euros.
            </div>
          </div>
        </div>
        <div class=" pt-14 pb-[74px] bg-sky-50 justify-start items-center flex">
          <div class="self-stretch flex-col justify-start items-start gap-6 inline-flex">
            <div class="w-10 h-10 relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 20C32 26.6275 26.6275 32 20 32C13.3726 32 8 26.6275 8 20C8 13.3726 13.3726 8 20 8C26.6275 8 32 13.3726 32 20Z"
                  stroke="#FFA800"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="text-sky-950 text-2xl font-bold font-['Outfit']">
              Transportation
            </div>
            <div class="max-w-[476px] h-[120px] text-zinc-600 text-lg font-normal font-['Outfit']">
              The prices of gasoline keep changing. However, the average is 1
              euro a litre. If the place students are staying is nearby the
              University, Poland is a very Pedestrian friendly country. A
              semester pass from the Universities costs around 50 euros for
              students in Polish Universities.
            </div>
            <div class="max-w-[476px] h-[120px] text-zinc-600 text-lg font-normal font-['Outfit']">
              These are some of the regular living costs in Poland for
              international students. There are some miscellaneous costs of
              stationary, internet and other expenses that will be added, and
              again, the averages will change basis the places you are staying
              at.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInPoland;
