import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://www.championtutor.com/blog/wp-content/uploads/2015/03/smart-learning-in-schools.jpg')`, // Make sure the path to your image is correct
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Dark overlay */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empowering Smart Education
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Bringing innovative tools and techniques to revolutionize the way
          students learn. Join us on this exciting journey!
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
