import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SeeMore from "../components/SeeMore";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
`

function SectionHeader({seeMore, title, subtitle, url}) {
  return(
    <Wrapper>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      
      {seeMore && <SeeMore url={url}/>}
    </Wrapper>
  )
}

SectionHeader.propTypes = {
  seeMore: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  url: PropTypes.string,
};

export default SectionHeader;