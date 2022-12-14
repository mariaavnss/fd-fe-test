import React from "react";
import styled from "styled-components";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

function App() {
  return (
    <div className="App">
      <div id="content">
        <Navigation />
        <MenuNav />
        <Wrapper>
          <Iframe adsIndex="Top Frame" />
          <Iframe adsIndex="Billboard" />
          <EditorChoice/>
          <MyMatches />
          <Iframe adsIndex="Horizontal" />
          <LatestArticles />
          <LatestReviews />
          <PopularGroups />
          <LatestVideos />
          <TrendingThisWeek />
          <TopBrands />
          <Footer />
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
