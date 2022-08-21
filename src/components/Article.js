import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

const ImgContex = styled.img`
  border-radius: 15px;
  width: 350px;
`;

const Copy = styled.div`
	width: 350px;
  overflow: hidden;
  white-space: wrap;
`;

function Article({ image, title, author, publishedAt }) {
  return (
    <Wrapper>
      <ImgContex src={image} alt={title} />
      <Copy>
        <h1>{title}</h1>
        <p>
          {author} | {publishedAt}
        </p>
      </Copy>
    </Wrapper>
  );
}

Article.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default Article;
