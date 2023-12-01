import React, { useEffect, useRef } from "react";

const EnquiryForm = ({ onClose }) => {
  const modalRef = useRef();

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener when the modal is open
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove event listener when the modal is closed
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="absolute  w-full h-full bg-black/60 flex flex-col justify-center items-center">
      <div
        ref={modalRef}
        className="w-[70%]  bg-white  rounded-md flex flex-col gapy-4 p-10 "
      >
        <h1 className="text-[30px] font-[600]">Enquiry form</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h1>Full name</h1>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Your City</h1>
            <input
              type="text"
              placeholder="Enter your City"
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Email</h1>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Preferred Destination</h1>
            <input
              type="text"
              placeholder="Enter Preferred Destination"
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Phone number</h1>
            <input
              type="text"
              placeholder="Enter PHone number"
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Are you looking for which service?</h1>
            <input
              type="text"
              placeholder="Enter service"
              className="border border-gray-300 p-3 rounded-lg"
            />
          </div>
        </div>
        <div className="mx-auto mt-4 w-1/2">
          <button className="p-4 flex w-full justify-center items-center text-center text-white bg-[#FFA800] rounded-md">
            Send{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
