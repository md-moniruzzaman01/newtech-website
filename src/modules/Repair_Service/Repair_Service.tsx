import React from 'react';

import ChooseDevice from './partials/ChooseDevice';
import LookUp from './partials/LookUp';
import Support_Brand from '@components/Support_Brand';

import GetTouch from '@components/GetTouch';
import CustomerReview from './partials/CustomerReview/CustomerReview';

const Repair_Service = () => {
  return (
    <div id="#heroService">
      <ChooseDevice />

      <LookUp />
      <CustomerReview />
      <Support_Brand />
      <GetTouch
        title="Let’s Get in Touch"
        description="Tell us about your biggest IT challenge, we want to help you solve it!"
        btnText="GET STARTED NOW"
      />
    </div>
  );
};

export default Repair_Service;
