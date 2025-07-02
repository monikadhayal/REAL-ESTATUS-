import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-transparent text-black px-6 py-4 absolute top-0 left-0 w-full z-50 ">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold"> 🏠Estate</div>

        <div className="flex space-x-6 hover: cursor-pointer text-gray-100 hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] ">
          <Link
            to="/"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/projectspage"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            ProjectsPage
          </Link>

          <Link
            to="/testimonials"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            Testimonials
          </Link>
        </div>

        <button className="bg-blue-600 px-4 py-1 rounded-md hover:bg-gray-200 text-white">
          Sign up
        </button>
      </div>
    </nav>
  );
}
