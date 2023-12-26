import axios from "axios";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
//
import { userAtom } from '@config/state'
//
import Hero from "./partials/Hero";
import StunningQuality from "./partials/StunningQuality";
import VideoComponent from "./partials/Video";
import { SERVER_URL } from "@config/secret";


const Home = () => {

  // hooks
  const [user, setUser] = useAtom(userAtom)

  // effects
	const getUser = async () => {
		try {
			const url = `${SERVER_URL}/api/v1/auth/login`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user);
		} catch (err) {
			console.log(err);
		}
	};

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div id="__home">

      <Hero />
      <VideoComponent />
      <StunningQuality />

    </div>
  );
};

export default Home;
