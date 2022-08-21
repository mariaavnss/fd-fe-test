import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Star from "./Star";

const Wrapper = styled.div`
  border: 1px solid var(--chinese-silver);
  border-radius: 15px;
  padding: 15px;
  width: 350px;
  position: relative;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--chinese-silver);
  gap: 10px;
`;

const ProductPhoto = styled.img`
  width: 70px;
`;

const Rating = styled.div`
  margin: 10px auto;
`;

const Comment = styled.div`
  color: var(--chinese-black);
  word-break: break-all;
  margin-bottom: 20px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  position: absolute;
  left: 45px;
  bottom: -80px;
`;

const UserPhoto = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 65px;
`;

const UserIdentity = styled.p`
  font-size: ${(props) => props.fontSize};
`;

function ReviewCard({
  productImage,
  productName,
  productDesc,
  comment,
  user,
  profile,
}) {
  return (
    <Wrapper>
      <Product>
        <ProductPhoto src={productImage} alt={productName} />
        <div>
          <h1>{productName}</h1>
          <p style={{ color: "var(--chinese-black)" }}>{productDesc}</p>
        </div>
      </Product>
      <Rating>
        <Star type={"latest review"} />
      </Rating>
      <Comment>{comment}</Comment>
      <User>
        <UserPhoto
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
          alt={user}
        />
        <UserIdentity fontSize="16px">{user}</UserIdentity>
        <UserIdentity fontSize="12px">{profile}</UserIdentity>
      </User>
    </Wrapper>
  );
}

ReviewCard.propTypes = {
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productDesc: PropTypes.string,
  comment: PropTypes.string,
  user: PropTypes.string,
  profile: PropTypes.string,
};

export default ReviewCard;
