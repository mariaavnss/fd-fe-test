import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StarIcon = styled.img`
  width: 20px;
  margin-top: -2px;
`


function FourStar() {
  return (
    <div>
      <StarIcon src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <StarIcon src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <StarIcon src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <StarIcon src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <StarIcon src="/assets/star-icon-off.png" alt="Gray Star Icon" />
    </div>
  );
}

function ThreeStar() {
  return (
    <div>
      <StarIcon src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <StarIcon src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <StarIcon src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <StarIcon src="/assets/star-icon-off.png" alt="Grey Star Icon" />
      <StarIcon src="/assets/star-icon-off.png" alt="Grey Star Icon" />
    </div>
  );
}

function Star({ type }) {
  switch (type) {
    case "editor's choice":
      return <FourStar />;
    case "see my matches":
      return <FourStar />;
    case "latest review":
      return <ThreeStar />;
    default:
      return <React.Fragment />;
  }
}

Star.propTypes = {
  type: PropTypes.string,
};

export default Star;
