  import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-50"
          style={{ backgroundImage: "url('/Home.jpg')" }}
        ></div>

        <div className="relative z-10">
          <nav className="text-white flex justify-between items-center py-6 px-20">
            <div className="text-2xl font-bold"> 🏠Estate</div>
            <div className="flex space-x-6 hover: cursor-pointer text-gray-100 hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] ">
              <Link
                to="/"
                className="text-gray-100 hover:text-black transition-all duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-100 hover:text-black transition-all duration-300"
              >
                About
              </Link>
              <Link
                to="/projectspage"
                className="text-gray-100 hover:text-black transition-all duration-300"
              >
                ProjectsPage
              </Link>

              <Link
                to="/testimonials"
                className="text-gray-100 hover:text-black transition-all duration-300"
              >
                Testimonials
              </Link>

            </div>
            <div>
              <button className="bg-white text-black px-4 py-2 rounded">
                Sign up
              </button>
            </div>
          </nav>

          <div
            className={`flex flex-col items-center justify-center h-[calc(100vh-80px)] transition-all duration-1000
            ${animate ? "blur-0 translate-y-0" : "blur-0 translate-y-20"}
            `}
          >
            <h2 className="text-white text-5xl font-bold">
              Explore homes that
            </h2>
            <h2 className="text-white text-5xl font-bold">fit your dreams</h2>

            <div className=" text-white p-8">
              <button className="  border border-white rounded-md pt-2 pb-1 pl-5 pr-5 mr-4">
                {" "}
                Project{" "}
              </button>
              <button className="bg-blue-500  ml-4 rounded-md pt-2 pb-1 pl-4 pr-4 mr-4">
                {" "}
                Contact Us{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
        }