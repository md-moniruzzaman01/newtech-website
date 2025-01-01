//
import Work_process from '@components/Work Process';
import Choose from './partials/Choose';
import Hero from './partials/Hero';
import Our_Service from './partials/Our_Service';
import Welcome_sec from './partials/Welcome_sec';
import Support_Brand from '@components/Support_Brand';
import Latest_Blog from './partials/Latest_Blog';
import NewTech from './partials/NewTech';

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Welcome_sec />
      <Choose />
      <NewTech />
      <Our_Service />
      <Work_process />
      <Latest_Blog />
      <Support_Brand />
    </div>
  );
};

export default Home;
