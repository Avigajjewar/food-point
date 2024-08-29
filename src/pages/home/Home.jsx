import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Exploremenu from "../../components/Exploremenu/Exploremenu";
import Fooddisplay from "../../components/Food-display/Fooddisplay";
import Fooditem from "../../components/Food-item/Fooditem";
import Footer from "../../components/footer/Footer";
import Appdownload from "../../components/Appdownloads/Appdownload";

const Home = () => {
const [category, setcategory] = useState("All")


  return (
    <div>
      <Header />
      <Exploremenu category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
  );
};

export default Home;
