import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import HeroPage from "./heroPage";
import Carousel from "../carousel";
import Logo from "../logo"

function Home(props) {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <Logo />
    <div data-aos="fade-right">
      <HeroPage
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      />
        <Carousel />
        </div>
        </React.Fragment>
  );
}
export default Home;
