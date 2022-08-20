import React from "react";

import "./App.css";
import "./styles/Global.css";

import Navigation from "./sections/Navigation";
import MenuNav from "./sections/MenuNav";
import Iframe from "./components/Iframe";
import EditorChoice from "./sections/EditorChoice";
import MyMatches from "./sections/MyMatches";
import LatestArticles from "./sections/LatestArticles";
import LatestReviews from "./sections/LatestReviews";
import PopularGroups from "./sections/PopularGroups";
import LatestVideos from "./sections/LatestVideos";
import TrendingThisWeek from "./sections/TrendingThisWeek";
import TopBrands from "./sections/TopBrands";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Navigation />
        <MenuNav />
        <Iframe adsIndex="Top Frame"/>
        <Iframe adsIndex="Billboard"/>
        <EditorChoice />
        <MyMatches />
        <Iframe adsIndex="Horizontal"/>
        <LatestArticles />
        <LatestReviews />
        <Iframe adsIndex="MR 2"/>
        <PopularGroups />
        <LatestVideos />
        <TrendingThisWeek />
        <TopBrands />
        <Footer />
        <Iframe adsIndex="Bottom Frame"/>
      </div>
    </div>
  );
}

export default App;
