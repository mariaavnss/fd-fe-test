import React from "react";
import styled from "styled-components";

import { FD_MATCH } from "../utils/constants";

import Button from "../components/Button";
import Cards from "../components/Cards";

const Container = styled.div`
  background-color: var(--pale-pink);
  height: 405px;
  display: flex;
  justify-content: space-around;
  gap: 12px;
  padding-right: 120px;
`;

const CardWrapper = styled.div`
  margin: auto 0;
  display: flex;
  gap: 12px;
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 25px;
  margin-left: 250px;
  max-width: 345px;
  z-index: 1;
`

const BgWrapper = styled.div`
  position: relative;
  background-color: yellow;
`

const Bg = styled.img`
  position: absolute;
  bottom: 0;
`

function MyMatches() {
  return (
    <Container>
      <BgWrapper>
        <Bg
          src="/assets/bg-my-match.png"
        />
      </BgWrapper>
      <Copy>
        <h1>{"Looking for products that are just simply perfect for you?"}</h1>
        <h3 style={{ fontWeight: "normal" }}>
          Here are some products that we believe match your skin, hair, and
          body! Have we mentioned that they solve your concerns too?
        </h3>
        <Button onClick={() => window.open(FD_MATCH, "_self")} rounded={true}>
          <div style={{ padding: "15px 30px" }}>{"See my Matches"}</div>
        </Button>
      </Copy>
      <CardWrapper>
        <Cards
          match={true}
          byEditor={false}
          line={false}
          productImage="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
          productName="Y.O.U Makeups"
          sectionType="see my matches"
          productRating="4.1"
          productDescription="Rouge Velvet Matte Lip CreamRouge Velvet Matte Lip Cream"
        />
        <Cards
          match={true}
          byEditor={false}
          line={false}
          productImage="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
          productName="Y.O.U Makeups"
          sectionType="see my matches"
          productRating="4.1"
          productDescription="Rouge Velvet Matte Lip CreamRouge Velvet Matte Lip Cream"
        />
        <Cards
          match={true}
          byEditor={false}
          line={false}
          productImage="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
          productName="Y.O.U Makeups"
          sectionType="see my matches"
          productRating="4.1"
          productDescription="Rouge Velvet Matte Lip CreamRouge Velvet Matte Lip Cream"
        />
      </CardWrapper>
    </Container>
  );
}

export default MyMatches;
