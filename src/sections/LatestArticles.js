import React from "react";

import { FD_BLOG } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";

function LatestArticles() {
  return (
    <React.Fragment>
      <SectionHeader
        title={"Latest Articles"}
        subtitle={"So you can make better purchase decision"}
        seeMore={true}
        url={FD_BLOG}
      />
    </React.Fragment>
  );
}

export default LatestArticles;
