import React from "react";
import LinkComponent from "../components/LinkComponet";
import Navbar from "../components/Navbar";
import Footer2 from "../components/Footer2";
import Footer from "../components/Footer";

const StudyInChina = () => {
  return (
    <div className="flex flex-col items-center  w-full">
      <LinkComponent />
      <Navbar />

      {/* hero */}
      <div class="max-w-7xl w-full px-[20px] md:px-40 py-10 flex-col justify-start items-center gap-4 inline-flex">
        <div class="px-4 py-2 bg-orange-50 justify-center items-center gap-2.5 inline-flex">
          <div class="text-center text-amber-500 text-2xl font-normal font-['Outfit']">
            Study in China
          </div>
        </div>
        <div class="max-w-[394px] text-center text-sky-950 text-[24px] md:text-[32px] font-bold font-['Outfit']">
          {" "}
          A Guide for Students
        </div>
        <div class="max-w-[703px] text-center text-stone-500 text-lg font-normal font-['Outfit']">
          Want to study in Canada? We answer all your top questions, including
          how much it costs to study in Canada, which courses are available and
          how you can use your Canadian study permit as a pathway to obtain
          canadian permanent residence{" "}
        </div>
      </div>

      {/* lists */}
      <div className="w-full px-[20px] items-center md:px-40 max-w-7xl flex flex-col">
        <div className="gap-x-20 gap-y-6 grid grid-cols-1 sm:grid-cols-2">
          <span className="text-[18px] text-black font-[400]">
            A Quick Intro to China
          </span>
          <span className="text-[18px] text-black font-[400]">
            Why Study in China?
          </span>
          <span className="text-[18px] text-black font-[400]">
            Higher Education Institutions in China
          </span>
          <span className="text-[18px] text-black font-[400]">
            Pathway to Studying in China
          </span>
          <span className="text-[18px] text-black font-[400]">
            Top Institutions in China
          </span>
          <span className="text-[18px] text-black font-[400]">
            After Study Opportunities in China
          </span>
          <span className="text-[18px] text-black font-[400]">
            Applying to Study in China
          </span>
          <span className="text-[18px] text-black font-[400]">
            Universities in China Grouped by Subject
          </span>
        </div>
      </div>

      {/* A quick intro to china */}
      <div class="max-w-7xl w-full px-[20px] md:px-40  flex-col justify-start items-center gap-6 inline-flex py-20">
        <div class="max-w-[585px] text-center text-sky-950 text-[32px] font-bold font-['Outfit']">
          A Quick Intro to China
        </div>
        <div class="max-w-[989px] text-center text-neutral-700 text-lg font-normal font-['Outfit']">
          The figure 1.3 billion might be overwhelming for you in terms of a
          country’s population, but not for the fastest growing economy in the
          world – which China has been the last few decades.
          <br />
          <br />
          From sophisticated urban cities to rural cities close to nature, you
          will be spoiled by these beautiful landscapes of hills, lakes, and
          wide-open fields.
          <br />
          <br />
          Chinese culture too is, essentially, fascinating to immerse oneself in
          – which would automatically be part of your student life if you choose
          to study in China.
        </div>
      </div>

      {/* why study in china */}
      <div class="max-w-7xl w-full px-[20px] md:px-40  flex-col justify-start items-center md:items-start gap-6 inline-flex">
        <div class="px-4 py-2 bg-orange-50 justify-center items-center gap-2.5 inline-flex">
          <div class="text-center text-amber-500 text-2xl font-normal font-['Outfit']">
            Why Study in China?
          </div>
        </div>
        <div class="max-w-[585px] text-center md:text-start text-sky-950 text-[24px] md:text-[32px] font-bold font-['Outfit']">
          There are different reasons why you should study in China.
        </div>
        <div class="justify-start items-start gap-6 flex flex-col md:flex-row">
          <div class=" px-[35px] pt-8 pb-[79px] bg-slate-50 justify-center items-center flex">
            <div class="max-w-[326px] text-neutral-700 text-lg font-normal font-['Outfit']">
              It is a great chance to study in the most populous country in the
              world. You will experience a mix of ancient and modern
              civilization within a country that has many different cultures and
              dialects.
            </div>
          </div>
          <div class="pl-[35px] pr-[57px] pt-[29px] pb-[31px] bg-slate-50 justify-start items-center flex">
            <div class="max-w-[304px] text-zinc-800 text-lg font-normal font-['Outfit']">
              As China exudes both tradition and modernity, its rich history
              extending further than 5,000 years, its seven UNESCO world
              heritage sites such as the Forbidden City, and its booming cities,
              like Shanghai, are some of the reasons why you should go.
            </div>
          </div>
        </div>
        <div class="justify-start items-start gap-6 flex flex-col md:flex-row">
          <div class="max-w-[396px]  px-[35px] pt-8 pb-[31px] bg-slate-50 justify-center items-center flex">
            <div class="max-w-[326px] text-neutral-700 text-lg font-normal font-['Outfit']">
              As the second largest economy in the world, just one step down
              from the United States, only would working there be immensely
              rewarding, but studying in China would be so as well.
            </div>
          </div>
          <div class="pl-[35px] pr-[57px] pt-[29px] pb-[57px] bg-slate-50 justify-start items-center flex">
            <div class="max-w-[304px] text-zinc-800 text-lg font-normal font-['Outfit']">
              That is why many students worldwide choose to study in China for a
              chance to meet people from all over the world and expand their
              network!
            </div>
          </div>
        </div>
        <div class="justify-start items-start gap-6 flex flex-col md:flex-row">
          <div class="max-w-[396px]  px-[35px] pt-8 pb-[31px] bg-slate-50 justify-center items-center flex">
            <div class="max-w-[326px] text-neutral-700 text-lg font-normal font-['Outfit']">
              Companies and leaders from various industries come to this part of
              the country and do their business in China, so it’s possible to
              meet one or them while you are in the country.
            </div>
          </div>
          <div class="pl-[35px] pr-[57px] pt-[29px] pb-[57px] bg-slate-50 justify-start items-center flex">
            <div class="max-w-[304px] text-zinc-800 text-lg font-normal font-['Outfit']">
              Also, China is very affordable; the cost of living and the tuition
              fees are much lower on an average, compared to other continents.
            </div>
          </div>
        </div>
        <div class="justify-start items-start gap-6 inline-flex">
          <div class="max-w-[396px]  px-[35px] pt-8 pb-[31px] bg-slate-50 justify-center items-center flex">
            <div class="max-w-[326px] text-neutral-700 text-lg font-normal font-['Outfit']">
              Plus, the Chinese government is investing immensely in education
              to get more international recognition. Thus, you will get a chance
              to get the top education at a price you can afford.
            </div>
          </div>
        </div>
      </div>

      {/* high education in china */}
      <div class="max-w-7xl py-20 w-full px-[20px] md:px-40  flex-col justify-start items-start gap-12 inline-flex">
        <div class="justify-start items-start gap-8 flex flex-col md:flex-row">
          <div class="max-w-[420px] text-sky-950 text-[32px] font-bold font-['Outfit']">
            Higher Education in China
          </div>
          <div class="max-w-[597px] pl-0 md:pl-24 text-neutral-700 text-lg font-normal font-['Outfit']">
            China has an over 2,000 higher education institutions all over the
            country, and some of Asia’s and the world’s top universities belong
            to China, such as Tsinghua University and Peking University in
            Beijing.
          </div>
        </div>
        <div class="justify-start items-start gap-8 flex flex-col md:flex-row">
          <div class="max-w-[420px] text-neutral-700 text-lg font-normal font-['Outfit']">
            While the country is known to be the top country sending students to
            study overseas, it is also a known fact that the country has been
            wooing international students to come and study in the country.
            <br />
            <br />
            According to the Ministry of Education of China, in 2018, there were
            almost 500,000 international students in the country, and this is
            growing year by year.
          </div>
          <div class="max-w-[589px] text-neutral-700 text-lg font-normal font-['Outfit']">
            The Chinese government plays a vital role in improving the education
            sector in the country. Over the years, it has been very active and
            encouraging in the development of the country’s higher education
            standing, both in quantity and quality.
            <br />
            <br />
            With this mission, the government has poured large amounts of
            funding to certain universities to help improve facilities, build
            research centers, attract world-renowned scholars and faculties,
            among other developments.
          </div>
        </div>
      </div>

      {/* Hight eduction institute */}
      <div class="max-w-7xl w-full px-[20px] md:px-40 flex-col justify-start items-center gap-4 inline-flex">
        <div class="text-sky-950 text-[24px] md:text-[32px] font-bold font-['Outfit']">
          A. Higher Education Institutions in China
        </div>
        <div class="max-w-[902px]  text-center text-neutral-600 text-lg font-normal font-['Outfit']">
          The universities in China are either state-owned or non-government
          (private) institution:
        </div>
        <div class="justify-start w-ull items-start gap-6 flex flex-col md:flex-row">
          <div class="pl-[38.50px] md:w-1/2 w-full pr-[37.50px] pt-[52px] pb-[51px] bg-slate-50 justify-center items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-[21px] inline-flex">
              <div class="text-amber-500 text-2xl font-semibold font-['Outfit']">
                Regular Institutions
              </div>
              <div class="max-w-80">
                <span className="text-zinc-800 text-lg font-normal font-['Outfit']">
                  Institutions run by the central{" "}
                </span>
                <span className="text-zinc-800 text-lg font-normal font-['Outfit'] underline">
                  ministries and agencies
                </span>
                <span className="text-zinc-800 text-lg font-normal font-['Outfit']">
                  , as well as local authorities.
                </span>
              </div>
              <div class="max-w-80 text-zinc-800 text-lg font-normal font-['Outfit']">
                These “traditional” and “typical” HEIs help students prepare for
                examinations for a recognised degree under the government, as
                well as training to improve their skills that are beneficial to
                the Chinese economy
              </div>
            </div>
          </div>
          <div class="pl-[46.50px] pr-[45.50px] pt-[52px] pb-[97px] bg-slate-50 justify-center items-center flex">
            <div class="self-stretch flex-col justify-start items-start gap-[21px] inline-flex">
              <div class="text-amber-500 text-2xl font-semibold font-['Outfit']">
                Independent Institutions
              </div>
              <div class="max-w-[304px] text-zinc-800 text-lg font-normal font-['Outfit']">
                Also known as duli xueyuan
              </div>
              <div class="max-w-[304px]">
                <span className="text-zinc-800 text-lg font-normal font-['Outfit']">
                  These{" "}
                </span>
                <span className="text-zinc-800 text-lg font-normal font-['Outfit'] underline">
                  institutions
                </span>
                <span className="text-zinc-800 text-lg font-normal font-['Outfit']">
                  {" "}
                  do not receive any government funding; they work with other
                  well-known universities, private institutions, and the
                  business sector – self-funding, their tuition fee is more
                  expensive
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="md:pl-[82px] md:pr-[237px] pt-[22px] pb-10 bg-slate-50 justify-start items-center inline-flex">
          <div class="self-stretch flex-col justify-start items-start gap-[21px] inline-flex">
            <div class="text-amber-500 text-2xl font-semibold font-['Outfit']">
              Vocational Institutions
            </div>
            <div class="max-w-[481px] text-zinc-800 text-lg font-normal font-['Outfit']">
              Offer all levels of degrees (Bachelor, Master and PhD), but use
              both the theoretical framework and practical skills (applied
              science) during studies.
            </div>
          </div>
        </div>
        <div class="md:pl-[29px] md:pr-[55px] pt-[33px] pb-[30px] bg-slate-50 justify-start items-center inline-flex">
          <div class="self-stretch flex-col justify-start items-center gap-[21px] inline-flex">
            <div class="text-amber-500 text-2xl font-semibold font-['Outfit']">
              Adult Institutions
            </div>
            <div class="max-w-[324px] md:max-w-[] text-center text-zinc-800 text-lg font-normal font-['Outfit']">
              Offer all levels of degrees (Bachelor, Master and PhD), but use
              both the theoretical framework and practical skills (applied
              science) during studies.
            </div>
            <div class="max-w-[724px] text-center">
              <span className="text-zinc-800 text-lg font-semibold font-['Outfit']">
                Includes the{" "}
              </span>
              <span className="text-zinc-800 text-lg font-semibold font-['Outfit'] underline">
                institutions
              </span>
              <span className="text-zinc-800 text-lg font-semibold font-['Outfit']">
                {" "}
                focusing on:
              </span>
            </div>
            <div class="justify-start  items-start gap-6 flex flex-col md:flex-row">
              <div class=" md:px-[35px] pt-8 pb-[77px] bg-slate-50 justify-center items-center flex">
                <div class="max-w-[326px] text-neutral-700 text-lg font-normal font-['Outfit']">
                  Administrative Colleges: adult middle school and higher
                  education programmes for government officers
                </div>
              </div>
              <div class="md:pl-[35px] md:pr-[57px] pt-[29px] pb-[34px] bg-slate-50 justify-start items-center flex">
                <div class="max-w-[304px] text-zinc-800 text-lg font-normal font-['Outfit']">
                  Correspondence Departments and Attached Evening Colleges:
                  part-time adult higher education programmes through
                  correspondence and attached evening colleges
                </div>
              </div>
            </div>
            <div class="justify-start  items-start gap-6 flex flex-col md:flex-row">
              <div class="max-w-[396px]  md:px-[35px] pt-8 pb-16 bg-slate-50 justify-center items-center flex">
                <div class="max-w-[326px] text-neutral-700 text-lg font-normal font-['Outfit']">
                  Employees’ Colleges: offers credentials to staff/ or workers
                </div>
              </div>
              <div class="md:pl-[35px] md:pr-[57px] pt-[29px] pb-[21px] bg-slate-50 justify-start items-center flex">
                <div class="max-w-[304px] text-zinc-800 text-lg font-normal font-['Outfit']">
                  Independent Self-Study Examinations: the only form of higher
                  education in China with an entirely open admissions policy
                </div>
              </div>
            </div>
            <div class="justify-start items-start gap-6 flex flex-col md:flex-row">
              <div class="md:px-[35px] pt-8 pb-3.5 bg-slate-50 justify-center items-center flex">
                <div class="max-w-[326px] text-neutral-700 text-lg font-normal font-['Outfit']">
                  Radio and Television Universities: multimedia courses through
                  radio, television, print, audio-visual materials and computer
                  networks on a nationwide basis
                </div>
              </div>
              <div class="md:pl-[35px] md:pr-[57px] pt-[29px] pb-[63px] bg-slate-50 justify-start items-center flex">
                <div class="max-w-[304px] text-zinc-800 text-lg font-normal font-['Outfit']">
                  Spare-time Universities: sub-degree level programmes
                  undertaken in the students’ spare time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Private Higher education */}
      <div class="w-full px-[20px] md:px-40 py-20 flex-col justify-start items-start gap-12 inline-flex">
        <div class="justify-start items-start gap-8 flex flex-col md:flex-row">
          <div class="max-w-[420px] text-sky-950 text-[24px] md:text-[32px] font-bold font-['Outfit']">
            Private Higher Education Institutions
          </div>
          <div class="md:pl-10 max-w-[597px] text-neutral-700 text-lg font-normal font-['Outfit']">
            These institutions are not administered by local, state, or national
            government; source of income depends on students
          </div>
        </div>
        <div class="justify-start items-start gap-8 flex flex-col md:flex-row">
          <div class="max-w-[420px] text-neutral-700 text-lg font-normal font-['Outfit']">
            While more expensive than public schools, students can get
            scholarship from these institutions
          </div>
          <div class="max-w-[550px] text-neutral-700 text-lg font-normal font-['Outfit']">
            There are currently 300 private HEIs in Chin
          </div>
        </div>
      </div>

      {/* pathway to studying in china */}

      <div class="max-w-7xl w-full p-6 md:p-20 justify-center items-center flex flex-col    bg-sky-900">
        <div class="  flex-col justify-start items-center gap-[42px] inline-flex">
          <div class="flex-col justify-start items-center gap-8 flex">
            <div class="text-amber-500 text-[24px] md:text-[32px] text-center font-bold font-['Outfit']">
              Pathway to Studying in China
            </div>
            <div class="text-white text-center  text-lg font-normal font-['Outfit']">
              The length of your study depends on the path you wish to take.
              Here’s a basic duration of study in China
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 py-10 gap-10">
          <div className="flex flex-col p-4 rounded-md bg-[#3369A3] text-center">
            <h1 className="text-white text-[20px]">Bachelor's Degree</h1>
            <span className="text-white text-[20px]">4-5</span>
          </div>
          <div className="flex flex-col p-4 rounded-md bg-[#3369A3] text-center">
            <h1 className="text-white text-[20px]">Bachelor's Degree</h1>
            <span className="text-white text-[20px]">4-5</span>
          </div>
          <div className="flex flex-col p-4 rounded-md bg-[#3369A3] text-center">
            <h1 className="text-white text-[20px]">Bachelor's Degree</h1>
            <span className="text-white text-[20px]">4-5</span>
          </div>
        </div>
      </div>

      {/* top insitituation */}
      <div className="max-w-7xl flex w-full flex-col md:flex-row">
        <div class="w-full md:w-1/2 px-[20px]  md:pl-[155px] md:pr-[102px] pt-[102px] pb-[133px] bg-sky-100 justify-end items-center inline-flex">
          <div class="self-stretch flex-col justify-start items-start gap-6 inline-flex">
            <div class="text-sky-900 text-[32px] font-bold font-['Outfit']">
              Top Institutions in China
            </div>
            <div class="max-w-[510px]  text-zinc-800 text-lg font-normal font-['Outfit']">
              Several universities in China are present in the rankings of top
              300 universities in the world, and in particular, these
              universities rank highly in Asia and BRIC’s top rankings as well.
              The top 5 universities in China as per QS World Ranking 2021 are
              as follows:
              <br />
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 py-20 justify-start items-start gap-3.5 inline-flex">
          <div class="flex-col justify-start items-start gap-3.5 inline-flex">
            <div class="p-6 bg-white flex-col justify-start items-start gap-2.5 flex">
              <div class="justify-start items-center gap-2 inline-flex">
                <img
                  class="w-[49.84px] h-10"
                  src="https://via.placeholder.com/50x40"
                />
                <div class="text-center text-black text-lg font-normal font-['Outfit']">
                  Tsinghua University
                </div>
              </div>
            </div>
            <div class="px-4 py-6 bg-white flex-col justify-start items-start gap-2.5 flex">
              <div class="justify-start items-center gap-2 inline-flex">
                <img
                  class="w-[52.22px] h-10"
                  src="https://via.placeholder.com/52x40"
                />
                <div class="text-center text-black text-lg font-normal font-['Outfit']">
                  Zhejiang Univerity
                </div>
              </div>
            </div>
            <div class="px-4 py-6 bg-white flex-col justify-start items-start gap-2.5 flex">
              <div class="justify-start items-center gap-[13px] inline-flex">
                <img
                  class="w-[52.22px] h-10"
                  src="https://via.placeholder.com/52x40"
                />
                <div class="text-center text-black text-lg font-normal font-['Outfit']">
                  Fudan University
                </div>
              </div>
            </div>
          </div>
          <div class="flex-col justify-start items-start gap-4 inline-flex">
            <div class="px-4 py-6 bg-white flex-col justify-start items-start gap-2.5 flex">
              <div class="justify-start items-center gap-[19px] inline-flex">
                <img
                  class="w-[52.22px] h-10"
                  src="https://via.placeholder.com/52x40"
                />
                <div class="text-black text-lg font-normal font-['Outfit']">
                  Shangai jia tong
                  <br />
                  University
                </div>
              </div>
            </div>
            <div class="px-4 py-6 bg-white flex-col justify-start items-start gap-2.5 flex">
              <div class="justify-start items-center gap-[13px] inline-flex">
                <img
                  class="w-[52.22px] h-10"
                  src="https://via.placeholder.com/52x40"
                />
                <div class="text-center text-black text-lg font-normal font-['Outfit']">
                  Fudan University
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* after studying opurtunity */}
      <div className="flex flex-col gap-6 py-10">
        <div class="text-center text-sky-900 text-[24px] md:text-[32px] font-bold font-['Outfit']">
          After Study Opportunities <br />
          in China
        </div>
        <div class="max-w-[953px] text-center text-black text-lg font-normal font-['Outfit']">
          When you decide to stay longer in the country because you want to
          continue your study, you can go to the embassy and apply for an
          extension of your study visa. Most of the time it will not be a
          problem, as long as you have a university declaration as proof.
        </div>
        <div class="max-w-[938px] text-center text-black text-lg font-normal font-['Outfit']">
          But if you want to stay longer because you got a job offered,
          different rules apply. In this case, you need to apply for a work visa
          called Visa Z, and both the employer and you need to meet the
          conditions.
        </div>
        <div class="max-w-[938px] text-center">
          <span className="text-black text-lg font-normal font-['Outfit']">
            Check out{" "}
          </span>
          <span className="text-black text-lg font-normal font-['Outfit'] underline">
            the official Chinese government website
          </span>
          <span className="text-black text-lg font-normal font-['Outfit']">
            {" "}
            for more information and the requirements for applying for a work
            visa, or any other visa that is not a student visa.
          </span>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default StudyInChina;
