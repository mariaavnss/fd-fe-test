import React from "react";

import { FD_FORUM } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";

function PopularGroups() {
  return (
    <React.Fragment>
      <SectionHeader
        title={"Popular Groups"}
        subtitle={"Where the beauty TALK are"}
        seeMore={true}
        url={FD_FORUM}
      />
    </React.Fragment>
  );
}

export default PopularGroups;
