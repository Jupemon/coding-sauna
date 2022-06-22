import React from "react";

import Header from "../components/Header";
import Venue from "../components/Venue";
import Organizers from "../components/Organizers";
import Supporters from "../components/Supporters";
import News from "../components/News";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Venue />
      <Organizers />
      <Supporters />
      <News />
      <Footer />
    </div>
  );
};

export default HomePage;
