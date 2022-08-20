import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-outlined/KeyboardArrowRight";

const ArrowIcon = styled(KeyboardArrowRight)`
  width: 20px;
  color: var(--amaranth);

  &:hover {
    color: var(--chinese-black);
  }
`
const Wrapper = styled.a`
  cursor: pointer;
  color: var(--amaranth);
  display: flex;
  align-items: center;

  &:hover {
    color: var(--chinese-black);
  }
`;

function SeeMore({ url }) {
  return (
    <Wrapper onClick={() => window.open(url, "_self")}>
      {"See more"}
      <ArrowIcon />
    </Wrapper>
  );
}

SeeMore.propTypes = {
  url: PropTypes.string,
};

export default SeeMore;
