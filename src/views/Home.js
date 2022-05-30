import React from "react";
import HeroSplit from "../components/sections/HeroSplit";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import VideoFull from "../components/sections/VideoFull";
import Testimonials from "../components/sections/Testimonial";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit />
        <VideoFull />
        <FeaturesSplit />
        <Testimonials />
      </React.Fragment>
    );
  }
}

export default Home;
