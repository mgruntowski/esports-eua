import { Menu } from "components/menus";
import {
  AboutUs,
  FAQ,
  Footer,
  HowItWorks,
  Modalities,
  Partners,
  Program,
  Projects
} from "components/sections";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <AboutUs />
      <Modalities />
      <Program />
      <HowItWorks />
      <Projects />
      <Partners />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
