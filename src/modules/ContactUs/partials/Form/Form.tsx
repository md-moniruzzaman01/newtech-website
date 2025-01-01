import React from 'react';

const Form = () => {
  return (
    <div className="bg-[#e6f4ff] p-4 sm:p-6 md:p-16">
      <div className="max-w-4xl mx-auto mt-8 md:mt-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 mt-20">
          How Can We Help?
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-12">
          Contact us to request a quote or to schedule a consultation with our
          team.
        </p>
        <form className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Your E-mail"
            />
          </div>

          <div>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#1e3a8a] text-white py-3 px-10 sm:px-16 rounded-lg hover:bg-[#2563eb] transition duration-200 w-full sm:w-auto"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
