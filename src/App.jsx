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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-full flex-col">
      {/* <LinkComponent />
      <Navbar />
      <div className="px-[20px] md:px-[100px]  pt-4 w-full">
        <Routes>
          <Route path="/" element={<Apllication />} />
          <Route path="/assess" element={<Assessment />} />
        </Routes>
      </div>
      <Footer /> */}
      <Dashboard />
    </div>
  );
}

export default App;
