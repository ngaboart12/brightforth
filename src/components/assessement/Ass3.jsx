import React from "react";
import Input from "../Input";

const Ass3 = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[32px] text-[#07294D] font-bold">
        Canadian Language Proficiency
      </h1>
      <div className="flex flex-col gap-2">
        <div className="w-[300px]">
          <Input
            placeholder="First official language"
            label="First official language"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Input placeholder="Read Proficiency" label="Read Proficiency" />
          <Input
            placeholder="Writing Proficiency"
            label="Writing Proficiency"
          />
          <Input
            placeholder="Speaking Proficiency"
            label="Speaking Proficiency"
          />
          <Input
            placeholder="Listening Proficiency"
            label="Listening Proficiency"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-[300px]">
          <Input
            placeholder="Second official language"
            label="Second official language"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Input placeholder="Read Proficiency" label="Read Proficiency" />
          <Input
            placeholder="Writing Proficiency"
            label="Writing Proficiency"
          />
          <Input
            placeholder="Speaking Proficiency"
            label="Speaking Proficiency"
          />
          <Input
            placeholder="Listening Proficiency"
            label="Listening Proficiency"
          />
        </div>
      </div>
    </div>
  );
};

export default Ass3;
