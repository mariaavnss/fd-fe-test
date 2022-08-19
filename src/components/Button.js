import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Wrapper = Styled.a`
  cursor: pointer;
  padding: 20px 30px;
  color: var(--white);
  background-color: var(--amaranth);
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"}

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
