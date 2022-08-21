import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { FD_BLOG, API_URL } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";
import Article from "../components/Article";
import { latestArticlesList } from "../data/Data";

const Container = styled.div`
  padding: 0 150px;
`;

const ArticlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 40px auto;
  justify-content: center;
`;

function LatestArticles() {
  // const [latestArticlesList_, setLatestArticlesList] = useState([]);

  // useEffect(() => {
  //   async function fetchLatestArticlesList() {
  //     try {
  //       const requestUrl = API_URL;
  //       const response = await fetch(requestUrl); //error cors 429
  //       const responseJSON = await response.json();
  //       // console.log(responseJSON["latest articles"]);
  //       setLatestArticlesList(responseJSON["latest articles"]);
  //     } catch (err) {
  //       console.log("###error###");
  //       console.log(err);
  //     }
  //   }
  //   fetchLatestArticlesList();
  // });

  return (
    <Container>
      <SectionHeader
        title={"Latest Articles"}
        subtitle={"So you can make better purchase decision"}
        seeMore={true}
        url={FD_BLOG}
      />
      <ArticlesWrapper>
        {latestArticlesList.map((data, index) => (
          <Article
            key={`latest-article-${index}`}
            image={data.image}
            title={data.title}
            author={data.author}
            publishedAt={data.published_at}
          />
        ))}
      </ArticlesWrapper>
    </Container>
  );
}

export default LatestArticles;
