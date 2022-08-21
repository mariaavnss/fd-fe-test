import React from "react";
import styled from "styled-components";

import SectionHeader from "../components/SectionHeader";
import Cards from "../components/Cards";

const CardWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto 40px;
`;

const Container = styled.div`
  padding: 0 150px;
`;

function EditorChoice() {
  return (
    <Container>
      <SectionHeader
        title={"Editor's Choice"}
        subtitle={"Curated with love"}
        seeMore={false}
      />
      <CardWrapper>
        <Cards
          match={false}
          byEditor={true}
          line={true}
          editor="annedean"
          role="Associate Editor"
          productImage="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
          productName="Y.O.U Makeups"
          sectionType="editor's choice"
          productRating="4.1"
          productDescription="Rouge Velvet Matte Lip Cream"
        />
        <Cards
          match={false}
          byEditor={true}
          line={true}
          editor="annedean"
          role="Associate Editor"
          productImage="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
          productName="Y.O.U Makeups"
          sectionType="editor's choice"
          productRating="4.1"
          productDescription="Rouge Velvet Matte Lip Cream"
        />
        <Cards
          match={false}
          byEditor={true}
          line={true}
          editor="annedean"
          role="Associate Editor"
          productImage="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
          productName="Y.O.U Makeups"
          sectionType="editor's choice"
          productRating="4.1"
          productDescription="Rouge Velvet Matte Lip Cream"
        />
        <Cards
          match={false}
          byEditor={true}
          line={true}
          editor="annedean"
          role="Associate Editor"
          productImage="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
          productName="Y.O.U Makeups"
          sectionType="editor's choice"
          productRating="4.1"
          productDescription="Rouge Velvet Matte Lip Cream"
        />
        <Cards
          match={false}
          byEditor={true}
          line={true}
          editor="annedean"
          role="Associate Editor"
          productImage="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
          productName="Y.O.U Makeups"
          sectionType="editor's choice"
          productRating="4.1"
          productDescription="Rouge Velvet Matte Lip Cream"
        />
      </CardWrapper>
    </Container>
  );
}

export default EditorChoice;
