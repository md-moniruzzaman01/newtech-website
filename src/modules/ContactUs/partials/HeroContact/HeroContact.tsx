import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const HeroContact = () => {
  return (
    <div className="mx-auto px-10 py-20 gap-10 lg:flex lg:justify-between lg:items-start">
      {/* Left Section - Contact Form */}
      <div className="w-full lg:w-2/3 mb-12 lg:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Let&apos;s Talk About Your Idea
        </h2>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded focus:outline-none mt-4 md:mt-0"
            />
          </div>
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-4 border border-gray-300 rounded focus:outline-none"
          />
          <textarea
            rows={6}
            placeholder="Tell Us About Your Project *"
            className="w-full p-4 border border-gray-300 rounded focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center bg-pink-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-pink-600 transition duration-300"
          >
            SEND MESSAGE
            <FaPaperPlane className="ml-2" />
          </button>
        </form>
      </div>

      {/* Right Section - Contact Details */}
      <div className="w-full lg:w-1/3 space-y-8">
        {/* Office Location */}
        <div className="flex items-start">
          <FaMapMarkerAlt className="text-pink-500 text-2xl mr-4 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              OFFICE LOCATION
            </h3>
            <p className="text-gray-600">
              27 Longview Court, <br />
              Saint John, NB E2J 4N2, Canada
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start">
          <FaPhoneAlt className="text-pink-500 text-2xl mr-4 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">PHONE</h3>
            <p className="text-gray-600">+1 506 899 3939</p>
            <p className="text-gray-600">+880 1622 049 519</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <FaEnvelope className="text-pink-500 text-2xl mr-4 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">EMAIL</h3>
            <p className="text-gray-600">hello@qwikit.ca</p>
            <p className="text-gray-600">support@qwikit.ca</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            SOCIAL ADDRESS
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 bg-gray-200 text-gray-800 rounded-full hover:bg-pink-500 hover:text-white transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-200 text-gray-800 rounded-full hover:bg-pink-500 hover:text-white transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-200 text-gray-800 rounded-full hover:bg-pink-500 hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
