import React, { useState } from "react";
import Ass1 from "../components/assessement/Ass1";
import Ass2 from "../components/assessement/Ass2";
import Ass3 from "../components/assessement/Ass3";
import Ass4 from "../components/assessement/Ass4";
import Asss5 from "../components/assessement/Asss5";

const Assessment = () => {
  const [step, setStep] = useState(5);
  const [formData, setFormData] = useState({
    personInfo: {
      firstName: "",
      middelName: "",
      lastName: "",
      dateOfBirth: "",
      placeOfBirth: "",
      nationality: "",
      sex: "",
      firstLaguage: "",
    },
    educationProgram: {
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
    cannadian: {
      fatherName: "",
      fatherContact: "",
      motherName: "",
      motherContact: "",
      emrgencyName: "",
      relationship: "",
      emargencyContact: "",
      emrgencyEmail: "",
    },
    other: {
      countryOfPrevSchool: "",
      namePfPrevSchool: "",
      levelOfEducation: "",
      graduationDate: "",
      primaryLaguage: "",
      schoolFrom: "",
      schoolTo: "",
      degreeName: "",
      IHaveFromThiSschool: "",
    },
    backgroundInfo: {
      diploma: "",
      passport: "",
      transcript: "",
    },
  });
  return (
    <div className="flex flex-col px-40">
      <form action="">
        {step === 1 && <Ass1 />}
        {step === 2 && <Ass2 />}
        {step === 3 && <Ass3 />}
        {step === 4 && <Ass4 />}
        {step === 5 && <Asss5 />}
      </form>
    </div>
  );
};

export default Assessment;
