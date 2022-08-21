import React from "react";

import { HOST_FD_STUDIO } from '../utils/constants';

import styled from "styled-components";

const MENU_ITEMS = [
  {
    label: 'SKINCARE',
    url: `${HOST_FD_STUDIO}/category/shop-all/skincare`,
  },
  {
    label: 'MAKE UP',
    url: `${HOST_FD_STUDIO}/category/shop-all/make-up`,
  },
  {
    label: 'BODY',
    url: `${HOST_FD_STUDIO}/category/shop-all/body`,
  },
  {
    label: 'HAIR',
    url: `${HOST_FD_STUDIO}/category/shop-all/hair`,
  },
  {
    label: 'FRAGARANCE',
    url: `${HOST_FD_STUDIO}/category/shop-all/fragrance`,
  },
  {
    label: 'NAILS',
    url: `${HOST_FD_STUDIO}/category/shop-all/nails`,
  },
  {
    label: 'TOOLS',
    url: `${HOST_FD_STUDIO}/category/shop-all/beauty-tools`,
  },
  {
    label: 'BRANDS',
    url: `${HOST_FD_STUDIO}/brands`,
  },
]

const MenuLink = styled.a`
  cursor: pointer;
  margin: 0 20px;
  font-weight: bold;
  color: var(--chinese-black);

  &:hover {
    color: var(--amaranth);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--chinese-silver);
  padding: 10px 20px;
  background-color: var(--white);
  margin-bottom: 15px;
`;

function MenuNav() {
  return(
    <Container>
      {MENU_ITEMS.map((menu, index) => (
        <MenuLink href={menu.url} key={`menu-${index}`}>
          {menu.label}
        </MenuLink>
      ))}
    </Container>
  )
}

export default MenuNav;
