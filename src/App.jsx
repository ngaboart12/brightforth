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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Apllication />} />
        <Route path="/ass" element={<Assessment />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event/:eventId" element={<EventDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
