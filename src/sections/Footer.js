import React from "react";
import styled from "styled-components";

import {
  FD_ABOUT_US,
  FD_FEEDBACK,
  FD_CONTACT,
  FD_TNC,
  FD_PRIVACY_POLICY,
  FD_HELP,
  FD_AWARDS,
  FD_NEWSLETTER,
  FD_FB,
  FD_TWT,
  FD_IG,
  FD_YT,
} from "../utils/constants";

import locale_id from "date-fns/locale/id";
import { format } from "date-fns";

const format_id = { locale: locale_id };

const SERVICES = [
  {
    url: { FD_ABOUT_US },
    name: "About Us",
  },
  {
    url: { FD_FEEDBACK },
    name: "Feedback",
  },
  {
    url: { FD_CONTACT },
    name: "Contact",
  },
  {
    url: { FD_TNC },
    name: "Terms & Conditions",
  },
  {
    url: { FD_PRIVACY_POLICY },
    name: "Privacy Policy",
  },
  {
    url: { FD_HELP },
    name: "Help",
  },
  {
    url: { FD_AWARDS },
    name: "Awards",
  },
  {
    url: { FD_NEWSLETTER },
    name: "Newsletter",
  },
];

const SOCMED = [
  {
    icon: "../assets/fb.png",
    alt: "facebook",
    url: { FD_FB },
  },
  {
    icon: "../assets/twitter.png",
    alt: "twitter",
    url: { FD_TWT },
  },
  {
    icon: "../assets/ig.png",
    alt: "instagram",
    url: { FD_IG },
  },
  {
    icon: "../assets/yt.png",
    alt: "youtube",
    url: { FD_YT },
  },
];

const Container = styled.div`
  border-top: 1px solid var(--chinese-silver);
  margin-bottom: 40px;
`;

const Link = styled.a`
  font-weight: bolder;
  color: var(--chinese-black);

  &:hover {
    color: var(--amaranth);
  }
`;

const LogoFD = styled.img`
  width: 150px;
  margin: 10px;
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
`;

function Service() {
  return (
    <div>
      {SERVICES.map((service, index) => (
        <Link key={`socmed-${index}`} href={service.url}>
          {service.name}
        </Link>
      ))}
    </div>
  );
}

function Socmed() {
  return (
    <Socials>
      {SOCMED.map((social, index) => (
        <a href={social.url}>
          <img key={`socmed-${index}`} src={social.icon} alt={social.alt} />
        </a>
      ))}
    </Socials>
  );
}

function Copyright() {
  return (
    <p>
      {"Copyright© 2015 - " +
        format(new Date(), "yyyy", format_id) +
        "Female Daily Network • All rights reserved"}{" "}
    </p>
  );
}

function Footer() {
  return (
    <Container>
      <Service />
      <LogoFD src="../assets/fd-logo.svg" alt="Logo Female Daily Network" />
      <Copyright />
      <Socmed />
    </Container>
  );
}

export default Footer;
