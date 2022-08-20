import React from "react";

import { FD_REVIEWS } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";

function LatestReviews() {
  return (
    <React.Fragment>
      <SectionHeader
        title={"Latest Reviews"}
        subtitle={"So you can make better purchase decision"}
        seeMore={true}
        url={FD_REVIEWS}
      />
    </React.Fragment>
  );
}

export default LatestReviews;
