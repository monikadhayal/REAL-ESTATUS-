import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SignInModal from "../DetailPage/SignInModal";
import SignUpModal from "../DetailPage/SignUpModal";

export default function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <nav className="bg-transparent text-black px-6 py-4 absolute top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold"> 🏠Estate</div>

        <div className="flex space-x-6 hover: cursor-pointer text-gray-100 hover:text-white transition-all duration-300 transform hover:translate-y-[-2px]">
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
          <Link
            to="/SellProperty"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            SellProperty
          </Link>
          <Link
            to="/MyProperties"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            MyProperties
          </Link>
        </div>

        <div className="space-x-4">
          {currentUser ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">
                Welcome, {currentUser.name} ({currentUser.role}) 👋
              </span>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setShowSignUp(true)}
              >
                Sign Up
              </button>

              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>

      {/* Modals */}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
      {showSignIn && (
        <SignInModal
          onClose={() => setShowSignIn(false)}
          onLoginSuccess={() => {
            const savedUser = JSON.parse(localStorage.getItem("currentUser"));
            if (savedUser) {
              setCurrentUser(savedUser);
            }
            setShowSignIn(false);
          }}
        />
      )}
    </nav>
  );
}
