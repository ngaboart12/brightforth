import React, { useRef } from "react";
import Hero from "../components/home/Hero";
import aboutus from "../assets/aboutus.svg";
import chooseus from "../assets/chooseus.svg";
import contract from "../assets/contract.svg";
import book from "../assets/book.svg";
import answer from "../assets/answer.svg";
import logo2 from "../assets/logo2.svg";
import up1 from "../assets/up1.png";
import up2 from "../assets/up2.png";
import up3 from "../assets/up3.png";
import dp1 from "../assets/dp1.svg";
import dp2 from "../assets/dp2.svg";
import dp3 from "../assets/dp3.svg";
import dp4 from "../assets/dp4.svg";
import dp5 from "../assets/dp5.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Home = () => {
  const countries = [
    { name: "USA", imageSrc: up1 },
    { name: "CANADA", imageSrc: up2 },
    { name: "CHINA", imageSrc: up3 },
    { name: "POLAND", imageSrc: up3 },
    // Add more countries as needed
  ];
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const swiperOptions = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: false, // Disable default navigation
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

      // Add more breakpoints as needed
    },
  };
  const services = [
    {
      name: "Sop and Essay Guidance",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.5145 3.33334C31.7545 3.33334 35.2745 6.92168 35.2745 12.2617V27.5883C35.2745 32.975 31.8628 36.4783 26.5828 36.5117L13.7612 36.5167C8.52118 36.5167 4.99951 32.9283 4.99951 27.5883V12.2617C4.99951 6.87334 8.41118 3.37168 13.6912 3.34001L26.5128 3.33334H26.5145ZM26.5145 5.83334L13.6995 5.84001C9.81951 5.86334 7.49951 8.26334 7.49951 12.2617V27.5883C7.49951 31.6133 9.84118 34.0167 13.7595 34.0167L26.5745 34.0117C30.4545 33.9883 32.7745 31.585 32.7745 27.5883V12.2617C32.7745 8.23668 30.4345 5.83334 26.5145 5.83334Z"
            fill="#94C7FE"
          />
          <path
            d="M28.225 27.3383C28.225 26.6483 27.665 26.0883 26.975 26.0883H14.9417C14.2517 26.0883 13.6917 26.6483 13.6917 27.3383C13.6917 28.0283 14.2517 28.5883 14.9417 28.5883H26.975C27.665 28.5883 28.225 28.0283 28.225 27.3383Z"
            fill="#FFA800"
          />
          <path
            d="M28.225 20.3608C28.225 19.6708 27.665 19.1108 26.975 19.1108H14.9417C14.2517 19.1108 13.6917 19.6708 13.6917 20.3608C13.6917 21.0508 14.2517 21.6108 14.9417 21.6108H26.975C27.665 21.6108 28.225 21.0508 28.225 20.3608Z"
            fill="#FFA800"
          />
          <path
            d="M20.7828 13.3995C20.7828 12.7095 20.2228 12.1495 19.5328 12.1495H14.9412C14.2512 12.1495 13.6912 12.7095 13.6912 13.3995C13.6912 14.0895 14.2512 14.6495 14.9412 14.6495H19.5328C20.2228 14.6495 20.7828 14.0895 20.7828 13.3995Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
    {
      name: "Visa Guidance",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.0002 2.08334C10.1051 2.08334 2.0835 10.1049 2.0835 20C2.0835 29.8952 10.1051 37.9167 20.0002 37.9167C29.8953 37.9167 37.9168 29.8952 37.9168 20C37.9168 10.1049 29.8953 2.08334 20.0002 2.08334ZM4.5835 20C4.5835 16.1928 5.96356 12.7079 8.25073 10.0183L13.5882 15.3558C12.6416 16.6603 12.0835 18.265 12.0835 20C12.0835 21.735 12.6416 23.3397 13.5882 24.6442L8.25071 29.9817C5.96356 27.2922 4.5835 23.8072 4.5835 20ZM15.3559 13.588L10.0185 8.25058C12.7081 5.96341 16.1929 4.58334 20.0002 4.58334C23.8073 4.58334 27.2923 5.96341 29.9818 8.25058L24.6443 13.588C23.3398 12.6415 21.7352 12.0833 20.0002 12.0833C18.2652 12.0833 16.6605 12.6415 15.3559 13.588ZM10.0185 31.7495C12.7081 34.0367 16.1929 35.4167 20.0002 35.4167C23.8073 35.4167 27.2923 34.0367 29.9818 31.7495L24.6443 26.412C23.3398 27.3585 21.7352 27.9167 20.0002 27.9167C18.2652 27.9167 16.6605 27.3585 15.3559 26.412L10.0185 31.7495ZM26.4122 24.6442L31.7497 29.9817C34.0368 27.2922 35.4168 23.8072 35.4168 20C35.4168 16.1928 34.0368 12.7079 31.7497 10.0183L26.4122 15.3558C27.3587 16.6603 27.9168 18.265 27.9168 20C27.9168 21.735 27.3587 23.3397 26.4122 24.6442ZM14.5835 20C14.5835 17.0085 17.0087 14.5833 20.0002 14.5833C22.9917 14.5833 25.4168 17.0085 25.4168 20C25.4168 22.9915 22.9917 25.4167 20.0002 25.4167C17.0087 25.4167 14.5835 22.9915 14.5835 20Z"
            fill="#94C7FE"
          />
          <path
            d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20ZM14.5268 20C14.5268 23.0227 16.9773 25.4732 20 25.4732C23.0227 25.4732 25.4732 23.0227 25.4732 20C25.4732 16.9773 23.0227 14.5268 20 14.5268C16.9773 14.5268 14.5268 16.9773 14.5268 20Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
    {
      name: "Courses Selection",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.242 2.08334H26.7583C29.0377 2.08331 30.8748 2.08328 32.3198 2.27754C33.82 2.47924 35.083 2.91073 36.0863 3.91393C37.0895 4.91713 37.521 6.18024 37.7227 7.68043C37.9168 9.12538 37.9168 10.9626 37.9168 13.2419V20.0915C37.9168 22.3708 37.9168 24.208 37.7227 25.653C37.521 27.1532 37.0895 28.4162 36.0863 29.4193C35.2563 30.2493 34.245 30.691 33.0603 30.9322C32.4567 31.0552 31.7875 31.1298 31.0505 31.1755C31.0542 31.184 31.058 31.1925 31.0617 31.2012C31.5165 32.2683 31.1283 33.5098 30.0952 34.0953C29.7847 34.2715 29.4505 34.3348 29.217 34.3712C28.9728 34.409 28.6678 34.4388 28.3292 34.472L28.2962 34.4752C28.0782 34.4965 27.9545 34.5088 27.8627 34.522C27.8208 34.528 27.7987 34.5323 27.79 34.5343C27.764 34.5445 27.7463 34.5572 27.735 34.568C27.7265 34.5762 27.7203 34.5843 27.7158 34.5928C27.7138 34.6022 27.711 34.6173 27.7075 34.6398C27.6945 34.7237 27.682 34.8383 27.6597 35.0487L27.656 35.083C27.6217 35.4053 27.5902 35.7017 27.5498 35.9402C27.5112 36.17 27.4415 36.509 27.2478 36.823C26.624 37.8343 25.379 38.1472 24.3545 37.7458C24.0348 37.6205 23.7782 37.4163 23.593 37.2572C23.4033 37.0942 23.1798 36.8798 22.9297 36.64L20.0002 33.8315L17.0708 36.64C16.8205 36.8798 16.597 37.0942 16.4073 37.2572C16.2222 37.4163 15.9656 37.6205 15.6458 37.7458C14.6213 38.1472 13.3763 37.8343 12.7525 36.823C12.5589 36.509 12.4892 36.17 12.4505 35.9402C12.4102 35.7017 12.3787 35.4052 12.3443 35.0828L12.3407 35.0487C12.3183 34.8383 12.3058 34.7237 12.2927 34.6398C12.2893 34.6173 12.2865 34.6022 12.2846 34.5928C12.28 34.5843 12.2737 34.5762 12.2653 34.568C12.2539 34.5572 12.2364 34.5445 12.2104 34.5343C12.2016 34.5323 12.1795 34.528 12.1377 34.522C12.0458 34.5088 11.9221 34.4965 11.7042 34.4752L11.6712 34.472C11.3325 34.4388 11.0274 34.409 10.7834 34.3712C10.5498 34.3348 10.2157 34.2715 9.90513 34.0953C8.87195 33.5098 8.48381 32.2683 8.93868 31.2012C8.94236 31.1925 8.94611 31.184 8.94991 31.1753C8.28546 31.1342 7.67873 31.0697 7.12741 30.9685C5.8641 30.7363 4.78896 30.2943 3.91408 29.4195C2.91088 28.4162 2.4794 27.1532 2.2777 25.653C2.08343 24.208 2.08346 22.3708 2.0835 20.0915V13.2419C2.08346 10.9626 2.08343 9.12538 2.2777 7.68043C2.4794 6.18024 2.91088 4.91713 3.91408 3.91393C4.91728 2.91073 6.1804 2.47924 7.68058 2.27754C9.12553 2.08328 10.9627 2.08331 13.242 2.08334ZM11.2217 28.7437L12.5813 27.4402L13.7633 26.2582C13.9737 22.9968 16.6857 20.4167 20.0002 20.4167C23.3147 20.4167 26.0267 22.9968 26.237 26.2582L27.419 27.4402L28.8538 28.8157L28.853 28.743C30.4975 28.7255 31.6697 28.664 32.5615 28.4825C33.419 28.3078 33.9318 28.0382 34.3185 27.6517C34.7798 27.1903 35.0805 26.5428 35.245 25.3198C35.4142 24.0608 35.4168 22.3923 35.4168 20V13.3333C35.4168 10.941 35.4142 9.27246 35.245 8.01354C35.0805 6.79059 34.7798 6.14296 34.3185 5.68169C33.8572 5.22043 33.2097 4.91968 31.9867 4.75526C30.7277 4.58599 29.0592 4.58334 26.6668 4.58334H13.3335C10.9411 4.58334 9.27261 4.58599 8.0137 4.75526C6.79075 4.91968 6.14311 5.22043 5.68185 5.68169C5.22058 6.14296 4.91983 6.79059 4.75541 8.01354C4.58615 9.27246 4.5835 10.941 4.5835 13.3333V20C4.5835 22.3923 4.58615 24.0608 4.75541 25.3198C4.91983 26.5428 5.22058 27.1903 5.68185 27.6517C6.0876 28.0573 6.6344 28.336 7.57908 28.5095C8.47638 28.6743 9.63453 28.728 11.2217 28.7437ZM25.6933 29.2492C25.0158 30.7407 23.7692 31.9188 22.2308 32.5068L24.6367 34.8133C24.85 35.0178 25.0017 35.1628 25.12 35.2703C25.1352 35.144 25.1522 34.9865 25.1737 34.7837C25.1767 34.7562 25.1795 34.728 25.1825 34.6995C25.2143 34.3933 25.252 34.0308 25.3783 33.7035C25.6583 32.9785 26.2417 32.4308 26.961 32.1757C27.2848 32.0607 27.6433 32.0263 27.966 31.9955C27.995 31.9927 28.024 31.9898 28.0525 31.987C28.2315 31.9695 28.378 31.9552 28.5002 31.942C28.4052 31.849 28.2885 31.7372 28.143 31.5977L25.6933 29.2492ZM20.0503 30.4163L20.0002 30.3682L19.95 30.4163C17.902 30.3895 16.2502 28.721 16.2502 26.6667C16.2502 24.5957 17.9292 22.9167 20.0002 22.9167C22.0712 22.9167 23.7502 24.5957 23.7502 26.6667C23.7502 28.721 22.0983 30.3895 20.0503 30.4163ZM17.7695 32.5068L15.3636 34.8133C15.1503 35.0178 14.9987 35.1628 14.8804 35.2703C14.8652 35.144 14.8482 34.9865 14.8266 34.7837C14.8237 34.7562 14.8208 34.728 14.8178 34.6995C14.786 34.3933 14.7484 34.0308 14.622 33.7035C14.342 32.9785 13.7586 32.4308 13.0394 32.1757C12.7155 32.0607 12.357 32.0263 12.0344 31.9955C12.0052 31.9927 11.9764 31.9898 11.9479 31.987C11.7688 31.9695 11.6224 31.9552 11.5002 31.942C11.5952 31.849 11.7117 31.7372 11.8573 31.5977L14.3069 29.2492C14.9846 30.7407 16.2311 31.9188 17.7695 32.5068Z"
            fill="#94C7FE"
          />
          <path
            d="M14.6337 8.66667C13.9433 8.66667 13.3837 9.22632 13.3837 9.91667C13.3837 10.607 13.9433 11.1667 14.6337 11.1667H24.6337C25.324 11.1667 25.8837 10.607 25.8837 9.91667C25.8837 9.22632 25.324 8.66667 24.6337 8.66667H14.6337Z"
            fill="#FFA800"
          />
          <path
            d="M11.3003 14.5C10.61 14.5 10.0503 15.0597 10.0503 15.75C10.0503 16.4404 10.61 17 11.3003 17H27.967C28.6573 17 29.217 16.4404 29.217 15.75C29.217 15.0597 28.6573 14.5 27.967 14.5H11.3003Z"
            fill="#FFA800"
          />
          <path
            d="M26 26.5C26 30.0899 23.0899 33 19.5 33C15.9101 33 13 30.0899 13 26.5C13 22.9101 15.9101 20 19.5 20C23.0899 20 26 22.9101 26 26.5ZM15.865 26.5C15.865 28.5075 17.4925 30.135 19.5 30.135C21.5075 30.135 23.135 28.5075 23.135 26.5C23.135 24.4925 21.5075 22.865 19.5 22.865C17.4925 22.865 15.865 24.4925 15.865 26.5Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
    {
      name: "Career Guidance",
      svg: (
        <svg
          width="50"
          height="49"
          viewBox="0 0 50 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.8748 12.7604C15.774 12.7604 13.2603 15.2742 13.2603 18.375C13.2603 21.4759 15.774 23.9896 18.8748 23.9896C21.9757 23.9896 24.4894 21.4759 24.4894 18.375C24.4894 15.2742 21.9757 12.7604 18.8748 12.7604ZM16.3228 18.375C16.3228 16.9656 17.4654 15.8229 18.8748 15.8229C20.2843 15.8229 21.4269 16.9656 21.4269 18.375C21.4269 19.7845 20.2843 20.9271 18.8748 20.9271C17.4654 20.9271 16.3228 19.7845 16.3228 18.375Z"
            fill="#FFA800"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.8752 25.0104C16.4339 25.0104 14.148 25.5019 12.4157 26.3681C10.7751 27.1885 9.17731 28.605 9.17731 30.625L9.17704 30.7526C9.17392 31.7945 9.16865 33.5491 10.8315 34.7529C11.6032 35.3113 12.6214 35.6675 13.8827 35.8946C15.1557 36.1236 16.787 36.2396 18.8752 36.2396C20.9634 36.2396 22.5947 36.1236 23.8677 35.8946C25.1291 35.6675 26.1472 35.3113 26.919 34.7529C28.5817 33.5491 28.5766 31.7945 28.5733 30.7526L28.5731 30.625C28.5731 28.605 26.9753 27.1885 25.3346 26.3681C23.6025 25.5019 21.3166 25.0104 18.8752 25.0104ZM12.2398 30.625C12.2398 30.3898 12.4702 29.7649 13.7853 29.1072C15.0088 28.4956 16.8062 28.0729 18.8752 28.0729C20.9442 28.0729 22.7415 28.4956 23.9651 29.1072C25.2801 29.7649 25.5106 30.3898 25.5106 30.625C25.5106 31.8592 25.432 32.0485 25.1231 32.272C24.874 32.4523 24.361 32.694 23.3254 32.8804C22.3015 33.0646 20.8704 33.1771 18.8752 33.1771C16.8801 33.1771 15.4489 33.0646 14.425 32.8804C13.3895 32.694 12.8764 32.4523 12.6273 32.272C12.3184 32.0485 12.2398 31.8592 12.2398 30.625Z"
            fill="#FFA800"
          />
          <path
            d="M39.2917 26.0312C40.1373 26.0312 40.8229 25.3457 40.8229 24.5C40.8229 23.6543 40.1373 22.9688 39.2917 22.9688H31.125C30.2793 22.9688 29.5938 23.6543 29.5938 24.5C29.5938 25.3457 30.2793 26.0312 31.125 26.0312H39.2917Z"
            fill="#FFA800"
          />
          <path
            d="M40.8231 18.375C40.8231 19.2207 40.1375 19.9062 39.2918 19.9062H29.0835C28.2378 19.9062 27.5522 19.2207 27.5522 18.375C27.5522 17.5293 28.2378 16.8438 29.0835 16.8438H39.2918C40.1375 16.8438 40.8231 17.5293 40.8231 18.375Z"
            fill="#FFA800"
          />
          <path
            d="M39.2915 32.1562C40.1372 32.1562 40.8228 31.4707 40.8228 30.625C40.8228 29.7793 40.1372 29.0938 39.2915 29.0938H33.1665C32.3208 29.0938 31.6353 29.7793 31.6353 30.625C31.6353 31.4707 32.3208 32.1562 33.1665 32.1562H39.2915Z"
            fill="#FFA800"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8016 6.63544H29.1986C32.9508 6.6354 35.9227 6.63538 38.2485 6.9481C40.6422 7.26991 42.5797 7.94798 44.1077 9.47589C45.6355 11.0038 46.3135 12.9412 46.6355 15.3349C46.9481 17.6608 46.9481 20.6327 46.9481 24.3847V24.6152C46.9481 28.3673 46.9481 31.3392 46.6355 33.6651C46.3135 36.0587 45.6355 37.9963 44.1077 39.5242C42.5797 41.052 40.6422 41.7301 38.2485 42.052C35.9227 42.3646 32.9508 42.3646 29.1988 42.3646H20.8017C17.0496 42.3646 14.0776 42.3646 11.7517 42.052C9.35806 41.7301 7.42062 41.052 5.89269 39.5242C4.36479 37.9963 3.68672 36.0587 3.36491 33.6651C3.05219 31.3392 3.05221 28.3673 3.05225 24.6152V24.3849C3.05221 20.6327 3.05219 17.6608 3.36491 15.3349C3.68672 12.9412 4.36479 11.0038 5.89269 9.47589C7.42062 7.94798 9.35806 7.26991 11.7517 6.9481C14.0776 6.63538 17.0496 6.6354 20.8016 6.63544ZM12.1598 9.98328C10.1057 10.2595 8.92226 10.7773 8.05821 11.6414C7.19416 12.5055 6.67627 13.6889 6.40009 15.743C6.11799 17.8411 6.11475 20.607 6.11475 24.5C6.11475 28.3931 6.11799 31.1589 6.40009 33.2571C6.67627 35.3111 7.19416 36.4946 8.05821 37.3586C8.92226 38.2227 10.1057 38.7407 12.1598 39.0167C14.258 39.2988 17.0237 39.3021 20.9168 39.3021H29.0835C32.9765 39.3021 35.7424 39.2988 37.8406 39.0167C39.8945 38.7407 41.0781 38.2227 41.9421 37.3586C42.8061 36.4946 43.3241 35.3111 43.6002 33.2571C43.8823 31.1589 43.8856 28.3931 43.8856 24.5C43.8856 20.607 43.8823 17.8411 43.6002 15.743C43.3241 13.6889 42.8061 12.5055 41.9421 11.6414C41.0781 10.7773 39.8945 10.2595 37.8406 9.98328C35.7424 9.70118 32.9765 9.69794 29.0835 9.69794H20.9168C17.0237 9.69794 14.258 9.70118 12.1598 9.98328Z"
            fill="#94C7FE"
          />
        </svg>
      ),
    },
    {
      name: "Admissions",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.4165 16.9055C5.4165 8.74043 11.9249 2.08331 19.9998 2.08331C28.0748 2.08331 34.5832 8.74043 34.5832 16.9055C34.5832 20.8473 33.4598 25.0798 31.4738 28.7365C29.4905 32.3885 26.5925 35.562 22.9673 37.2565C21.0842 38.1366 18.9155 38.1366 17.0323 37.2565C13.4071 35.562 10.5092 32.3885 8.52577 28.7365C6.53989 25.0798 5.4165 20.8473 5.4165 16.9055ZM19.9998 4.58331C13.3472 4.58331 7.9165 10.0791 7.9165 16.9055C7.9165 20.4006 8.92089 24.2256 10.7227 27.5433C12.5269 30.8653 15.0765 33.5826 18.0908 34.9916C19.3033 35.5583 20.6963 35.5583 21.9088 34.9916C24.9232 33.5826 27.4728 30.8653 29.277 27.5433C31.0788 24.2256 32.0832 20.4006 32.0832 16.9055C32.0832 10.0791 26.6525 4.58331 19.9998 4.58331Z"
            fill="#94C7FE"
          />
          <path
            d="M21.8057 11.303C20.6997 10.899 19.4668 10.899 18.361 11.303L14.4579 12.7289C13.5561 13.0583 13 13.8624 13 14.75C13 15.6376 13.5561 16.4417 14.4579 16.7711L14.6667 16.8474V20.917C14.6667 22.0387 15.3233 23.1312 16.4678 23.5535C17.343 23.8765 18.785 24.3333 20.0833 24.3333C21.3817 24.3333 22.8237 23.8765 23.6988 23.5535C24.8433 23.1312 25.5 22.0387 25.5 20.917V16.8474L25.7088 16.7711C26.6105 16.4417 27.1667 15.6376 27.1667 14.75C27.1667 13.8624 26.6105 13.0583 25.7088 12.7289L21.8057 11.303Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
    {
      name: "Appointment booking",
      svg: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.0553 3.70557L30.1772 3.73826C32.1928 4.27831 33.79 4.70626 35.0462 5.16008C36.3314 5.6243 37.3793 6.15533 38.2426 6.96388C39.4996 8.14127 40.3794 9.66497 40.7704 11.3423C41.039 12.4942 40.975 13.6673 40.7345 15.0123C40.4993 16.3272 40.0714 17.9245 39.5313 19.9401L38.5495 23.6036C38.0096 25.619 37.5815 27.2162 37.1278 28.4726C36.6636 29.7576 36.1325 30.8055 35.324 31.6688C34.184 32.8858 32.7195 33.7493 31.1051 34.158C30.6336 35.2391 29.9448 36.2183 29.076 37.0321C28.2126 37.8406 27.1647 38.3715 25.8795 38.8359C24.6233 39.2896 23.0261 39.7175 21.0108 40.2576L20.8888 40.2903C18.8733 40.8304 17.276 41.2583 15.9611 41.4935C14.6161 41.734 13.443 41.798 12.2911 41.5294C10.6138 41.1384 9.09009 40.2586 7.91271 39.0016C7.10415 38.1383 6.57311 37.0904 6.10891 35.8054C5.65508 34.549 5.22711 32.9518 4.68707 30.9362L3.70541 27.2727C3.16534 25.2571 2.73737 23.6599 2.50225 22.3451C2.26173 21.0001 2.19766 19.827 2.46624 18.6751C2.85734 16.9978 3.73707 15.4741 4.99415 14.2967C5.85743 13.4881 6.90534 12.9571 8.1904 12.4929C9.44669 12.039 11.0439 11.6111 13.0594 11.071L13.1204 11.0547C13.6052 10.9248 14.064 10.8021 14.4983 10.6873C15.2162 8.12226 15.8481 6.309 17.0794 4.99433C18.2567 3.73725 19.7804 2.85753 21.4577 2.46642C22.6098 2.19784 23.7828 2.26191 25.1277 2.50243C26.4426 2.73754 28.0398 3.16553 30.0553 3.70557ZM13.6674 13.7552C11.6638 14.2922 10.2281 14.6807 9.1247 15.0793C8.00743 15.4829 7.35141 15.8566 6.87401 16.3038C6.0139 17.1094 5.412 18.1519 5.14441 19.2995C4.99587 19.9366 5.0002 20.6916 5.20929 21.8611C5.42143 23.0472 5.81801 24.5319 6.37804 26.6219L7.32705 30.1637C7.88706 32.2537 8.2859 33.7376 8.69532 34.8709C9.09893 35.9884 9.47269 36.6443 9.91982 37.1217C10.7254 37.9817 11.768 38.5836 12.9156 38.8513C13.5526 38.9998 14.3076 38.9956 15.477 38.7864C16.6633 38.5743 18.1479 38.1777 20.2378 37.6176C22.3278 37.0576 23.8119 36.6588 24.9453 36.2494C26.0625 35.8457 26.7187 35.4721 27.1961 35.0249C27.4483 34.7886 27.6782 34.5321 27.8841 34.2586C27.5559 34.2122 27.2181 34.1532 26.8686 34.0837C25.637 33.8388 24.1575 33.4424 22.3313 32.9531L22.2261 32.9249C20.2105 32.3848 18.6133 31.9569 17.3571 31.5031C16.072 31.0387 15.0241 30.5078 14.1608 29.6993C12.9037 28.5219 12.024 26.9981 11.6329 25.3207C11.3643 24.1689 11.4284 22.9959 11.6689 21.6508C11.904 20.3359 12.332 18.7387 12.8721 16.7232L13.6674 13.7552ZM24.6437 5.20947C23.4742 5.00038 22.7192 4.99606 22.0823 5.14459C20.9347 5.41219 19.8921 6.01409 19.0865 6.8742C18.287 7.72785 17.7949 9.04664 16.9393 12.1793C16.8002 12.6884 16.6532 13.2371 16.4937 13.8323L15.5447 17.374C14.9847 19.464 14.5881 20.9486 14.376 22.135C14.1669 23.3043 14.1625 24.0592 14.3111 24.6963C14.5787 25.844 15.1806 26.8866 16.0407 27.6922C16.5181 28.1393 17.1741 28.5129 18.2914 28.9166C19.4247 29.326 20.9088 29.725 22.9988 30.2849C24.8787 30.7887 26.2721 31.1612 27.4049 31.3865C28.5329 31.6107 29.2983 31.6659 29.9257 31.5884C30.0621 31.5717 30.1932 31.5484 30.3212 31.5185C31.4688 31.2508 32.5113 30.649 33.3168 29.7889C33.764 29.3115 34.1378 28.6556 34.5413 27.5382C34.9509 26.4048 35.3496 24.9209 35.9097 22.8309L36.8586 19.2891C37.4187 17.1991 37.8153 15.7145 38.0274 14.5282C38.2366 13.3588 38.2408 12.6038 38.0923 11.9668C37.8246 10.8191 37.2227 9.77658 36.3627 8.97102C35.8853 8.52387 35.2292 8.1501 34.1119 7.7465C32.9786 7.33708 31.4945 6.93823 29.4045 6.37822C27.3145 5.8182 25.83 5.42161 24.6437 5.20947Z"
            fill="#94C7FE"
          />
          <path
            d="M23.1556 16.0472C22.4221 15.8506 21.668 16.2859 21.4715 17.0195C21.275 17.753 21.7102 18.5069 22.4437 18.7034L31.2982 21.0759C32.0317 21.2725 32.7855 20.8372 32.9821 20.1037C33.1786 19.3702 32.7434 18.6162 32.0099 18.4196L23.1556 16.0472Z"
            fill="#FFA800"
          />
          <path
            d="M21.7313 21.3597C20.9978 21.163 20.2439 21.5984 20.0472 22.332C19.8506 23.0655 20.2861 23.8193 21.0196 24.0159L26.3322 25.4395C27.0657 25.636 27.8196 25.2008 28.0161 24.4672C28.2127 23.7337 27.7774 22.9797 27.0439 22.7831L21.7313 21.3597Z"
            fill="#FFA800"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  w-full  ">
      <Hero />

      {/* services offer */}
      <div className="flex flex-col gap-5 pt-[83px] items-center">
        <h1 className="max-w-[377px] text-[#07294D] font-extrabold text-[32px] text-center leading-[30px]">
          Our Services We Offer toThe Students
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[40px] md:gap-x-[120px] gap-y-6">
          {services.map((item, index) => {
            return (
              <div className="flex flex-col gap-2 items-center">
                {item.svg}
                <span className="text-[18px] text-black  max-w-[160px] text-center leading-[20px]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* apply and make apo */}
      <div className=" flex  justify-center items-center py-20 w-full px-2 md:px-20">
        <div className="flex max-w-7xl w-full flex-col md:flex-row md:justify-between gap-10 bg-[#07294D] rounded-[24px] py-12 px-3 md:p-20">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="text-[#FFA800] text-[24px] font-normal text-center md:text-start leading-6">
              Apply for january intake 2024
            </h1>
            <p className="text-white max-w-[350px] text-center md:text-start font-extralight">
              Admissions are opened for January, February and March Intake 2024
            </p>
            <a
              href="/"
              className="py-[12px] px-[24px] bg-[#FFA800] hover:bg-[#FFA800]/80 w-[150px]  flex justify-center text-black font-light rounded-full"
            >
              Apply now
            </a>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="text-[#FFA800] text-[24px] font-normal text-center md:text-start">
              Make Appoitment
            </h1>
            <p className="text-white max-w-[350px] text-center md:text-start font-extralight">
              Make Appointment Our Team will back to you soon
            </p>
            <a
              href="/"
              className="py-[12px] px-[24px] bg-[#FFA800] hover:bg-[#FFA800]/80 w-[150px]  flex justify-center text-black font-light rounded-full"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* abou us  */}

      <div className="max-w-7xl flex flex-col gap-10 md:flex-row md:justify-between py-14  w-full">
        <div className="w-full md:w-1/2">
          <img
            src={aboutus}
            alt=""
            className="max-w-full max-h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-center md:items-start gap-4 md:gap-6 md:w-1/2 overflow-hidden">
          <h1 className=" border-l-4 border-[#FFA800] text-[#FFA800] px-4 text-[18px] font-bold">
            About us
          </h1>
          <span className="text-[#123E6C] text-[24px] md:text-[32px] font-bold text-center md:text-start leading-[30px]">
            Welcome to BrightForth
          </span>
          <p className="text-[#2F2E2E] text-center md:text-start font-light leading-4 max-w-[495px]">
            We are a rapidly growing foreign education consultancy in Rwanda
            that assists students in searching and applying to overseas
            universities through our extensive network since 2021. Our core
            activity lies in assisting students to make the right choice about
            pursuing education in overseas educational institutions.
          </p>
          <a
            href="#"
            className="py-[10px] px-[48px] bg-[#FFA800] rounded-lg text-[white]"
          >
            About us
          </a>
        </div>
      </div>

      {/* why choose us */}

      <div className="relative flex py-6 w-full h-full ">
        <div className=" absolute w-full h-full -z-10">
          <img src={chooseus} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full ml-auto pt-20 px-10 gap-14 flex flex-col md:w-1/2 ">
          <h1 className="text-[32px] font-bold text-white">Why choose us</h1>
          <div className="flex gap-4">
            <img src={contract} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] text-[#FFA800] font-bold">
                Success rate
              </h1>
              <p className="text-[18px] leading-4 text-white font-light max-w-[370px]">
                Our Team works to meet client requirement and make sure success
                of application process
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={answer} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] text-[#FFA800] font-bold">
                Free Assistance
              </h1>
              <p className="text-[18px] leading-4 text-white font-light max-w-[370px]">
                Get full free guidance for your study preference with Our team
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={book} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] text-[#FFA800] font-bold">
                Experience
              </h1>
              <p className="text-[18px] leading-4 text-white font-light max-w-[370px]">
                Our experience will help you step stones to success in overseas
                Education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* up comming events */}
      <div className="flex flex-col w-full max-w-7xl p-4 md:px-20 pt-20 gap-10 text-center sm:text-start">
        <h1 className="text-[#08305A] text-[40px] leading-[45px] font-bold text-center">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[32px] gap-y-10 w-full mt-10">
          <div className="flex flex-col gap-8 items-center sm:items-start">
            <div className="w-full">
              <img
                src={up1}
                alt=""
                className="object-cover w-full min-w-[200px]"
              />
            </div>
            <div className="flex flex-col gap-2 px-8">
              <p className="flex items-center gap-2">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.57715 8.33691H17.4304"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.7017 11.5916H13.7094"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0039 11.5916H10.0116"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.29834 11.5916H6.30606"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.7017 14.8303H13.7094"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0039 14.8303H10.0116"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.29834 14.8303H6.30606"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3696 2.16675V4.90906"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.6377 2.16675V4.90906"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5319 3.48267H6.4758C4.02856 3.48267 2.5 4.84594 2.5 7.35185V14.8932C2.5 17.4385 4.02856 18.8333 6.4758 18.8333H13.5242C15.9791 18.8333 17.5 17.4622 17.5 14.9563V7.35185C17.5077 4.84594 15.9868 3.48267 13.5319 3.48267Z"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-[#A5A5A5] text-[18px] font-light">
                  22 DEC 22
                </span>
              </p>
              <h1 className="text-[24px] text-[#123E6C] font-medium sm:font-bold leading-8">
                Applying for a student visa: Top 10 tips
              </h1>
              <p className="text-[18px] leading-[20px] font-light">
                Don’t feel prepared to apply for your student visa? Our
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center sm:items-start">
            <div className="w-full">
              <img
                src={up2}
                alt=""
                className="object-cover w-full min-w-[200px]"
              />
            </div>
            <div className="flex flex-col gap-2 px-8">
              <p className="flex items-center gap-2">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.57715 8.33691H17.4304"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.7017 11.5916H13.7094"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0039 11.5916H10.0116"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.29834 11.5916H6.30606"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.7017 14.8303H13.7094"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0039 14.8303H10.0116"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.29834 14.8303H6.30606"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3696 2.16675V4.90906"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.6377 2.16675V4.90906"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5319 3.48267H6.4758C4.02856 3.48267 2.5 4.84594 2.5 7.35185V14.8932C2.5 17.4385 4.02856 18.8333 6.4758 18.8333H13.5242C15.9791 18.8333 17.5 17.4622 17.5 14.9563V7.35185C17.5077 4.84594 15.9868 3.48267 13.5319 3.48267Z"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-[#A5A5A5] text-[18px] font-light">
                  22 DEC 22
                </span>
              </p>
              <h1 className="text-[24px] text-[#123E6C] font-medium sm:font-bold leading-8">
                Applying for a student visa: Top 10 tips
              </h1>
              <p className="text-[18px] leading-[20px] font-light">
                Don’t feel prepared to apply for your student visa? Our
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center sm:items-start">
            <div className="w-full">
              <img
                src={up3}
                alt=""
                className="object-cover w-full min-w-[200px]"
              />
            </div>
            <div className="flex flex-col gap-2 px-8">
              <p className="flex items-center gap-2">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.57715 8.33691H17.4304"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.7017 11.5916H13.7094"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0039 11.5916H10.0116"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.29834 11.5916H6.30606"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.7017 14.8303H13.7094"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0039 14.8303H10.0116"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.29834 14.8303H6.30606"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3696 2.16675V4.90906"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.6377 2.16675V4.90906"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5319 3.48267H6.4758C4.02856 3.48267 2.5 4.84594 2.5 7.35185V14.8932C2.5 17.4385 4.02856 18.8333 6.4758 18.8333H13.5242C15.9791 18.8333 17.5 17.4622 17.5 14.9563V7.35185C17.5077 4.84594 15.9868 3.48267 13.5319 3.48267Z"
                    stroke="#A5A5A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-[#A5A5A5] text-[18px] font-light">
                  22 DEC 22
                </span>
              </p>
              <h1 className="text-[24px] text-[#123E6C] font-medium sm:font-bold leading-8">
                Applying for a student visa: Top 10 tips
              </h1>
              <p className="text-[18px] leading-[20px] font-light">
                Don’t feel prepared to apply for your student visa? Our
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*top destination  */}

      <div className="max-w-7xl flex flex-col md:flex-row gap-4 w-full items-center py-40 px-[10px] md:px-20">
        <div className="flex flex-col gap-4  items-center">
          <h1 className="text-[32px] text-[#123E6C] font-[700] text-center md:text-start leading-8 ">
            OUR TOP DESTINATIONS
          </h1>
          <p className="text-center md:text-start text-[#707070] text-[18px] font-[300]  leading-4 ">
            Aave kusama kadena binance stacks telcoin bitcoin.{" "}
          </p>
          <a
            href="#"
            className="py-[16px] px-[31px] bg-[#FFA800] rounded-lg w-[200px] flex justify-center items-center"
          >
            Discover more
          </a>
        </div>
        <div className="w-full relative">
          <Swiper ref={swiperRef} {...swiperOptions}>
            {countries.map((country, index) => (
              <SwiperSlide key={index} className="w-[200px] h-[300px] py-4">
                <div className="flex flex-col items-center  w-[200px] h-[250px]">
                  <img
                    src={country.imageSrc}
                    alt={`Flag of ${country.name}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <p className="mt-2 text-lg font-semibold">{country.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* what you say about us */}
      <div className="relative  flex flex-col items-center   gap-4 md:gap-16  bg-[#07294D] -z-20 w-full">
        <div className="max-w-7xl flex flex-col gap-4 md:gap-10 relative w-full   py-[20px] px-[20px] md:py-[100px] md:px-[104px]">
          <h1 className="text-[24px] text-[#FFA800] text-center  font-bold">
            What you say about us
          </h1>
          {/* svg gsgsg */}
          <div className="absolute -z-10 left-10">
            <svg
              width="178"
              height="198"
              viewBox="0 0 178 198"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.0837 0L0 29.9358L23.5004 38.8907V48.4477C23.1103 48.5749 22.7353 48.7446 22.3823 48.9536C20.8234 49.8635 19.6885 51.3538 19.2258 53.0984C18.7631 54.8431 19.0103 56.6999 19.9133 58.2627C20.5267 59.3515 21.4375 60.243 22.5391 60.8328L18.7497 75.3226L27.3505 84.4294L33.0877 77.2553L28.8278 60.9695C28.954 60.9204 29.0745 60.8576 29.187 60.7823C30.2897 60.143 31.1912 59.2076 31.7893 58.082C32.3873 56.9564 32.658 55.6857 32.5706 54.4142C32.4831 53.1426 32.0411 51.9209 31.2946 50.8878C30.5481 49.8547 29.527 49.0514 28.3472 48.5691V40.7374L48.8322 48.5691V80.3718C60.8402 72.7897 74.7509 68.7654 88.9524 68.7654C103.154 68.7654 117.064 72.7897 129.072 80.3718V49.92L177.905 32.9815L86.0837 0ZM29.2123 52.8999C29.7072 53.7465 29.8664 54.748 29.6584 55.7064C29.4504 56.6647 28.8904 57.5102 28.0891 58.0755C27.9914 58.1646 27.8805 58.238 27.7603 58.2931C27.3137 58.5535 26.8195 58.7217 26.3068 58.7878C25.7941 58.8538 25.2733 58.8164 24.7753 58.6776C24.2364 58.5394 23.7363 58.2799 23.3132 57.9187C22.8408 57.5404 22.4628 57.0575 22.209 56.5081C21.9552 55.9587 21.8326 55.3579 21.8507 54.753C21.8689 54.148 22.0273 53.5556 22.3136 53.0224C22.5999 52.4893 23.0062 52.0299 23.5004 51.6806C23.6008 51.5908 23.7111 51.5127 23.8292 51.4479C24.4316 51.1146 25.1089 50.9405 25.7973 50.9419C26.7235 50.9466 27.6187 51.276 28.3269 51.8728C28.6777 52.163 28.977 52.5102 29.2123 52.8999Z"
                fill="#275482"
              />
              <path
                d="M121.291 172.952H136.039C129.078 183.279 118.914 191.032 107.114 195.016C95.3132 199 82.5304 198.994 70.7336 195C58.9367 191.005 48.7802 183.243 41.8281 172.91C34.8759 162.576 31.5136 150.243 32.2591 137.81C33.0045 125.378 37.8163 113.535 45.9535 104.106C54.0906 94.6771 65.1018 88.1845 77.2914 85.6281C89.4811 83.0718 102.173 84.5935 113.413 89.9589C124.653 95.3244 133.817 104.236 139.494 115.321H126.138C120.811 107.665 113.252 101.838 104.491 98.6354C95.7307 95.4329 86.1957 95.0108 77.1865 97.4265C68.1773 99.8423 60.1326 104.978 54.1497 112.134C48.1668 119.29 44.537 128.117 43.7553 137.412C42.9736 146.707 45.0781 156.016 49.7818 164.071C54.4855 172.125 61.5593 178.533 70.0384 182.419C78.5176 186.306 87.9892 187.482 97.1615 185.788C106.334 184.094 114.76 179.611 121.291 172.952Z"
                fill="#275482"
              />
              <path
                d="M88.9527 172.952C106.187 172.952 120.158 158.981 120.158 141.746C120.158 124.512 106.187 110.541 88.9527 110.541C71.7183 110.541 57.7471 124.512 57.7471 141.746C57.7471 158.981 71.7183 172.952 88.9527 172.952Z"
                fill="#275482"
              />
            </svg>
          </div>
          <div className="absolute -z-10 bottom-6 right-4">
            <svg
              width="178"
              height="85"
              viewBox="0 0 178 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.0837 0L0 29.9358L23.5004 38.8907V48.4477C23.1103 48.5749 22.7353 48.7446 22.3823 48.9536C20.8234 49.8635 19.6885 51.3538 19.2258 53.0984C18.7631 54.8431 19.0103 56.6999 19.9133 58.2627C20.5267 59.3515 21.4375 60.243 22.5391 60.8328L18.7497 75.3226L27.3505 84.4294L33.0877 77.2553L28.8278 60.9695C28.954 60.9204 29.0745 60.8576 29.187 60.7823C30.2897 60.143 31.1912 59.2076 31.7893 58.082C32.3873 56.9564 32.658 55.6857 32.5706 54.4142C32.4831 53.1426 32.0411 51.9209 31.2946 50.8878C30.5481 49.8547 29.527 49.0514 28.3472 48.5691V40.7374L48.8322 48.5691V80.3718C60.8402 72.7897 74.7509 68.7654 88.9524 68.7654C103.154 68.7654 117.064 72.7897 129.072 80.3718V49.92L177.905 32.9815L86.0837 0ZM29.2123 52.8999C29.7072 53.7465 29.8664 54.748 29.6584 55.7064C29.4504 56.6647 28.8904 57.5102 28.0891 58.0755C27.9914 58.1646 27.8805 58.238 27.7603 58.2931C27.3137 58.5535 26.8195 58.7217 26.3068 58.7878C25.7941 58.8538 25.2733 58.8164 24.7753 58.6776C24.2364 58.5394 23.7363 58.2799 23.3132 57.9187C22.8408 57.5404 22.4628 57.0575 22.209 56.5081C21.9552 55.9587 21.8326 55.3579 21.8507 54.753C21.8689 54.148 22.0273 53.5556 22.3136 53.0224C22.5999 52.4893 23.0062 52.0299 23.5004 51.6806C23.6008 51.5908 23.7111 51.5127 23.8292 51.4479C24.4316 51.1146 25.1089 50.9405 25.7973 50.9419C26.7235 50.9466 27.6187 51.276 28.3269 51.8728C28.6777 52.163 28.977 52.5102 29.2123 52.8999Z"
                fill="#275482"
              />
            </svg>
          </div>

          {/* end svg sgsgsgs */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-4 w-full bg-[#08305A] p-6 rounded-lg">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_672_426)">
                  <path
                    d="M6.11067 23.0947C4.73733 21.636 4 20 4 17.348C4 12.6813 7.276 8.49866 12.04 6.43066L13.2307 8.268C8.784 10.6733 7.91467 13.7947 7.568 15.7627C8.284 15.392 9.22133 15.2627 10.14 15.348C12.5453 15.5707 14.4413 17.5453 14.4413 20C14.4413 21.2377 13.9497 22.4247 13.0745 23.2998C12.1993 24.175 11.0123 24.6667 9.77467 24.6667C8.344 24.6667 6.976 24.0133 6.11067 23.0947ZM19.444 23.0947C18.0707 21.636 17.3333 20 17.3333 17.348C17.3333 12.6813 20.6093 8.49866 25.3733 6.43066L26.564 8.268C22.1173 10.6733 21.248 13.7947 20.9013 15.7627C21.6173 15.392 22.5547 15.2627 23.4733 15.348C25.8787 15.5707 27.7747 17.5453 27.7747 20C27.7747 21.2377 27.283 22.4247 26.4078 23.2998C25.5327 24.175 24.3457 24.6667 23.108 24.6667C21.6773 24.6667 20.3093 24.0133 19.444 23.0947Z"
                    fill="#FFA800"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_672_426">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-[18px] font-light text-white line-clamp-5  ">
                Whatever donuts marketing got status paradigm my alarming plane
                horse. Right lift rehydrate pretend launch devil site seems
                container driver's. Customer deck invested out panel want
                running developing points deck. N
              </p>
              <div className="flex flex-col ">
                <span className="text-white text-[18px] font-medium">
                  Bigizi japhet
                </span>
                <span className="text-[#87ACD2] text-[16px]">Student</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full bg-[#08305A] p-6 rounded-lg">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_672_426)">
                  <path
                    d="M6.11067 23.0947C4.73733 21.636 4 20 4 17.348C4 12.6813 7.276 8.49866 12.04 6.43066L13.2307 8.268C8.784 10.6733 7.91467 13.7947 7.568 15.7627C8.284 15.392 9.22133 15.2627 10.14 15.348C12.5453 15.5707 14.4413 17.5453 14.4413 20C14.4413 21.2377 13.9497 22.4247 13.0745 23.2998C12.1993 24.175 11.0123 24.6667 9.77467 24.6667C8.344 24.6667 6.976 24.0133 6.11067 23.0947ZM19.444 23.0947C18.0707 21.636 17.3333 20 17.3333 17.348C17.3333 12.6813 20.6093 8.49866 25.3733 6.43066L26.564 8.268C22.1173 10.6733 21.248 13.7947 20.9013 15.7627C21.6173 15.392 22.5547 15.2627 23.4733 15.348C25.8787 15.5707 27.7747 17.5453 27.7747 20C27.7747 21.2377 27.283 22.4247 26.4078 23.2998C25.5327 24.175 24.3457 24.6667 23.108 24.6667C21.6773 24.6667 20.3093 24.0133 19.444 23.0947Z"
                    fill="#FFA800"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_672_426">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-[18px] font-light text-white line-clamp-5  ">
                Whatever donuts marketing got status paradigm my alarming plane
                horse. Right lift rehydrate pretend launch devil site seems
                container driver's. Customer deck invested out panel want
                running developing points deck. N
              </p>
              <div className="flex flex-col ">
                <span className="text-white text-[18px] font-medium">
                  Bigizi japhet
                </span>
                <span className="text-[#87ACD2] text-[16px]">Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our special offers */}

      <div className="  min-h-[100dvh] bg-blue-100/60 w-full justify-center  flex">
        <div className="flex flex-col py-[81px] px-[10px]  items-center w-full max-w-7xl">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-center text-[#FFA800] font-[700]">
              Our special offers
            </h1>
            <p className="text-[16px] leading-4 text-center text-[#3C3B3B] font-[300] max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur. Convallis nisi quam nam
              diam mattis nec. Quis nisl condimentum purus quam et. Tortor vitae
              amet quis eleifend tellus in. Velit morbi nec massa eget{" "}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 py-10">
            <div className="flex flex-col bg-white rounded-md  items-center md:items-start py-6 px-2 md:px-6 ">
              <span className="text-[#123E6C] text-[14px] font-[300]">
                14 jan 2023
              </span>
              <h1 className="text-[#123E6C] font-[600] text-[20px]">
                Study in poland
              </h1>
              <p className="text-[#707070] text-[14px] text-center md:text-start font-[300] leading-4 mt-2 max-w-[375px]">
                Loopring EOS waves chiliz hive tether digibyte. Decentraland
                avalanche avalanche nexo uniswap fa
              </p>
              <a
                href="#"
                className="bg-[#123E6C] px-[30px] py-[8px] rounded-lg mt-4 text-white text-[14px] font-[300]"
              >
                Learn more
              </a>
            </div>
            <div className="flex flex-col bg-white rounded-md  items-center md:items-start py-6 px-2 md:px-6 ">
              <span className="text-[#123E6C] text-[14px] font-[300]">
                14 jan 2023
              </span>
              <h1 className="text-[#123E6C] font-[600] text-[20px]">
                Study in poland
              </h1>
              <p className="text-[#707070] text-[14px] text-center md:text-start font-[300] leading-4 mt-2 max-w-[375px]">
                Loopring EOS waves chiliz hive tether digibyte. Decentraland
                avalanche avalanche nexo uniswap fa
              </p>
              <a
                href="#"
                className="bg-[#123E6C] px-[30px] py-[8px] rounded-lg mt-4 text-white text-[14px] font-[300]"
              >
                Learn more
              </a>
            </div>
          </div>
          <div>
            <a
              href="#"
              className=" py-[10px] w-[150px] text-white font-[300] md:py-[10px] md:px-[31px] text-[14px] bg-[#FFA800] rounded-lg md:w-[160px] flex justify-center items-center"
            >
              Discover more
            </a>
          </div>
        </div>
      </div>

      {/* Reach out to us */}

      <div className=" w-full items-center flex flex-col gap-6 max-w-7xl py-20">
        <h1 className="text-[32px] text-[#07294D] font-bold text-center">
          React Out To Us
        </h1>
        <div className="flex w-full flex-col gap-10 md:flex-row">
          <div className="w-full md:w-1/2 md:items-end items-center flex flex-col gap-4">
            <div className=" w- flex flex-col gap-5">
              <h1 className="text-[24px] text-[#07294D] font-bold ">
                OUR SCHEDULE
              </h1>
              <div className="flex flex-col">
                <span className="text-[18px] text-[#07294D]">Sunday</span>
                <span className="text-[16px] font-[300] text-[#07294D]">
                  closed
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] text-[#07294D]">Saturday</span>
                <span className="text-[16px] font-[300] text-[#736B6B]">
                  09:00 AM - 02:30 pM
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] text-[#07294D]">
                  Monday - Friday
                </span>
                <span className="text-[16px] font-[300] text-[#736B6B]">
                  7:00 AM - 5:00 pM
                </span>
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <span className="text-[18px] text-[#07294D]">#brightforth</span>
                <div className="flex gap-2">
                  <a href="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM20 10C25.5 10 30 14.5 30 20C30 25 26.375 29.25 21.375 30V22.875H23.75L24.25 20H21.5V18.125C21.5 17.375 21.875 16.625 23.125 16.625H24.375V14.125C24.375 14.125 23.25 13.875 22.125 13.875C19.875 13.875 18.375 15.25 18.375 17.75V20H15.875V22.875H18.375V29.875C13.625 29.125 10 25 10 20C10 14.5 14.5 10 20 10Z"
                        fill="#07294D"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 23.5C18.125 23.5 16.5 22 16.5 20C16.5 18.125 18 16.5 20 16.5C21.875 16.5 23.5 18 23.5 20C23.5 21.875 21.875 23.5 20 23.5Z"
                        fill="#07294D"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.25 11.5H15.75C14.75 11.625 14.25 11.75 13.875 11.875C13.375 12 13 12.25 12.625 12.625C12.3283 12.9217 12.1881 13.2185 12.0186 13.5771C11.9739 13.6717 11.9271 13.7707 11.875 13.875C11.8557 13.933 11.8333 13.994 11.8094 14.0594C11.6786 14.4167 11.5 14.9047 11.5 15.75V24.25C11.625 25.25 11.75 25.75 11.875 26.125C12 26.625 12.25 27 12.625 27.375C12.9217 27.6717 13.2185 27.8119 13.5771 27.9814C13.6717 28.0261 13.7706 28.0728 13.875 28.125C13.933 28.1443 13.994 28.1667 14.0594 28.1906C14.4167 28.3214 14.9047 28.5 15.75 28.5H24.25C25.25 28.375 25.75 28.25 26.125 28.125C26.625 28 27 27.75 27.375 27.375C27.6717 27.0783 27.8119 26.7815 27.9814 26.4229C28.0261 26.3283 28.0728 26.2293 28.125 26.125C28.1443 26.067 28.1667 26.006 28.1906 25.9406C28.3214 25.5833 28.5 25.0953 28.5 24.25V15.75C28.375 14.75 28.25 14.25 28.125 13.875C28 13.375 27.75 13 27.375 12.625C27.0783 12.3283 26.7815 12.1881 26.4229 12.0186C26.3284 11.974 26.2292 11.9271 26.125 11.875C26.067 11.8557 26.006 11.8333 25.9406 11.8094C25.5833 11.6786 25.0953 11.5 24.25 11.5ZM20 14.625C17 14.625 14.625 17 14.625 20C14.625 23 17 25.375 20 25.375C23 25.375 25.375 23 25.375 20C25.375 17 23 14.625 20 14.625ZM26.75 14.5C26.75 15.1904 26.1904 15.75 25.5 15.75C24.8096 15.75 24.25 15.1904 24.25 14.5C24.25 13.8096 24.8096 13.25 25.5 13.25C26.1904 13.25 26.75 13.8096 26.75 14.5Z"
                        fill="#07294D"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM15.75 9.625H24.25C25.375 9.75 26.125 9.875 26.75 10.125C27.5 10.5 28 10.75 28.625 11.375C29.25 12 29.625 12.625 29.875 13.25C30.125 13.875 30.375 14.625 30.375 15.75V24.25C30.25 25.375 30.125 26.125 29.875 26.75C29.5 27.5 29.25 28 28.625 28.625C28 29.25 27.375 29.625 26.75 29.875C26.125 30.125 25.375 30.375 24.25 30.375H15.75C14.625 30.25 13.875 30.125 13.25 29.875C12.5 29.5 12 29.25 11.375 28.625C10.75 28 10.375 27.375 10.125 26.75C9.875 26.125 9.625 25.375 9.625 24.25V15.75C9.75 14.625 9.875 13.875 10.125 13.25C10.5 12.5 10.75 12 11.375 11.375C12 10.75 12.625 10.375 13.25 10.125C13.875 9.875 14.625 9.625 15.75 9.625Z"
                        fill="#07294D"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM27.625 14.375C28.5 14.25 29.25 14.125 30 13.75C29.5 14.625 28.75 15.375 27.875 15.875C28.125 21.75 23.875 28.125 16.25 28.125C14 28.125 11.875 27.375 10 26.25C12.125 26.5 14.375 25.875 15.875 24.75C14 24.75 12.5 23.5 12 21.875C12.625 22 13.25 21.875 13.875 21.75C12 21.25 10.625 19.5 10.625 17.625C11.25 17.875 11.875 18.125 12.5 18.125C10.75 16.875 10.125 14.5 11.25 12.625C13.375 15.125 16.375 16.75 19.75 16.875C19.125 14.375 21.125 11.875 23.75 11.875C24.875 11.875 26 12.375 26.75 13.125C27.75 12.875 28.625 12.625 29.375 12.125C29.125 13.125 28.5 13.875 27.625 14.375Z"
                        fill="#07294D"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM10.25 16.625V30H14.5V16.625H10.25ZM10 12.375C10 13.75 11 14.75 12.375 14.75C13.75 14.75 14.75 13.75 14.75 12.375C14.75 11 13.75 10 12.375 10C11.125 10 10 11 10 12.375ZM25.75 30H29.75V21.75C29.75 17.625 27.25 16.25 24.875 16.25C22.75 16.25 21.25 17.625 20.875 18.5V16.625H16.875V30H21.125V22.875C21.125 21 22.375 20 23.625 20C24.875 20 25.75 20.625 25.75 22.75V30Z"
                        fill="#07294D"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <form
              action=""
              className=" w-full md:w-[60%] flex flex-col gap-4 px-10"
            >
              <div className="flex flex-col gap-1">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-[10px] outline-none rounded-xl border border-gray-300 font-light"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="p-[10px] outline-none rounded-xl border border-gray-300 font-light"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span>Message</span>
                <textarea
                  type="text"
                  placeholder="Enter your Message"
                  className="p-[10px] outline-none rounded-xl border border-gray-300 font-light"
                  rows={3}
                ></textarea>
              </div>
              <button className="bg-[#FFCD21] text-black rounded-xl p-4">
                Submit now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* home footer */}

      <div className="flex flex-col gap-12 bg-[#07294D] pt-10 w-full">
        <div className=" p-2 gap-6 sm:gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  justify-center sm:p-6">
          <div className="flex flex-col gap-2 ">
            <div className="flex flex-col gap-2 items-center justify-center sm:items-start sm:ustify-start">
              <img src={logo2} alt="" />
              <p className="text-white text-[14px] font-[300] max-w-[321px] text-center sm:text-start ">
                BrightForth Consultants helps students easily and affordably
                find their dream schools abroad.
              </p>
              <div className="flex gap-4">
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
                      fill="#FFA800"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                      fill="#FFA800"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
                      fill="#FFA800"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
                      fill="#FFA800"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6 21.7C13.6 22.3 14.8 22.6 16 22.6C19.7 22.6 22.6 19.6 22.6 16.1C22.6 14.3 22 12.7 20.7 11.4C19.4 10.2 17.8 9.5 16 9.5C12.4 9.5 9.39999 12.5 9.39999 16.1C9.39999 17.3 9.7 18.5 10.4 19.6L10.6 19.9L9.89999 22.3L12.4 21.6L12.6 21.7ZM18.2 17C18.4 17 19.4 17.5 19.6 17.6C19.6311 17.6156 19.6623 17.6287 19.6931 17.6417C19.8599 17.7121 20.0156 17.7779 20.1 18.2C20.2 18.2 20.2 18.6 20 19.1C19.9 19.5 19.1 20 18.7 20C18.6322 20 18.5673 20.0057 18.498 20.0119C18.1582 20.0419 17.712 20.0814 16.3 19.5C14.5475 18.799 13.3325 17.0999 12.9913 16.6228C12.9431 16.5554 12.9124 16.5124 12.9 16.5C12.883 16.466 12.8485 16.4116 12.8031 16.3399C12.5819 15.9906 12.1 15.2297 12.1 14.4C12.1 13.4 12.6 12.9 12.8 12.7C13 12.5 13.2 12.5 13.3 12.5H13.7C13.8 12.5 14 12.5 14.1 12.8C14.3 13.2 14.7 14.2 14.7 14.3C14.7 14.3333 14.7111 14.3667 14.7222 14.4C14.7445 14.4667 14.7667 14.5333 14.7 14.6C14.65 14.65 14.625 14.7 14.6 14.75C14.575 14.8 14.55 14.85 14.5 14.9L14.2 15.2C14.1 15.3 14 15.4 14.1 15.6C14.2 15.8 14.6 16.5 15.2 17C15.8751 17.5907 16.4078 17.8254 16.6778 17.9443C16.7278 17.9663 16.7688 17.9844 16.8 18C17 18 17.1 18 17.2 17.9C17.25 17.8 17.375 17.65 17.5 17.5C17.625 17.35 17.75 17.2 17.8 17.1C17.9 16.9 18 16.9 18.2 17Z"
                      fill="#FFA800"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C18.1 8 20.1 8.8 21.6 10.3C23.1 11.8 24 13.8 24 15.9C24 20.3 20.4 23.9 16 23.9C14.7 23.9 13.4 23.5 12.2 22.9L8 24L9.10001 20C8.40001 18.8 8 17.4 8 16C8 11.6 11.6 8 16 8Z"
                      fill="#FFA800"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center sm:items-start mt-5">
              <h1 className="text-[#FFA800] text-[18px]">Contact us</h1>
              <span className="text-white text-[14px] font-[300]">
                Kigali, Rwanda
              </span>
              <span className="text-white text-[14px] font-[300]">
                +250791858282
              </span>
              <span className="text-white text-[14px] font-[300]">
                info@Brighforth.rw
              </span>
              <span className="text-white text-[14px] font-[300]">
                www.brightforth.rw
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center sm:items-start">
            <h1 className="text-[#FFA800] text-[18px]">Study Desitinations</h1>
            <a href="#" className="text-white text-[14px] font-[300]">
              United state
            </a>
            <a href="#" className="text-white text-[14px] font-[300]">
              Canada
            </a>
            <a className="text-white text-[14px] font-[300]">United Kingdom</a>
            <a href="#" className="text-white text-[14px] font-[300]">
              Poland
            </a>
            <a href="#" className="text-white text-[14px] font-[300]">
              Ireland
            </a>
            <a href="#" className="text-white text-[14px] font-[300]">
              Turkey
            </a>
            <a href="#" className="text-white text-[14px] font-[300]">
              Australia
            </a>
            <a href="#" className="text-white text-[14px] font-[300]">
              Germany
            </a>
            <a href="#" className="text-white text-[14px] font-[300]">
              Georgia
            </a>
          </div>
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <h1 className="text-[#FFA800] text-[18px]">Study Desitinations</h1>
            <a href="#" className="text-white text-[14px] font-[300]">
              Counselling
            </a>
            <a href="#" className="text-white text-[14px] font-[300]">
              Test preparation
            </a>
            <a className="text-white text-[14px] font-[300]">United Kingdom</a>
            <a href="#" className="text-white text-[14px] font-[300]">
              course, country and university selection
            </a>
            <a href="#" className="text-white text-[14px] font-[300]">
              Visa processing
            </a>
            <div className="flex flex-col py-4 gap-3">
              <h1 className="text-[#FFA800]">Quick links</h1>
              <a href="#" className="text-white text-[14px] font-[300]">
                About us
              </a>
              <a href="#" className="text-white text-[14px] font-[300]">
                Contact us
              </a>
              <a href="#" className="text-white text-[14px] font-[300]">
                Gallery
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h1 className="text-[#FFA800] text-[32px] font-[700] leading-8">
              Subscribe to our news letter
            </h1>
            <form action="#" className="flex ">
              <div className="bg-[#0A3461] p-4 flex">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className=" bg-transparent font-[300] outline-none text-white"
                />
              </div>
              <button className="bg-[#FFA800] text-[14px] px-2 font-[300]">
                Subscribe
              </button>
            </form>
            <div className="flex flex-col gap-3 py-4">
              <a href="#" className="text-[#346FAF] text-[18px] font-[300]">
                SEARCH UNIVERSITIES
              </a>
              <a href="#" className="text-[#346FAF] text-[18px] font-[300]">
                BOOK ONLINE COUNSELLIG
              </a>
              <a href="#" className="text-[#346FAF] text-[18px] font-[300]">
                UPCOMING EVENTS
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <h1 className="text-[#FFA800] text-[14px] sm:text-[18px] md:text-[24px] font-[500] leading-6 text-center">
            Global accreditations & recognitions
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-5  gap-8 sm:gap-14 md:gap-20 ">
            <img src={dp1} alt="" className="w-10" />
            <img src={dp2} alt="" className="w-10" />
            <img src={dp3} alt="" className="w-10" />
            <img src={dp4} alt="" className="w-10" />
            <img src={dp5} alt="" className="w-10" />
          </div>
        </div>
        <div className="py-2 border-t-2 border-[#07305C]/70 items-center justify-center flex ">
          <span className="text-white text-[14px] font-[300] text-center">
            @ 2023 BrightForth. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
