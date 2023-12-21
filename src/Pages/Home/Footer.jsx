// Footer.js
import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-6 space-x-6">
          {/* Social Media Icons with Hover Effect */}
          <a
            href="https://www.facebook.com/al.emran.akash.75/"
            className="text-3xl hover:text-blue-500 transition duration-300 transform hover:scale-110"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/md-al-emran-akash/"
            className="text-3xl hover:text-blue-700 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="text-3xl hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-3xl hover:text-red-500 transition duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 text-center">
          Connect with us on social media for the latest updates and news about our platform.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
