import React from "react";
import Input from "../Input";

const Ass1 = ({ formData, handleInputChange }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-[#07294D] text-center text-xl leading-4 md:text-4xl lg:text-5xl font-bold  md:leading-8">
        Free International Student <br /> Visa Assessment Form{" "}
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center py-4">
        <h1 className="font-semibold text-xl sm:text-2xl text-[#07294D] pb-2">
          Personal Information
        </h1>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
          <Input
            placeholder="Enter First name"
            label="First name"
            type="text"
            value={formData.personInfo.firstName}
            onChange={(e) =>
              handleInputChange("personInfo", "firstName", e.target.value)
            }
          />

          <Input
            placeholder="Enter Last Name"
            label="Last Name"
            type="text"
            value={formData.personInfo.lastName}
            onChange={(e) =>
              handleInputChange("personInfo", "lastName", e.target.value)
            }
          />
          <Input
            placeholder="Enter Email"
            label="Email Address"
            type="email"
            value={formData.personInfo.emailAdrress}
            onChange={(e) =>
              handleInputChange("personInfo", "emailAdrress", e.target.value)
            }
          />
          <Input
            placeholder="Nationality"
            label="Nationality"
            type="text"
            value={formData.personInfo.nationality}
            onChange={(e) =>
              handleInputChange("personInfo", "nationality", e.target.value)
            }
          />
          <Input
            placeholder="Country of Residence"
            label="Country of Residence"
            type="number"
            value={formData.personInfo.countryResidence}
            onChange={(e) =>
              handleInputChange(
                "personInfo",
                "countryResidence",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Age"
            label="Enter Age"
            type="number"
            value={formData.personInfo.Age}
            onChange={(e) =>
              handleInputChange("personInfo", "Age", e.target.value)
            }
          />
          <Input
            placeholder="select"
            label=" highest level of education?"
            type="text"
            value={formData.personInfo.levelOfEducation}
            onChange={(e) =>
              handleInputChange(
                "personInfo",
                "levelOfEducation",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Enter Faculity"
            label="faculity"
            type="text"
            value={formData.personInfo.faculty}
            onChange={(e) =>
              handleInputChange("personInfo", "faculty", e.target.value)
            }
          />
          <Input
            placeholder="Enter Phone number"
            label="Phone number"
            type="text"
            value={formData.personInfo.phoneNumber}
            onChange={(e) =>
              handleInputChange("personInfo", "phoneNumber", e.target.value)
            }
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start  justify-between p-6 bg-[#07294D] rounded-md     gap-4 mt-4 sm:mt-8 lg:mt-12">
          <div className=" items-center h-full justify-center my-auto">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M50 25C50 38.81 38.8075 50 25 50C11.1925 50 0 38.81 0 25C0 11.195 11.1925 0 25 0C38.8075 0 50 11.195 50 25Z"
                fill="#FFA800"
              />
              <path
                d="M24.9961 32.3218C26.2286 32.3218 27.2086 33.3043 27.2086 34.5093C27.2086 35.7143 26.2286 36.6968 25.0211 36.6968C23.8086 36.6968 22.8211 35.7143 22.8211 34.5093C22.8211 33.3043 23.7986 32.3218 24.9961 32.3218ZM24.9961 13.3398C26.2011 13.3398 27.1836 14.3223 27.1836 15.5273V26.5773C27.1836 27.7823 26.2011 28.7648 24.9961 28.7648C23.7911 28.7648 22.8086 27.7823 22.8086 26.5773V15.5273C22.8086 14.3223 23.7911 13.3398 24.9961 13.3398Z"
                fill="#FFA800"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-center">
            <span className="text-white text-[14px] font-[100] text-center md:text-start">
              Are you, or a family member, able to provide bank statements
              equivalent of
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="less"
                  value="Less than - 5,000 USD"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "provideBankStatementsEquivalent",
                      e.target.value
                    )
                  }
                />
                <span className="text-white">Less than - 5,000 USD</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="less"
                  value="5,000 USD - 15,000 USD"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "provideBankStatementsEquivalent",
                      e.target.value
                    )
                  }
                />
                <span className="text-white">5,000 USD - 15,000 USD</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="less"
                  value="25,000 USD - Above"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "provideBankStatementsEquivalent",
                      e.target.value
                    )
                  }
                />
                <span className="text-white">25,000 USD - Above</span>
              </div>
            </div>

            <div className="flex flex-col  gap-1 text-black ">
              <span className="text-white text-[14px] text-center md:text-start">
                to cover your living expenses while you study in Canada?
              </span>
              <div className="flex gap-2 w-full  justify-center md:justify-start ">
                <div className="flex gap-4  px-6 py-3 rounded-md bg-[#072F5A]">
                  <input
                    type="radio"
                    className="w-4"
                    name="Hon"
                    value="Yes"
                    onChange={(e) =>
                      handleInputChange(
                        "personInfo",
                        "livingExpensesWhileYouWtudyInCanada",
                        e.target.value
                      )
                    }
                  />{" "}
                  <label htmlFor="" className="text-white">
                    Yes
                  </label>
                </div>
                <div className="flex gap-4  px-6 py-3 rounded-md bg-[#072F5A]">
                  <input
                    type="radio"
                    className="w-4"
                    name="Hon"
                    value="No"
                    onChange={(e) =>
                      handleInputChange(
                        "personInfo",
                        "livingExpensesWhileYouWtudyInCanada",
                        e.target.value
                      )
                    }
                  />{" "}
                  <label htmlFor="" className="text-white">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-2 text-black items-center ">
            <span className="text-white text-[14px] text-center md:text-start leading-4">
              Do you already have a letter of admission/acceptance to a Canadian
              educational institution?
            </span>
            <div className="flex flex-col md:flex-row w-[150px]   gap-2 md:w-full justify-center md:justify-start ">
              <div className="flex gap-4  px-6 py-3 rounded-md bg-[#072F5A]">
                <input
                  type="radio"
                  className="w-4"
                  name="Honeee"
                  value="Yes"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "letterOfAdmission",
                      e.target.value
                    )
                  }
                />{" "}
                <label htmlFor="" className="text-white">
                  Yes
                </label>
              </div>
              <div className="flex gap-4  px-6 py-3 rounded-md bg-[#072F5A]">
                <input
                  type="radio"
                  className="w-4"
                  name="Honeee"
                  value="No"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "letterOfAdmission",
                      e.target.value
                    )
                  }
                />{" "}
                <label htmlFor="" className="text-white">
                  No
                </label>
              </div>
              <div className="flex gap-2  px-1 items-center py-3 rounded-md bg-[#072F5A]">
                <input
                  type="radio"
                  className="w-4"
                  name="Honeee"
                  value="i'm not sure"
                  onChange={(e) =>
                    handleInputChange(
                      "personInfo",
                      "letterOfAdmission",
                      e.target.value
                    )
                  }
                />{" "}
                <label htmlFor="" className="text-white text-[12px]">
                  i'm not sure
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ass1;
