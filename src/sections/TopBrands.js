import React from "react";
import styled from "styled-components";

import { FD_B2B } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";

const BRAND_ITEMS = [
  {
    url: "../assets/brand-1.png",
    name: "Nivea",
    height: "65",
    width: "65",
  },
  {
    url: "../assets/brand-2.png",
    name: "The Ordinary",
    height: "53",
    width: "141",
  },
  {
    url: "../assets/brand-3.png",
    name: "The Body Shop",
    height: "63",
    width: "64",
  },
  {
    url: "../assets/brand-4.png",
    name: "SK-II",
    height: "63",
    width: "95",
  },
  {
    url: "../assets/brand-5.png",
    name: "Maybelline Newyork",
    height: "18",
    width: "132",
  },
  {
    url: "../assets/brand-6.png",
    name: "Innisfree",
    height: "66",
    width: "79",
  },
];

const Container = styled.div`
  padding: 0 150px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 40px auto 70px;
`;

const Logo = styled.img`
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
`;

function TopBrands() {
  return (
    <Container>
      <SectionHeader
        title={"Top Brands"}
        subtitle={"We all know and love"}
        seeMore={true}
        url={FD_B2B}
      />
      <LogoWrapper>
        {BRAND_ITEMS.map((brand, index) => (
          <Logo
            key={`brand-${index}`}
            src={brand.url}
            alt={brand.name}
            height={brand.height}
            width={brand.width}
          />
        ))}
      </LogoWrapper>

      <div>
        <h1 style={{ fontSize: "24px" }}>
          {
            "Female Daily - Find everything you want to know about beauty on Female Daily"
          }
        </h1>
        <p style={{ color: "var(--chinese-black)", fontSize: "20px" }}>
          {
            "Product Reviews, Tips & Tricks, Expert, and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!"
          }
        </p>
      </div>
    </Container>
  );
}

export default TopBrands;
