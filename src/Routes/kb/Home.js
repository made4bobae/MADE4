import React, { Component } from "react";
import styled from "styled-components";

import main from "../../assets/image/home/home_main.png";
import main_mobile from "../../assets/image/home/home_main_mobile.png";
import item1 from "../../assets/image/home/home_item_01.png";
import item2 from "../../assets/image/home/home_item_02.png";
import item3 from "../../assets/image/home/home_item_03.png";
import progressBar1 from "../../assets/image/home/progress_bar1.png";
import progressBar2 from "../../assets/image/home/progress_bar2.png";
import progressBar3 from "../../assets/image/home/progress_bar3.png";
import homeWallet from "../../assets/image/home/home_wallet.png";
import homeMall from "../../assets/image/home/home_mall.png";
import googlePlay from "../../assets/image/google-play.png";
import appStore from "../../assets/image/app-store.png";
import { GRAY_COLOR, BLACK_COLOR, WHITE_COLOR } from "../../config/color";
import asset from "../../config/asset";

const MADE_CAFE_ITEMS = [
  {
    title: "아메리카노",
    image: asset.cafe.cafe_menu1
  },
  {
    title: "카페라떼",
    image: asset.cafe.cafe_menu2
  },
  {
    title: "바닐라라떼",
    image: asset.cafe.cafe_menu3
  },
  {
    title: "카페모카",
    image: asset.cafe.cafe_menu4
  },
  {
    title: "카라멜마끼아또",
    image: asset.cafe.cafe_menu5
  },
  {
    title: "더블초코라떼",
    image: asset.cafe.cafe_menu6
  },
  {
    title: "토피넛라떼",
    image: asset.cafe.cafe_menu7
  },
  {
    title: "제주말차라떼",
    image: asset.cafe.cafe_menu8
  },
  {
    title: "프리미엄밀크티",
    image: asset.cafe.cafe_menu9
  },
  {
    title: "레몬차",
    image: asset.cafe.cafe_menu10
  },
  {
    title: "페퍼민트",
    image: asset.cafe.cafe_menu11
  }
];

const HomeContainerWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const HomeMainContainer = styled.div`
  background-image: url(${asset.main});
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 500px;
  padding: 0 20px;
  @media (max-width: 768px) {
    background-image: url(${asset.main});
    background-position: 100%;
    height: 410px;
    align-items: flex-start;
    padding-top: 50px;
  }
`;

const ArticleContainer = styled.div`
  width: 100%;
  height: auto;
`;

const FirstArticleWrap = styled.div`
  padding-top: 140px;
  padding-bottom: 140px;
  background-color: ${BLACK_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${WHITE_COLOR};
`;

const FirstArticleContainer = styled.div`
  width: 768px;
`;

const FirstArticleTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
`;

const FirstArticleItemWrap = styled.div`
  width: 170px;
  @media (max-width: 768px) {
    width: 120px;
  }
`;

const FirstArticleImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const FirstArticleName = styled.div`
  color: ${WHITE_COLOR};
  text-align: center;
  font-weight: 600;
`;

const FirstItemBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 0px;
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <HomeContainerWrap>
        <HomeMainContainer />
        <ArticleContainer>
          <FirstArticleWrap>
            <FirstArticleContainer>
              <FirstArticleTitle>CAFE MADE4 MENU</FirstArticleTitle>
              <FirstItemBox>
                {MADE_CAFE_ITEMS.map(item => {
                  return (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <FirstArticleItemWrap>
                        <FirstArticleImage src={item.image} />
                        <FirstArticleName>{item.title}</FirstArticleName>
                      </FirstArticleItemWrap>
                    </div>
                  );
                })}
              </FirstItemBox>
            </FirstArticleContainer>
          </FirstArticleWrap>
        </ArticleContainer>
      </HomeContainerWrap>
    );
  }
}
