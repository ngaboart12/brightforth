import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom";
import LinkComponent from "./components/LinkComponet";
import Navbar from "./components/Navbar";
import Apllication from "./pages/Apllication";
import Assessment from "./pages/Assessment";
import Footer from "./components/Footer";

import Gallery from "./pages/Gallery";
import EventDetailsPage from "./pages/EventDetailsPage";
import Footer2 from "./components/Footer2";
import Home from "./pages/Home";
import StudyInPoland from "./pages/StudyInPoland";
import StudyInCanada from "./pages/StudyInCanada";
import Aboutus from "./pages/Aboutus";
import StudyInChina from "./pages/StudyInChina";
import SpecialOffers from "./pages/SpecialOffers";
import Toefl from "./pages/Toefl";
import Sop from "./pages/Sop";
import Special from "./pages/Special";
import Ielts from "./pages/Ielts";
import CareerCounseling from "./pages/CareerCounseling";
import PreDeparture from "./pages/PreDeparture";
import CareerCounseling2 from "./pages/CareerCounseling2";
import NotFound from "./pages/NotFound";
import Duolingo from "./pages/Duolingo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/poland" element={<StudyInPoland />} />
        <Route path="/specialoffer" element={<SpecialOffers />} />
        <Route path="/special" element={<Special />} />
        <Route path="/ielts" element={<Ielts />} />
        <Route path="/toefl" element={<Toefl />} />
        <Route path="/sop" element={<Sop />} />
        <Route path="/careerCounseling" element={<CareerCounseling />} />
        <Route path="/careerCounseling2" element={<CareerCounseling2 />} />
        <Route path="/duolingo" element={<Duolingo />} />
        <Route path="/predeparture" element={<PreDeparture />} />
        <Route path="/canada" element={<StudyInCanada />} />
        <Route path="/china" element={<StudyInChina />} />
        <Route path="/app" element={<Apllication />} />
        <Route path="/ass" element={<Assessment />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event/:eventId" element={<EventDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
