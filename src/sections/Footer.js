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
  FD_APP_STORE,
  FD_GOOGLE_PLAY,
} from "../utils/constants";

import Iframe from "../components/Iframe";

import locale_id from "date-fns/locale/id";
import { format } from "date-fns";

const format_id = { locale: locale_id };

const SERVICES_LEFT = [
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
];
const SERVICES_MID = [
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
];
const SERVICES_RIGHT = [
  {
    url: { FD_AWARDS },
    name: "Awards",
  },
  {
    url: { FD_NEWSLETTER },
    name: "Newsletter",
  },
  {
    url: null,
    name: "",
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
  padding: 0 150px;
`;

const Link = styled.a`
  font-weight: bolder;
  color: var(--chinese-black);
  font-size: 14px;

  &:hover {
    color: var(--amaranth);
  }
`;

const LogoFD = styled.img`
  width: 150px;
  margin-top: 10px;
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  margin: 50px auto;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

const ServicesWrapper = styled.div`
  display: flex;
  gap: 200px;
  margin: 30px auto;
`;

const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin: 30px auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Service() {
  return (
    <ServicesWrapper>
      <Grid>
        {SERVICES_LEFT.map((service, index) => (
          <Link key={`socmed-${index}`} href={service.url}>
            {service.name}
          </Link>
        ))}
      </Grid>
      <Grid>
        {SERVICES_MID.map((service, index) => (
          <Link key={`socmed-${index}`} href={service.url}>
            {service.name}
          </Link>
        ))}
      </Grid>
      <Grid>
        {SERVICES_RIGHT.map((service, index) => (
          <Link key={`socmed-${index}`} href={service.url}>
            {service.name}
          </Link>
        ))}
      </Grid>
    </ServicesWrapper>
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
    <p style={{ marginTop: "10px", fontSize: "14px" }}>
      {"Copyright© 2015 - " +
        format(new Date(), "yyyy", format_id) +
        " Female Daily Network • All rights reserved"}{" "}
    </p>
  );
}

function Download() {
  return (
    <DownloadWrapper>
      <b style={{ color: "var(--chinesse-black)", fontSize: "14px" }}>
        {"Download Our Mobile App"}
      </b>
      <div style={{ display: "flex" }}>
        <a href={FD_APP_STORE} style={{ marginRight: "30px" }}>
          <img
            src="../assets/app-store.png"
            alt="Female Daily - Beauty Review on Apple Store"
          />
        </a>
        <a href={FD_GOOGLE_PLAY}>
          <img
            src="../assets/google-play.png"
            alt="Female Daily - on Google Play"
          />
        </a>
      </div>
    </DownloadWrapper>
  );
}

function Footer() {
  return (
    <Container>
      <Wrapper>
        <div>
          <Service />
          <LogoFD src="../assets/fd-logo.svg" alt="Logo Female Daily Network" />
          <Copyright />
        </div>
        <div>
          <Download />
          <Socmed />
        </div>
      </Wrapper>
      <Iframe adsIndex="Bottom Frame" />
    </Container>
  );
}

export default Footer;
