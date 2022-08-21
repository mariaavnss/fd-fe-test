import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Star from "./Star";

const Container = styled.div`
  display: inline-block;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 15px;
`;

const EditorWrapper = styled.div`
  display: flex;
  position: relative;
	margin-top: 50px;
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
    props.line ? "1px solid var(--chinese-silver)" : "1px solid var(--white)"};
  border-radius: 15px;
  padding: ${(props) => props.smallPhoto? "5px" : "10px"};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    border: 1px solid var(--amaranth);
  }
`;

const Photo = styled.img`
  border-radius: 50%;
  width: ${(props) => props.smallPhoto? "100px" : "150px"};
	margin: 10px;
`;

const Description = styled.div`
  margin-bottom: 10px;
`;

const TitleWrap = styled.div`
  width: 180px;
  overflow: hidden;
  white-space: wrap;
  font-weight: bolder;
`

const DescWrap = styled.p`
  color: var(--chinese-black);
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Rating = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
`;

function Cards({
  match,
  byEditor,
  line,
  editor,
  role,
  productImage,
  smallPhoto,
  productName,
  sectionType,
  productRating,
  productDescription,
}) {
  return (
    <Container>
      {byEditor && (
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
      <ProductWrapper line={line} smallPhoto={smallPhoto}>
        <Photo src={productImage} alt={productName} smallPhoto={smallPhoto}/>
        <Description>
          {match && (
            <b style={{ color: "var(--amaranth)" }}>{"Match Skin Type"}</b>
          )}
          <Rating>
            <b>{productRating}</b>
            <Star type={sectionType} />
            <span>{"(7)"}</span>
          </Rating>
          <TitleWrap>{productName}</TitleWrap>
          <DescWrap>{productDescription}</DescWrap>
        </Description>
      </ProductWrapper>
    </Container>
  );
}

Cards.propTypes = {
  match: PropTypes.bool,
  byEditor: PropTypes.bool,
  line: PropTypes.bool,
  editor: PropTypes.string,
  role: PropTypes.string,
  productImage: PropTypes.string,
  smallPhoto: PropTypes.bool,
  sectionType: PropTypes.string,
  productRating: PropTypes.string,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
};

export default Cards;
