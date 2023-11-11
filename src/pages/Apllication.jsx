import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";

import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
const Apllication = () => {
  const [step, setStep] = useState(1);
  const [filesImage, setFilesImage] = useState({
    stage1: {
      passport: "",
      diploma: "",
      transcript: "",
    },
  });
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
    stage4: {
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
    stage5: {
      diploma: "",
      passport: "",
      transcript: "",
    },
  });

  const metadata = {
    contentDisposition: "attachment", // This instructs the browser to prompt for download
  };
  const handleInputChange = (stage, inputName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [stage]: {
        ...prevData[stage],
        [inputName]: value,
      },
    }));
  };
  const filesInputHandel = (stage, inputName, value) => {
    setFilesImage((prevData) => ({
      ...prevData,
      [stage]: {
        ...prevData[stage],
        [inputName]: value,
      },
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      filesImage.stage1.diploma !== "" &&
      filesImage.stage1.passport &&
      filesImage.stage1.transcript
    ) {
      try {
        const diplomaStorageRef = ref(storage, "diplomas");
        await uploadBytes(
          diplomaStorageRef,
          filesImage.stage1.diploma,
          metadata
        );
        const diplomaUrl = await getDownloadURL(diplomaStorageRef);
        // Upload passport file
        const passportStorageRef = ref(storage, "passports");
        await uploadBytes(
          passportStorageRef,
          filesImage.stage1.passport,
          metadata
        );
        const passportUrl = await getDownloadURL(passportStorageRef);

        const transcriptStorageRef = ref(storage, "transcripts");
        await uploadBytes(
          transcriptStorageRef,
          filesImage.stage1.transcript,
          metadata
        );
        const transcriptUrl = await getDownloadURL(transcriptStorageRef);

        setFormData((prevData) => ({
          ...prevData,
          stage5: {
            diploma: diplomaUrl,
            passport: passportUrl,
            transcript: transcriptUrl,
          },
        }));

        if (diplomaUrl && passportUrl && transcriptUrl) {
          const docRef = await addDoc(collection(db, "formData"), formData);
          console.log("Document written with ID:", docRef.id);
        }
      } catch (error) {
        console.error("Error adding document:", error);
      }
    } else {
      alert("all files are required");
    }
  };
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleNext = () => {
    if (step == 1) {
      if (
        formData.stage1.firstName !== "" &&
        formData.stage1.lastName !== "" &&
        formData.stage1.dateOfBirth !== "" &&
        formData.stage1.placeOfBirth !== "" &&
        formData.stage1.nationality !== "" &&
        formData.stage1.sex !== "" &&
        formData.stage1.firstLaguage !== ""
      ) {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert("all filed are required");
      }
    } else if (step == 2) {
      if (
        formData.stage2.passportNumber !== "" &&
        formData.stage2.passportIssuedBy !== "" &&
        formData.stage2.passportExpiryDate !== "" &&
        formData.stage2.ValidTo !== "" &&
        formData.stage2.country !== "" &&
        formData.stage2.district !== "" &&
        formData.stage2.streetNumber !== "" &&
        formData.stage2.contactNumber !== "" &&
        formData.stage2.email !== ""
      ) {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert("all filed are required");
      }
    } else if (step == 3) {
      if (
        formData.stage3.fatherName !== "" &&
        formData.stage3.fatherContact !== "" &&
        formData.stage3.motherName !== "" &&
        formData.stage3.motherContact !== "" &&
        formData.stage3.emrgencyName !== "" &&
        formData.stage3.relationship !== "" &&
        formData.stage3.emargencyContact !== "" &&
        formData.stage3.contactNumber !== "" &&
        formData.stage3.emrgencyEmail !== ""
      ) {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert("all filed are required");
      }
    } else if (step == 4) {
      if (
        formData.stage4.countryOfPrevSchool !== "" &&
        formData.stage4.namePfPrevSchool !== "" &&
        formData.stage4.levelOfEducation !== "" &&
        formData.stage4.graduationDate !== "" &&
        formData.stage4.primaryLaguage !== "" &&
        formData.stage4.schoolFrom !== "" &&
        formData.stage4.schoolTo !== "" &&
        formData.stage4.degreeName !== "" &&
        formData.stage4.IHaveFromThiSschool !== ""
      ) {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert("all filed are required");
      }
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
          <Step5 filesImage={filesImage} filesInputHandel={filesInputHandel} />
        )}
        <div className="flex  gap-2  py-2 justify-end px-10">
          {step > 1 && (
            <div
              onClick={handlePrev}
              className="py-2 px-10 bg-gray-400 rounded-md"
            >
              Back
            </div>
          )}
          {step < 5 && (
            <div
              onClick={handleNext}
              className="py-2 px-10 bg-[#FFCD21] rounded-md"
            >
              next
            </div>
          )}
          {step == 5 && (
            <button
              className="py-2 px-10 bg-[#FFCD21] rounded-md"
              type="submit"
            >
              submit
            </button>
          )}
        </div>

        <button
          onClick={() =>
            handleDownload(
              "https://firebasestorage.googleapis.com/v0/b/brightforth-34e5d.appspot.com/o/transcripts?alt=media&token=2e4e4bba-ae0e-43c9-804f-29f37d00902a",
              "Ngabo.pdf"
            )
          }
        >
          Download Transcript
        </button>
      </form>
    </div>
  );
};

export default Apllication;
