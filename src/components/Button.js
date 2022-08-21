import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.a`
  cursor: pointer;
  color: var(--white);
  background-color: var(--amaranth);
  border-radius: ${(props) => (props.rounded ? "5px" : "none")};
  display: flex;
  align-items: center;

  &:hover {
    color: var(--chinese-black);
  }
`;

function Button({ children, onClick, rounded }) {
  return (
    <Wrapper onClick={onClick} rounded={rounded}>
      {children}
    </Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
};

export default Button;
