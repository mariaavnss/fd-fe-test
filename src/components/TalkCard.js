import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 20px 5px 50px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;

  &:hover {
    box-shadow: 3px 3px 376px -98px rgba(220, 41, 79, 1);
    -webkit-box-shadow: 3px 3px 376px -98px rgba(220, 41, 79, 1);
    -moz-box-shadow: 3px 3px 376px -98px rgba(220, 41, 79, 1);
  }
`;

const SpeakerPhoto = styled.img`
  border-radius: 50%;
`;

function TalkCard({ speakerPhoto }) {
  return (
    <Wrapper>
      <SpeakerPhoto src={speakerPhoto} alt="Speaker of Embrace the Curl" />
      <h1>{"Embrace The Curl"}</h1>
      <img src="../assets/group-preview.png" alt="Group Preview Icon" />
      <p style={{ color: "var(--quartz)" }}>
        {"May our curls pop and never stop"}
      </p>
    </Wrapper>
  );
}

TalkCard.propTypes = {
  speakerPhoto: PropTypes.string,
};

export default TalkCard;
