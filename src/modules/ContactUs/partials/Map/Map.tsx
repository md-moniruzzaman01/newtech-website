import React from 'react';

const Map = () => {
  return (
    <div className="w-full ">
      <div className="w-full ">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.420126545267!2d90.39621447456365!3d23.768049288099952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c763fb24afb3%3A0xabc2fc8def4d7d20!2s304%20Bir%20Uttam%20Mir%20Shawkat%20Sarak%2C%20Dhaka%201208!5e0!3m2!1sen!2sbd!4v1737368083211!5m2!1sen!2sbd"
          className="w-full h-[500px] border-0 "
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
