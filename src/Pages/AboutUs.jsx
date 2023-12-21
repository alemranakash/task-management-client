// AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 mt-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg mb-8 text-gray-300">
          We are a passionate team dedicated to providing innovative solutions for effective task
          management. Our mission is to make collaboration seamless and enhance productivity for
          individuals and teams across various industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-5 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Our Vision</h3>
            <p className="text-gray-800">
              To create a platform that empowers individuals and organizations to achieve their goals
              through efficient task management and collaboration.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Our Values</h3>
            <p className="text-gray-800">
              Innovation, Collaboration, Transparency, and a relentless focus on delivering value to
              our users.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Why Choose Us</h3>
            <p className="text-gray-800">
              We believe in simplicity, user-friendly design, and continuous improvement. Choose us
              for an intuitive and powerful task management experience.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Get in Touch</h3>
            <p className="text-gray-800">
              Have questions or feedback? Reach out to us at{' '}
              <a href="mailto:info@example.com" className="text-blue-300 underline">
                info@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
