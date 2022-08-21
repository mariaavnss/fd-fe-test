import React from "react";
import styled from "styled-components";

import { FD_VIDEO_BLOG } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";

const Container = styled.div`
  padding: 0 150px;
`;

const Small = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const EmbededVideo = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  justify-content: center;
`

function LatestVideos() {
  return (
    <Container>
      <SectionHeader
        title={"Latest Videos"}
        subtitle={"Watch and learn, ladies"}
        seeMore={true}
        url={FD_VIDEO_BLOG}
      />
      <EmbededVideo>
      <iframe
        width="731"
        height="410"
        src="https://www.youtube.com/embed/6LUdS0VFOJc"
      />
      <Small>
      <iframe
        width="352"
        height="196"
        src="https://www.youtube.com/embed/FvbNZd-IxK4"
      />
      <iframe
        width="352"
        height="196"
        src="https://www.youtube.com/embed/vbp18U85n1E"
      />
      </Small>
      </EmbededVideo>
    </Container>
  );
}

export default LatestVideos;
