import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import Testimonials from "./Pages/Testimonials";
import Footer from "./component/footer";
// import ProjectModal from "./DetailPage/ProjectModal";

export default function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        {/* <Route path="/DetailPage/ProjectModal" element={<Img1DetailPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
