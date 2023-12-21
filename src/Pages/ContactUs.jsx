// ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-r mt-10 from-pink-500 via-purple-500 to-indigo-500 text-white py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>

        <form className="max-w-md w-full">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="john@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
