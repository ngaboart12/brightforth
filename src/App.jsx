import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom";
import LinkComponent from "./components/LinkComponet";
import Navbar from "./components/Navbar";
import Apllication from "./pages/Apllication";
import Assessment from "./pages/Assessment";
import Footer from "./components/Footer";
import Step6 from "./components/Step6";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import EventDetailsPage from "./pages/EventDetailsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-full flex-col">
      <LinkComponent />
      <Navbar />
      <div className="px-[20px] blg:px-[100px] pt-4 w-full">
        <Routes>
          <Route path="/" element={<Apllication />} />
          <Route path="/ass" element={<Assessment />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event/:eventId" element={<EventDetailsPage />} />
        </Routes>
      </div>
      <Footer />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
