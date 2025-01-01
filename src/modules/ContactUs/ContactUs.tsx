import React from 'react';
import HeroContact from './partials/HeroContact/HeroContact';
import Map from './partials/Map/Map';
import Form from './partials/Form/Form';
import Support_Brand from '@components/Support_Brand';

const ContactUs = () => {
  return (
    <div>
      <Form />
      <Map />
      <Support_Brand />
    </div>
  );
};

export default ContactUs;
