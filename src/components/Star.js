import React from "react";
import PropTypes from "prop-types";

function FourStar() {
  return (
    <div>
      <img src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <img src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <img src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <img src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <img src="/assets/star-icon-off.png" alt="Gray Star Icon" />
    </div>
  );
}

function ThreeStar() {
  return (
    <div>
      <img src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <img src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <img src="/assets/star-icon-on.png" alt="Red Star Icon" />
      <img src="/assets/star-icon-off.png" alt="Grey Star Icon" />
      <img src="/assets/star-icon-off.png" alt="Grey Star Icon" />
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
