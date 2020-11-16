import React, { Component } from "react";
import styled from "styled-components";

import main from "../../assets/image/event/event_main.png";
import main_mobile from "../../assets/image/event/event_main_mobile.png";
import item1 from "../../assets/image/home/home_item_01.png";
import item2 from "../../assets/image/home/home_item_02.png";
import item3 from "../../assets/image/home/home_item_03.png";
import progressBar1 from "../../assets/image/home/progress_bar1.png";
import progressBar2 from "../../assets/image/home/progress_bar2.png";
import progressBar3 from "../../assets/image/home/progress_bar3.png";
// import evnetChallenge from "../../assets/image/event/event_challenge.png";
import eventWallet from "../../assets/image/event/event_wallet.png";
import eventInsureum from "../../assets/image/event/event_insureum.png";
// import googlePlay from "../../assets/image/google-play.png";
// import appStore from "../../assets/image/app-store.png";
import { GRAY_COLOR } from "../../config/color";

const HomeContainerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const HomeMainContainer = styled.div`
  background-image: url(${main});
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  background-position: 50%;
  background-position-y: -20px;
  width: 100%;
  height: 900px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    background-image: url(${main_mobile});
    background-position: 100%;
    height: 420px;
    align-items: flex-start;
    padding-top: 25px;
  }
`;

const HomeMainWidth = styled.div`
  width: 1104px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const HomeArticleWidth = styled.div`
  width: 1104px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const HomeSecondArticleWidth = styled.div`
  width: 1104px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 1.3125;
  margin-bottom: 62px;
  text-align: right;
  margin-top: 220px;
  @media (max-width: 768px) {
    font-size: 23px;
    margin-bottom: 6px;
    text-align: center;
    margin-top: 0px;
  }
`;

const HomeSubtitle = styled.h2`
  font-weight: 300;
  font-size: 30px;
  line-height: 1.3125;
  text-align: right;
  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
    font-weight: 400;
  }
`;

const MissionTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.3125;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const MissionSubTitle = styled.h3`
  font-size: 20px;
  line-height: 1.3125;
  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;

const HomeMissonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  padding: 0 20px;
  background-color: white;
  @media (max-width: 768px) {
    padding: 40px 0 0px;
    height: auto;
  }
`;

const HomeInsureumContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  padding: 0 20px;
  background-color: ${GRAY_COLOR};
  @media (max-width: 768px) {
    padding: 40px 0 0px;
    height: auto;
  }
`;

const HomeMallContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  padding: 0 20px;
  background-color: white;
  @media (max-width: 768px) {
    padding: 40px 0 0px;
    height: auto;
  }
`;

const ChallengeImage = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: 100px;
  width: 400px;
  height: 100%;
  @media (max-width: 768px) {
    width: 184px;
    height: 340px;
    background-position-y: 40px;
  }
`;

const WalletImage = styled.div`
  background-image: url(${eventWallet});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: 100px;
  width: 400px;
  height: 100%;
  @media (max-width: 768px) {
    width: 184px;
    height: 340px;
    background-position-y: 40px;
  }
`;

const MallImage = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  width: 600px;
  height: 500px;
  @media (max-width: 768px) {
    width: 100%;
    height: 286px;
    margin: 20px 0;
  }
`;

const PCMissionTextWrap = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const PCSecondMissionTextWrap = styled.div`
  display: block;
  flex: 1;
  margin-left: 150px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMissionTextWrap = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
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
        <HomeMainContainer>
          <HomeMainWidth>
            <MobileMissionTextWrap>
              <HomeTitle>
                카카오톡으로 시작하는 <br /> Klip 런칭 이벤트{" "}
              </HomeTitle>{" "}
              <HomeSubtitle>걷는만큼 인슈어리움으로 보상받자!</HomeSubtitle>{" "}
            </MobileMissionTextWrap>{" "}
            <PCMissionTextWrap>
              <HomeTitle>
                카카오톡으로 시작하는 <br /> Klip 런칭 이벤트{" "}
              </HomeTitle>{" "}
              <HomeSubtitle>
                걷는만큼 인슈어리움으로 <br /> 보상받자!
              </HomeSubtitle>{" "}
            </PCMissionTextWrap>{" "}
          </HomeMainWidth>{" "}
        </HomeMainContainer>{" "}
        <HomeMissonContainer>
          <HomeArticleWidth>
            <div>
              <MissionTitle>디지털 지갑 Klip 출시 기념 </MissionTitle>{" "}
              <MissionSubTitle>
                특별 미션을 통하여 인슈어리움 적립을 두배로 <br /> (1, 000, 000
                ISR 소진시 까지){" "}
              </MissionSubTitle>{" "}
            </div>{" "}
            <ChallengeImage />
          </HomeArticleWidth>{" "}
        </HomeMissonContainer>{" "}
        <HomeInsureumContainer>
          <HomeSecondArticleWidth>
            <MobileMissionTextWrap>
              <MissionTitle>
                인슈어리움을 <br /> 간편하게 이동{" "}
              </MissionTitle>{" "}
              <MissionSubTitle>
                빠르고 안전한 Klip을 경험해보세요.{" "}
              </MissionSubTitle>{" "}
            </MobileMissionTextWrap>{" "}
            <WalletImage />
            <PCSecondMissionTextWrap>
              <MissionTitle>
                인슈어리움을 <br /> 간편하게 이동{" "}
              </MissionTitle>{" "}
              <MissionSubTitle>
                빠르고 안전한 Klip을 경험해보세요.{" "}
              </MissionSubTitle>{" "}
            </PCSecondMissionTextWrap>{" "}
          </HomeSecondArticleWidth>{" "}
        </HomeInsureumContainer>{" "}
        <HomeMallContainer>
          <HomeArticleWidth>
            <div>
              <MissionTitle>
                획득한 인슈어리움으로 <br /> 프로텍션을 구매해보세요{" "}
              </MissionTitle>{" "}
              <MissionSubTitle>
                갑자기 여행지에서 비나 눈이 올 경우 <br /> 인슈어리움으로
                보상해드립니다.{" "}
              </MissionSubTitle>{" "}
            </div>{" "}
            <MallImage />
          </HomeArticleWidth>{" "}
        </HomeMallContainer>{" "}
      </HomeContainerWrap>
    );
  }
}
