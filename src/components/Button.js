import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.a`
  cursor: pointer;
  color: var(--white);
  background-color: var(--amaranth);
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"}
  margin: 0 auto;
  letter-spacing:0px;
  transition: background-color 0.3s;
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
