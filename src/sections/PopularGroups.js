import React from "react";
import styled from "styled-components";

import { FD_FORUM } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";
import TalkCard from "../components/TalkCard";

const SRC_ITEMS = [
  { url: "../assets/speaker-1.png" },
  { url: "../assets/speaker-2.png" },
  { url: "../assets/speaker-3.png" },
  { url: "../assets/speaker-4.png" },
];

const Container = styled.div`
  padding: 0 150px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

function PopularGroups() {
  return (
    <Container>
      <SectionHeader
        title={"Popular Groups"}
        subtitle={"Where the beauty TALK are"}
        seeMore={true}
        url={FD_FORUM}
      />
      <CardWrapper>
        {SRC_ITEMS.map((speaker, index) => (
          <TalkCard speakerPhoto={speaker.url} key={`speaker-${index}`} />
        ))}
      </CardWrapper>
    </Container>
  );
}

export default PopularGroups;
