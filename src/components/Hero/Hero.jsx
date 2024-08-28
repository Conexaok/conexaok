import React from "react";
import { useMediaQuery } from 'react-responsive';
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile ? <HeroMobile /> : <HeroDesktop />}
    </>
  );
};

export default Hero;
