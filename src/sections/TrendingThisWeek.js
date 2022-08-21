import React from "react";
import styled from "styled-components";

import SectionHeader from "../components/SectionHeader";
import Cards from "../components/Cards";

const Container = styled.div`
  padding: 0 150px;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 40px auto;
`;

const PRODUCT_ITEMS = [
  {
    img: "../assets/product-1.png",
    name: "SKINCEUTICALS",
    desc: "C E Ferulic",
  },
  {
    img: "../assets/product-2.png",
    name: "JUICE BEAUTY",
    desc: "Phyto-pigments Flawless Serum",
  },
  {
    img: "../assets/product-3.png",
    name: "JUICE BEAUTY",
    desc: "Pure Pressed Blush",
  },
  {
    img: "../assets/product-4.png",
    name: "VAL BY VALERIE THOMAS",
    desc: "Pure Pressed Blush",
  },
  {
    img: "../assets/product-1.png",
    name: "SKINCEUTICALS",
    desc: "C E Ferulic",
  },
  {
    img: "../assets/product-2.png",
    name: "JUICE BEAUTY",
    desc: "Phyto-pigments Flawless Serum",
  },
];

function TrendingThisWeek() {
  return (
    <Container>
      <SectionHeader
        title={"Trending This Week"}
        subtitle={"See our weekly most receive products"}
        seeMore={false}
      />
      <CardWrapper>
        {PRODUCT_ITEMS.map((product, index) => (
          <Cards
            key={`product-${index}`}
            match={false}
            byEditor={false}
            line={false}
            smallPhoto={true}
            productImage={product.img}
            productName={product.name}
            sectionType="trending this week"
            productRating="4.9"
            productDescription={product.desc}
          />
        ))}
      </CardWrapper>
    </Container>
  );
}

export default TrendingThisWeek;
