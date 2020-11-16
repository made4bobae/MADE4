import React, { Component, ReactDOM } from "react";
import styled from "styled-components";

// image
import blog from "../assets/image/blog_icon.png";
import instagram from "../assets/image/instagram_icon.png";
import { BLACK_COLOR, WHITE_COLOR, FOOTER_COLOR } from "../config/color";
import asset from "../config/asset";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${FOOTER_COLOR};
  color: ${WHITE_COLOR};
  padding: 90px 0 120px;
`;

const FooterWrap = styled.div`
  width: 1064px;
  align-items: flex-start;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Image = styled.img`
  height: 30px;
  margin-bottom: 10px;
`;

const FooterItemText = styled.p`
  margin-top: 20px;
`;

const FooterItemTextBold = styled.p`
  font-weight: 600;
`;

const CopyRightContainer = styled.div`
  width: 1064px;
  align-items: flex-start;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  font-weight: 600;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterWrap>
          <ul>
            <li>
              <Image src={asset.logo} alt="MADE4 LOGO" />
            </li>
            <li>
              <FooterItemText>With kitchen,</FooterItemText>
            </li>
            <li>
              <FooterItemText>We made for everything</FooterItemText>
            </li>
            <li>
              <FooterItemText style={{ fontWeight: "bold" }}>
                WE MADE 4 EVERYTHING .
              </FooterItemText>
            </li>
          </ul>
          <ul>
            <li>
              <FooterItemTextBold>Explore</FooterItemTextBold>
            </li>
            <li>
              <FooterItemText>Brand Story</FooterItemText>
            </li>
            <li>
              <FooterItemText>Menu</FooterItemText>
            </li>
            <li>
              <FooterItemText>Store Info</FooterItemText>
            </li>
            <li>
              <FooterItemText>News | Event</FooterItemText>
            </li>
          </ul>
          <ul>
            <li>
              <FooterItemTextBold>Visit</FooterItemTextBold>
            </li>
            <li>
              <FooterItemText>경기 고양시</FooterItemText>
            </li>
            <li>
              <FooterItemText> 일산서구 일산로 531 1층</FooterItemText>
            </li>
          </ul>
          <ul>
            <li>
              <FooterItemTextBold>New Business</FooterItemTextBold>
            </li>
            <li>
              <FooterItemText>made4@gmail.com</FooterItemText>
            </li>
            <li>
              <FooterItemText>070-4325-0531</FooterItemText>
            </li>
          </ul>
          <ul>
            <li>
              <FooterItemTextBold>Follow</FooterItemTextBold>
            </li>
            <li>
              <FooterItemText>Instagram</FooterItemText>
            </li>
          </ul>
        </FooterWrap>
        <CopyRightContainer>
          © 2020 MADE4. All Rights Reserved.
        </CopyRightContainer>
      </FooterContainer>
    );
  }
}
