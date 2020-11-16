import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { POINT_COLOR, WHITE_COLOR } from "../config/color";
import logo from "../assets/image/logo.png";
import asset from "../config/asset";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 99;
  display: flex;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const AllList = styled.ul`
  justify-content: space-between;
  width: 1064px;
  align-items: center;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: "space-between";
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: "space-between";
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 180px;
`;

const SubItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${WHITE_COLOR};
  font-size: 16px;
  border-left: 3px solid ${WHITE_COLOR};
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
// border-bottom: 6px solid
//   ${props => (props.current ? `${POINT_COLOR}` : "transparent")};
// transition: border-bottom 0.5s ease-in-out;

const Image = styled.img`
  height: 30px;
`;

export default withRouter(({ location: { pathname } }) => {
  console.log(pathname, "-----");
  return (
    <Header>
      <AllList>
        <Item>
          <SLink
            to="/kb/"
            style={{
              border: "none",
              justifyContent: "flex-start",
              padding: 0,
              width: "auto"
            }}
          >
            <Image src={asset.logo} alt="MADE4 LOGO" />
          </SLink>
        </Item>
        <List>
          <Item style={{ marginRight: 24 }}>
            <SLink current={pathname === "/"} to="/">
              BRAND STROY
            </SLink>
          </Item>
          <Item>
            <SLink current={pathname === "/"} to="/">
              MENU
              <List>
                <SubItem>
                  <SLink
                    style={{
                      border: "none",
                      padding: 0,
                      fontWeight: 200,
                      marginLeft: 10
                    }}
                  >
                    CAFE
                  </SLink>
                </SubItem>
                <SubItem>
                  <SLink
                    style={{
                      border: "none",
                      padding: 0,
                      fontWeight: 200,
                      marginLeft: 10
                    }}
                  >
                    KITCHEN
                  </SLink>
                </SubItem>
              </List>
            </SLink>
          </Item>
          <Item>
            <SLink current={pathname === "/"} to="/">
              STORE INFO
            </SLink>
          </Item>
          <Item>
            <SLink current={pathname === "/"} to="/">
              NEWS EVENT
            </SLink>
          </Item>
        </List>
      </AllList>
    </Header>
  );
});
