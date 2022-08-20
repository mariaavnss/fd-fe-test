import React from "react";

import { FD_EDITORIAL } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";

function EditorChoice() {
  return <React.Fragment>
    <SectionHeader
      title={"Editor's Choice"}
      subtitle={"Curated with love"}
      seeMore={true}
      url={FD_EDITORIAL}
    />

  </React.Fragment>;
}

export default EditorChoice;
