import { Menu } from "components/menus";
import {
  AboutUs,
  FAQ,
  Footer,
  Gallery,
  Hero,
  HowItWorks,
  Modalities,
  Program,
  Projects
} from "components/sections";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <Hero />
      <AboutUs />
      <Modalities />
      <Program />
      <HowItWorks />
      <Gallery />
      <Projects />
      {/* <Partners /> */}
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
