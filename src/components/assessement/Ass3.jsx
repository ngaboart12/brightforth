import React from "react";
import Input from "../Input";

const Ass3 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[22px] md:text-[32px] leading-6 text-[#07294D] font-bold">
        Canadian Language Proficiency
      </h1>
      <div className="flex flex-col gap-2">
        <div className="w-[300px]">
          <Input
            placeholder="First official language"
            label="First official language"
            value={formData.cannadian.firstOfficialLanguage}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "firstOfficialLanguage",
                e.target.value
              )
            }
          />
        </div>
        <div className="grid  sm:grid-cols-2 blg:grid-cols-4 gap-2">
          <Input
            placeholder="Read Proficiency"
            label="Read Proficiency"
            value={formData.cannadian.firstReadProficiency}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "firstReadProficiency",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Writing Proficiency"
            label="Writing Proficiency"
            value={formData.cannadian.firstWritingProficiency}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "firstWritingProficiency",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Speaking Proficiency"
            label="Speaking Proficiency"
            value={formData.cannadian.firstSpeakingProficiency}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "firstSpeakingProficiency",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Listening Proficiency"
            label="Listening Proficiency"
            value={formData.cannadian.firstListeningProficiency}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "firstListeningProficiency",
                e.target.value
              )
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-[300px]">
          <Input
            placeholder="Second official language"
            label="Second official language"
            value={formData.cannadian.secondOfficialLanguage}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "secondOfficialLanguage",
                e.target.value
              )
            }
          />
        </div>
        <div className="grid  sm:grid-cols-2 blg:grid-cols-4 gap-2">
          <Input
            placeholder="Read Proficiency"
            label="Read Proficiency"
            value={formData.cannadian.secondReadProficiency}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "secondReadProficiency",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Writing Proficiency"
            label="Writing Proficiency"
            value={formData.cannadian.secondWritingProficiency}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "secondWritingProficiency",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Speaking Proficiency"
            label="Speaking Proficiency"
            value={formData.cannadian.secondSpeakingProficiency}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "secondSpeakingProficiency",
                e.target.value
              )
            }
          />
          <Input
            placeholder="Listening Proficiency"
            label="Listening Proficiency"
            value={formData.cannadian.secondListeningProficiency}
            onChange={(e) =>
              handleInputChange(
                "cannadian",
                "secondListeningProficiency",
                e.target.value
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Ass3;
