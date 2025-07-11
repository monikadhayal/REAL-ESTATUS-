import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import Testimonials from "./Pages/Testimonials";
import Footer from "./component/footer";
import SellProperty from "./Pages/SellProperty";
import MyProperties from "./Pages/MyProperties";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/Testimonials" element={<Testimonials />} />

        <Route path="/sellProperty" element={<SellProperty />} />
        <Route path="/myproperties" element={<MyProperties />} />
      </Routes>
      <Footer />
    </div>
  );
}
