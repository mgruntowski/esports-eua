import { Menu } from "components/menus";
import {
  AboutUs,
  FAQ,
  Footer,
  HowItWorks,
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
