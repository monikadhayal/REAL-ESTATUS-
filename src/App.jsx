import { Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import Testimonials from "./Pages/Testimonials";
export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
      
    </>
  );
}
