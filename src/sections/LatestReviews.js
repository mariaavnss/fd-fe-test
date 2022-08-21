import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Carousel from "react-elastic-carousel";

import { FD_REVIEWS, API_URL } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";
import Iframe from "../components/Iframe";
import ReviewCard from "../components/ReviewCard";
import { latestReview } from "../data/Data";

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 35px;
`;

const Container = styled.div`
  padding: 0 150px;
  margin-bottom: 80px;
`;

// const breakPoints = [
//   { width: 2, itemsToShow: 2 },
// ];

function LatestReviews() {
  const [latestReview_, setLatestReviewList] = useState([]);

  useEffect(() => {
    async function fetchLatestReviewList() {
      try {
        const requestUrl = API_URL;
        const response = await fetch(requestUrl); //error cors 429
        const responseJSON = await response.json();
        // console.log(responseJSON);
        setLatestReviewList(responseJSON["latest review"]);
      } catch (err) {
        console.log("###error###");
        console.log(err);
      }
    }
    fetchLatestReviewList();
  });

  return (
    <Container>
      <div style={{ minWidth: "900px" }}>
        <SectionHeader
          title={"Latest Reviews"}
          subtitle={"So you can make better purchase decision"}
          seeMore={true}
          url={FD_REVIEWS}
        />
      </div>
      {/* <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}> */}
      <CardWrapper>
        {latestReview.map((data, index) => (
          <ReviewCard
            key={`latest review-${index}`}
            productImage={data.product.image}
            productName={data.product.name}
            productDesc={data.product.desc}
            comment={data.comment}
            user={data.user}
            profile={data.profile[0] + ", " + data.profile[1] + ", "+ data.profile[2] + ", " + data.profile[3]}
          />
        ))}
        <Iframe adsIndex="MR 2" />
      </CardWrapper>
      {/* </Carousel>
      </div> */}
    </Container>
  );
}

export default LatestReviews;
