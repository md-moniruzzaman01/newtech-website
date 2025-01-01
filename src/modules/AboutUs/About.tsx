import React from 'react';

import WeAre from './partials/WeAre';
import CheckOut from './partials/CheckOut';
import Goals from './partials/Goals';
import GetTouch from '@components/GetTouch';

const About = () => {
  return (
    <div>
      <WeAre />
      <CheckOut />
      <Goals />
      <GetTouch
        title="Let’s Get in Touch"
        description="Tell us about your biggest IT challenge, we want to help you solve it!"
        btnText="GET STARTED NOW"
      />
    </div>
  );
};

export default About;
