import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Star from "./Star";

const Container = styled.div`
  display: inline-block;
  margin: 0 auto;
  background-color: var(--white);
`;

const EditorWrapper = styled.div`
  display: flex;
  position: relative;
`;

const EditorPhoto = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 75px;
  position: absolute;
  left: 20px;
  top: -5px;
`;

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 0 5px 100px;
`;

const ProductWrapper = styled.div`
  border: ${(props) =>
    props.sectionType === "trending this week"
      ? "none"
      : "1px solid var(--chinese-silver)"};
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    border: 1px solid var(--amaranth);
  }
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 150px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Rating = styled.div`
  display: flex;
  gap: 5px;
`;

function Cards({
  editor,
  role,
  productImage,
  productName,
  sectionType,
  productRating,
  productDescription,
}) {
  return (
    <Container>
      {sectionType === "editor's choice" && (
        <EditorWrapper>
          <EditorPhoto
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
            alt={editor}
          />
          <Editor>
            <b>{editor}</b>
            <span style={{ color: "var(--spanish-gray)", fontSize: "12px" }}>
              {role}
            </span>
          </Editor>
        </EditorWrapper>
      )}
      <ProductWrapper>
        <Photo src={productImage} alt={productName} />
        <Description>
          {sectionType === "see my matches" && (
            <b style={{ color: "var(--amaranth)" }}>{"Match Skin Type"}</b>
          )}
          <Rating>
            <b>{"4.1"}</b>
            <Star type={sectionType} />
            <span>{productRating}</span>
          </Rating>
          <b>{productName}</b>
          <span>{productDescription}</span>
        </Description>
      </ProductWrapper>
    </Container>
  );
}

Cards.propTypes = {
  editor: PropTypes.string,
  role: PropTypes.string,
  productImage: PropTypes.string,
  sectionType: PropTypes.string,
  productRating: PropTypes.string,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
};

export default Cards;
