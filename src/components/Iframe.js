import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  background-color: var(--chinese-silver);
  border: 1px solid var(--spanish-gray);
  width: ${(props) => (props.adsIndex == "MR 2" ? "300px" : "970px")};
  height: ${(props) =>
    props.adsIndex == "Top Frame" || props.adsIndex == "Bottom Frame"
      ? "50px"
      : "250px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Ads(props) {
  return (
    <Container adsIndex={props.adsIndex}>
      {props.adsIndex + " " + props.size} {/*replace this with <img/> to add ads */}
    </Container>
  );
}

function Iframe({ adsIndex }) {
  switch (adsIndex) {
    case "Top Frame":
      return <Ads adsIndex={adsIndex} size="970x250"/>
    case "Billboard":
      return <Ads adsIndex={adsIndex} size="970x250"/>
    case "Horizontal":
      return <Ads adsIndex={adsIndex} size="970x50"/>
    case "MR 2":
      return <Ads adsIndex={adsIndex} size="300x50"/>
    case "Bottom Frame":
      return <Ads adsIndex={adsIndex} size="970x50, 468x60, 320x50"/>
    default:
      return <div style={{ textAlign: "center" }}>{"No Ads"}</div>;
  }
}

Iframe.propTypes = {
  adsIndex: PropTypes.string,
};

export default Iframe;
