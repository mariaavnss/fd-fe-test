import React from "react";

import { FD_B2B } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";

function TopBrands() {  return (
  <React.Fragment>
    <SectionHeader
      title={"Top Brands"}
      subtitle={"We all know and love"}
      seeMore={true}
      url={FD_B2B}
    />
  </React.Fragment>
);
}

export default TopBrands;
