import React from "react";

import styled from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { Search } from "@styled-icons/bootstrap/Search";

import Button from "../components/Button";

const BurgerMenu = styled(Menu)`
  width: 30px;
`;

const SearchIcon = styled(Search)`
  width: 30px;
  color: var(--spanish-gray);
`;

const SearchBar = styled.div`
  width: 945px;
  height: 39px;
  border: 1px solid var(--chinese-silver);

  display: flex;
  gap: 10px;
  line-height: 22px;
  font-size: 22px;
  padding: 10px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  gap: 30px;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--chinese-silver);
`;

function Navigation() {
  return (
    <Container>
      <Wrapper>
        <BurgerMenu />
        <img
          src={"/assets/fd-logo.svg"}
          alt="Female Daily Company Logo"
          id="fd-logo"
        />
        <SearchBar>
          <SearchIcon />
          <p>{"Search products, articles, topics, brands, etc"}</p>
        </SearchBar>
      </Wrapper>
      <Button 
        onClick={() => window.open("https://account.femaledaily.com/")}
      >
        <img src={"/assets/user-icon.png"} alt="User Login Icon"/>
        {"LOGIN / SIGNUP"}
      </Button>
      
    </Container>
  );
}

export default Navigation;
