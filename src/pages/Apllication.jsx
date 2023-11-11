import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
const Apllication = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    stage1: {
      firstName: "",
      middelName: "",
      lastName: "",
      dateOfBirth: "",
      placeOfBirth: "",
      nationality: "",
      sex: "",
      firstLaguage: "",
    },
    stage2: {
      passportNumber: "",
      passportIssuedBy: "",
      passportExpiryDate: "",
      ValidTo: "",
      country: "",
      district: "",
      streetNumber: "",
      contactNumber: "",
      email: "",
    },
    stage3: {
      fatherName: "",
      fatherContact: "",
      motherName: "",
      motherContact: "",
      emrgencyName: "",
      relationship: "",
      emargencyContact: "",
      emrgencyEmail: "",
    },
  });
  const handleInputChange = (stage, inputName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [stage]: {
        ...prevData[stage],
        [inputName]: value,
      },
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "formData"), formData);
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="py-[12px] w-[80%] flex items-center justify-center bg-[#07294D] rounded-md">
        <span className="text-white text-[20px] font-[300]">Application</span>
      </div>
      <form
        onSubmit={handelSubmit}
        className="pt-4 w-full items-center justify-center"
      >
        {step === 1 && (
          <Step1 formData={formData} handleInputChange={handleInputChange} />
        )}
        {step === 2 && (
          <Step2 formData={formData} handleInputChange={handleInputChange} />
        )}
        {step === 3 && (
          <Step3 formData={formData} handleInputChange={handleInputChange} />
        )}
        {step === 4 && (
          <Step4 formData={formData} handleInputChange={handleInputChange} />
        )}
        {step === 5 && (
          <Step5 formData={formData} handleInputChange={handleInputChange} />
        )}
        <div className="flex  gap-2  py-2 justify-end px-10">
          <div
            onClick={handlePrev}
            className="py-2 px-10 bg-gray-400 rounded-md"
          >
            cancel
          </div>
          <div
            onClick={handleNext}
            className="py-2 px-10 bg-[#FFCD21] rounded-md"
          >
            next
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Apllication;
