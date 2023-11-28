import React from "react";
import LinkComponent from "../components/LinkComponet";
import Navbar from "../components/Navbar";
import notfoundPic from "../assets/notfound.png";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <LinkComponent />
      <Navbar />
      {/* not found */}
      <div className="w-full max-w-7xl px-[20px] md:px-20 lg:px-40 flex items-center justify-center py-[18vh]">
        <img src={notfoundPic} alt="" />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
