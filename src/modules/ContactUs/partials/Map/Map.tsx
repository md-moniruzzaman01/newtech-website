import React from 'react';

const Map = () => {
  return (
    <div className="w-full ">
      <div className="w-full ">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.3024226381212!2d-81.62018002519959!3d30.19991481118917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c96e51e231c9%3A0xe6174e1d085cfa3c!2s3740%20Kori%20Rd%2C%20Jacksonville%2C%20FL%2032257%2C%20USA!5e0!3m2!1sen!2sbd!4v1734517635857!5m2!1sen!2sbd"
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
