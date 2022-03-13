import { Menu } from "components/menus";
import {
  AboutUs,
  FAQ,
  Footer,
  HowItWorks,
  Modalities,
  Partners,
  Projects,
  Services
} from "components/sections";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <AboutUs />
      <Modalities />
      <Services />
      <Projects />
      <Partners />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
