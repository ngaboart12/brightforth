import React from "react";
import Input from "../Input";

const Ass1 = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-4">
      <h1 className="text-[#07294D] text-center text-[32px] font-bold leading-8">
        Free International Student <br /> Visa Assessment Form{" "}
      </h1>
      <div className="flex flex-col w-full py-10 ">
        <h1 className=" font-[600] text-[24px] text-[#07294D] pb-4">
          persnonal information
        </h1>

        <div className="grid gap-4 grid-cols-3 w-full ">
          <Input
            placeholder="Enter First name"
            label="First name"
            type="text"
          />

          <Input placeholder="Enter Last Name" label="Last Name" type="text" />
          <Input placeholder="Enter Email" label="Email Address" type="email" />
          <Input placeholder="Nationality" label="Nationality" type="text" />
          <Input
            placeholder="Country of Residence"
            label="Country of Residence"
            type="number"
          />
          <Input placeholder="Age" label="Enter Age" type="number" />
          <Input
            placeholder="select"
            label="What is your highest level of education?"
            type="text"
          />
          <Input placeholder="Enter Faculity" label="faculity" type="text" />
          <Input
            placeholder="Enter Phone number"
            label="Phone number"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Ass1;
