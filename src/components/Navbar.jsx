import React from "react";
import logo from "../assets/logo.svg";
import "./dropdown.css";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[10px] md:px-[100px] py-2 itens-center">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-[20vh]" />
      </div>
      <div className="links flex gap-[102px] items-center mt-2">
        <ul className="hidden md:flex text-black font-[100] text-[12px]  gap-4  items-center">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about us">ABOUT US</a>
          </li>
          <li>
            <a href="/" className=" flex gap-1 items-center">
              <span>TEST COACHING</span>{" "}
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
            <ul>
              <li>
                <a href="">heee</a>
              </li>
              <li>
                <a href="">heee</a>
              </li>
              <li>
                <a href="">heee</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/" className=" flex gap-1 items-center">
              <span>COUNTRIES</span>{" "}
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="/" className=" flex gap-1 items-center">
              <span>SERVICES</span>{" "}
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.62799 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="/">EVENTS</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.80589 17.296C13.9428 17.296 17.2964 13.9424 17.2964 9.80553C17.2964 5.66866 13.9428 2.31506 9.80589 2.31506C5.66902 2.31506 2.31543 5.66866 2.31543 9.80553C2.31543 13.9424 5.66902 17.296 9.80589 17.296Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.0156 15.4043L17.9523 18.3334"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
