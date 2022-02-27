import { Menu } from "components/menus";
import { AboutUs } from "components/sections";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <AboutUs />
    </>
  );
};

export default Home;
