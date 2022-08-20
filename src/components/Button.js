import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.a`
  cursor: pointer;
  color: var(--white);
  background-color: var(--amaranth);
  margin: 0 auto;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--chinese-black);
  }
`;

function Button({ children, onClick }) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
