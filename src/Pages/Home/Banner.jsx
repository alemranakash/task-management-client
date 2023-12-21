// Banner.js

import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="bg-blue-500 text-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Your Task Management Platform</h1>
      <p className="text-lg mb-8">
        Enhance and improve your task management experience with our collaborative platform.
      </p>
      <Link to="/dashboard" className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-100">
        Let's Explore
        </Link>
    </div>
  );
};

export default Banner;
