import React from "react";
import Aboutus from "../Aboutus/Aboutus";
import Apartments from "../Apartments/Apartments";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import HomeReviews from "../HomeReviews/HomeReviews";
import Photos from "../Photos/Photos";
import TopBanner from "../TopBanner/TopBanner";
import Navigation from "./../../Shared/Navigation/Navigation";
import Banner2 from "./Banner2";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <TopBanner></TopBanner>
      <div className="bg-color">
        <Banner></Banner>
      </div>
      <h1 className="color2">Our Galleries</h1>
      <Photos></Photos>
      <Aboutus></Aboutus>
      <h1 style={{ marginBottom: "51px", color: "burlywood" }}>
        Services we Provide
      </h1>
      <div className="bg-color2">
        <Apartments></Apartments>
      </div>

      <div className="bg-color3">
        <Banner2></Banner2>
      </div>
      <div className="reviews">
        <HomeReviews></HomeReviews>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
