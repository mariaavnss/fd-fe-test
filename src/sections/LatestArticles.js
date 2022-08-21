import React from "react";
import styled from "styled-components"

import { FD_BLOG } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";
import Article from "../components/Article";

const Container = styled.div`
  padding: 0 150px;
`;

const ArticlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 30px auto;
  justify-content: center;
`

function LatestArticles() {
  return (
    <Container>
      <SectionHeader
        title={"Latest Articles"}
        subtitle={"So you can make better purchase decision"}
        seeMore={true}
        url={FD_BLOG}
      />
      <ArticlesWrapper>
      <Article
        image={"https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg"}
        title={"Brush dan Alat Makeup Yang Paling Sering Digunakan"}
        author={"celle"}
        publishedAt={"4 hours ago"}
      />
      <Article
        image={"https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg"}
        title={"Brush dan Alat Makeup Yang Paling Sering Digunakan"}
        author={"celle"}
        publishedAt={"4 hours ago"}
      />
      <Article
        image={"https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg"}
        title={"Brush dan Alat Makeup Yang Paling Sering Digunakan"}
        author={"celle"}
        publishedAt={"4 hours ago"}
      />
      <Article
        image={"https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg"}
        title={"Brush dan Alat Makeup Yang Paling Sering Digunakan"}
        author={"celle"}
        publishedAt={"4 hours ago"}
      />
      <Article
        image={"https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg"}
        title={"Brush dan Alat Makeup Yang Paling Sering Digunakan"}
        author={"celle"}
        publishedAt={"4 hours ago"}
      />
      <Article
        image={"https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg"}
        title={"Brush dan Alat Makeup Yang Paling Sering Digunakan"}
        author={"celle"}
        publishedAt={"4 hours ago"}
      />
      </ArticlesWrapper>
      
    </Container>
  );
}

export default LatestArticles;
