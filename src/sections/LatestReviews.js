import React from "react";
import styled from "styled-components";
// import Carousel from "react-elastic-carousel";

import { FD_REVIEWS } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";
import Iframe from "../components/Iframe";
import ReviewCard from "../components/ReviewCard";

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 35px;
`;

const Container = styled.div`
  padding: 0 150px;
`;

// const breakPoints = [
//   { width: 1, itemsToShow: 2 },
// ];

function LatestReviews() {
  return (
    <React.Fragment>
      <Container>
        <div style={{ width: "680px" }}>
          <SectionHeader
            title={"Latest Reviews"}
            subtitle={"So you can make better purchase decision"}
            seeMore={true}
            url={FD_REVIEWS}
          />
        </div>
        {/* <div className="carousel-wrapper"> */}
          {/* <Carousel breakPoints={breakPoints}> */}
          <CardWrapper>
          <ReviewCard
              productImage={"https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg"}
              productName={"Tony Moly"}
              productDesc={"Delight Tony Tint"}
              comment={"liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi"}
              user={"atikaxr"}
              profile={"Oily"}
            />
            <ReviewCard
              productImage={"https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg"}
              productName={"Tony Moly"}
              productDesc={"Delight Tony Tint"}
              comment={"liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi"}
              user={"atikaxr"}
              profile={"Oily"}
            />
            <Iframe adsIndex="MR 2" />
          </CardWrapper>
            
          {/* </Carousel> */}
        {/* </div> */}
        
      </Container>
    </React.Fragment>
  );
}

export default LatestReviews;
