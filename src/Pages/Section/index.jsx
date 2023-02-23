/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import Korean from "../../Imgs/한국어 대응.png";
import * as S from "./style";

const Section = () => {
  const [nowImg, setNowImg] = useState(0);

  const TitleImgs = [
    "https://www.nintendo.co.kr/front_images/banner/rolling/267/f1fcdd291cf8d709584fab3e10d0d672.jpg",
    "https://www.nintendo.co.kr/front_images/banner/rolling/267/dce8c44d38e4a96bf48902a6b7f8a18e.jpg",
    "https://www.nintendo.co.kr/front_images/banner/rolling/267/8b096b1707259b9ef16bc9e83c0aa09a.png",
    "https://www.nintendo.co.kr/front_images/banner/rolling/267/5174cb6fdf772cad5f0813d9feddbdfb.jpg",
    "https://www.nintendo.co.kr/front_images/banner/rolling/267/5fa0a6cd64bdd9b4e5dacb0b1332159c.jpg",
    "https://www.nintendo.co.kr/front_images/banner/rolling/267/b5fd2bea25455cc1e9133a361c2b07b2.jpg",
    "https://www.nintendo.co.kr/front_images/banner/rolling/267/5877976ba36bc6f3a8674d6a1be10455.jpg",
    "https://www.nintendo.co.kr/front_images/banner/rolling/267/dbfa6d5b3ff44975f2593ec6ea5364f9.jpg",
  ];

  const EventBaordImgs = [
    "https://www.nintendo.co.kr/front_images/news/1208/546f7a65c6cf8e4b444badee72d0ebf5.jpg",
    "https://www.nintendo.co.kr/front_images/news/1203/743351246e7765709b7cc3e37b35168b.png",
    "https://www.nintendo.co.kr/front_images/news/1205/56d4e3e5b13cecdc4aa2ea1013e321b3.jpg",
    "https://www.nintendo.co.kr/front_images/news/1201/c6d7abcbcaa591990babc37c55d53b86.jpg",
    "https://www.nintendo.co.kr/front_images/news/1200/8f834a98e0c43e30de13928f149c9678.jpg",
    "https://www.nintendo.co.kr/front_images/news/1190/9299a30e4e7426982bfc4308fe252838.jpg",
    "https://www.nintendo.co.kr/front_images/news/1191/51bff6e430bc5906099f81f000ed2c31.jpg",
    "https://www.nintendo.co.kr/front_images/news/1199/c00510bb5bedf31f938f872659f915b0.jpg",
    "https://www.nintendo.co.kr/front_images/sw/switch/3032/b3d35fb0683afa1f5706fe40f3c890f4.png",
    "https://www.nintendo.co.kr/front_images/sw/switch/2809/385f4e593a96d851a17fffe1e12142fd.jpg",
    "https://www.nintendo.co.kr/front_images/sw/switch/2568/d4020211358f3384e519bfc5d4a6cc0b.jpg",
    "https://www.nintendo.co.kr/front_images/sw/switch/2882/61a55c3c2004d8dd30a6a4047e9b007d.jpg",
    "https://www.nintendo.co.kr/front_images/sw/switch/2218/146074fcb32b408c590de59e155c0b2d.jpg",
    "https://www.nintendo.co.kr/front_images/sw/switch/427/427.jpg",
  ];

  const GameBanner = [
    "	https://www.nintendo.co.kr/images/renew/main/banner_main_bottom01.jpg",
    "	https://www.nintendo.co.kr/images/renew/main/banner_main_bottom02.jpg",
    "	https://www.nintendo.co.kr/images/renew/main/banner_main_bottom03.jpg",
    "	https://www.nintendo.co.kr/images/renew/main/banner_main_bottom04.jpg",
    "	https://www.nintendo.co.kr/images/renew/main/banner_main_bottom05.jpg",
    "https://www.nintendo.co.kr/images/renew/main/banner_main_bottom06.jpg",
  ];

  return (
    <section>
      <S.Container>
        <S.TitleImg backGroundImg={TitleImgs[nowImg]}></S.TitleImg>
        <S.SlideImgBtnWrap
          css={css`
            position: relative;
          `}
        >
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              css={css`
                position: absolute;
                width: 1.25rem;
                height: 1.9375rem;
                cursor: pointer;

                left: 45%;
              `}
              onClick={() => {
                if (nowImg === 0) {
                  setNowImg(7);
                } else {
                  setNowImg(nowImg - 1);
                }
              }}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              css={css`
                position: absolute;
                width: 1.25rem;
                height: 1.9375rem;
                cursor: pointer;

                right: 45%;
              `}
              onClick={() => {
                if (nowImg === 7) {
                  setNowImg(0);
                } else {
                  setNowImg(nowImg + 1);
                }
              }}
            />
          </div>
          <div
            css={css`
              font-size: 1.25rem;

              position: absolute;
              top: 50%;
              left: 50%;

              transform: translate(-50%, -50%);
            `}
          >
            <span>{nowImg + 1}</span>/<span>8</span>
          </div>
        </S.SlideImgBtnWrap>
        <S.EventBoards>
          <h2
            css={css`
              font-size: 1.625rem;
              font-weight: 700;
              letter-spacing: -0.085em;
            `}
          >
            새롭게 알려 드립니다
            <span
              css={css`
                margin-left: 0.6875rem;
                font-size: 0.9375rem;
                font-weight: normal;
                letter-spacing: -0.01em;
                display: inline-block;
                vertical-align: bottom;
              `}
            >
              News & Update
            </span>
          </h2>
          <span
            css={css`
              position: absolute;
              top: 0px;
              right: 0;
              color: #e60012;
              width: 1rem;
              height: 1rem;
              background-image: url(https://www.nintendo.co.kr/images/renew/main/icon_more.png);
            `}
          ></span>
          <S.EventBoardsWrap>
            <S.Boards>
              <div>
                <S.BoardImg backGroundImg={EventBaordImgs[0]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  Nintendo Switch
                </div>
                <S.IntroTitle height="4.125rem">
                  『베요네타 오리진:세레자와 길을 잃은 악마』 최신 정보 공개.
                  수수께끼 풀기와 전투를 파워업시키는 「엘레멘트의 힘」을 소개.
                </S.IntroTitle>
                <S.BoardPostDate>
                  2023.01.17
                  <br />
                  Nintendo Switch
                </S.BoardPostDate>
              </div>

              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[1]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  뉴스
                </div>
                <S.IntroTitle height="4.125rem">
                  『스플래툰 3』 실력을 겨뤄보세요! 아이파크몰에서 「스플래툰 3
                  이벤트 매치」 개최!
                </S.IntroTitle>
                <S.BoardPostDate>
                  2023.02.16
                  <br />
                  Nintendo Switch
                </S.BoardPostDate>
              </div>

              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[2]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  뉴스
                </div>
                <S.IntroTitle height="4.125rem">
                  지금부터 시작하는 『젤다의 전설 브레스 오브 더 와일드』
                  홈페이지가 공개되었습니다.
                </S.IntroTitle>
                <S.BoardPostDate>
                  2023.02.16
                  <br />
                  Nintendo Switch
                </S.BoardPostDate>
              </div>

              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[3]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  뉴스
                </div>
                <S.IntroTitle height="4.125rem">
                  「별의 커비 30주년 팝업 스토어」 특설 페이지가 공개되었습니다.
                </S.IntroTitle>
                <S.BoardPostDate>
                  2023.02.15
                  <br />
                  Nintendo Switch
                </S.BoardPostDate>
              </div>
            </S.Boards>
            <S.Boards
              css={css`
                margin-top: 2.5rem;
              `}
            >
              <div>
                <S.BoardImg backGroundImg={EventBaordImgs[4]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  뉴스
                </div>
                <S.IntroTitle height="4.125rem">
                  언제나 커비와 『안아줘, 커비』 낭독 영상 제6탄이
                  공개되었습니다.
                </S.IntroTitle>
                <S.BoardPostDate>
                  2023.02.15
                  <br />
                  Nintendo Switch
                </S.BoardPostDate>
              </div>

              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[5]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  뉴스
                </div>
                <S.IntroTitle height="4.125rem">
                  DDP에서 「포켓몬스터스칼렛・바이올렛」 체험 이벤트가 개최!
                </S.IntroTitle>
                <S.BoardPostDate>
                  2023.02.10
                  <br />
                  Nintendo Switch
                </S.BoardPostDate>
              </div>

              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[6]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  뉴스
                </div>
                <S.IntroTitle height="4.125rem">
                  『젤다의 전설 티어스 오브 더 킹덤』, 『피크민 4』,
                  『메트로이드 프라임 리마스터』, 『베요네타 오리진: 세레자와
                  길을 잃은 악마』 등, Nintendo Switch로 발매되는 타이틀과
                  서비스의 최신 정보를 전달!
                </S.IntroTitle>
                <S.BoardPostDate>
                  2023.02.09
                  <br />
                  Nintendo Switch
                </S.BoardPostDate>
              </div>

              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[8]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  뉴스
                </div>
                <S.IntroTitle height="4.125rem">
                  『별의 커비 Wii 디럭스』의 공식 소개 페이지가 공개되었습니다.
                </S.IntroTitle>
                <S.BoardPostDate>
                  2023.02.13
                  <br />
                  Nintendo Switch
                </S.BoardPostDate>
              </div>
            </S.Boards>
          </S.EventBoardsWrap>
        </S.EventBoards>
        <S.EshopBanner></S.EshopBanner>
        <S.MainGamesWrap>
          <h2
            css={css`
              font-size: 1.625rem;
              font-weight: 700;
              letter-spacing: -0.085em;
            `}
          >
            주요 소프트웨어
            <span
              css={css`
                margin-left: 0.6875rem;
                font-size: 0.9375rem;
                font-weight: normal;
                letter-spacing: -0.01em;
                display: inline-block;
                vertical-align: bottom;
              `}
            >
              Game Title
            </span>
          </h2>
          <S.EventBoardsWrap>
            <S.Boards>
              <div>
                <S.BoardImg backGroundImg={EventBaordImgs[8]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  Nintendo Switch
                  <span
                    css={css`
                      float: right;
                      display: flex;
                      justify-content: space-between;
                      width: 3.4231rem;
                    `}
                  >
                    <S.GameKategory>PK</S.GameKategory>
                    <S.GameKategory>DL</S.GameKategory>
                  </span>
                </div>
                <S.IntroTitle height="2.75rem">
                  파이어 엠블렘 Engage
                </S.IntroTitle>
                <S.BoardPostDate
                  css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  2023.01.20
                  <br />
                  한국닌텐도
                  <img
                    src={Korean}
                    css={css`
                      width: 3.75rem;
                      height: 2.25rem;
                      float: right;
                    `}
                  />
                </S.BoardPostDate>
              </div>
              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[5]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  Nintendo Switch
                  <span
                    css={css`
                      float: right;
                      display: flex;
                      justify-content: space-between;
                      width: 3.4231rem;
                    `}
                  >
                    <S.GameKategory>PK</S.GameKategory>
                    <S.GameKategory>DL</S.GameKategory>
                  </span>
                </div>
                <S.IntroTitle height="2.75rem">
                  포켓몬스터스칼렛・바이올렛
                </S.IntroTitle>
                <S.BoardPostDate
                  css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  2022.11.18
                  <br />
                  한국닌텐도
                  <img
                    src={Korean}
                    css={css`
                      width: 3.75rem;
                      height: 2.25rem;
                      float: right;
                    `}
                  />
                </S.BoardPostDate>
              </div>
              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[9]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  Nintendo Switch
                  <span
                    css={css`
                      float: right;
                      display: flex;
                      justify-content: space-between;
                      width: 3.4231rem;
                    `}
                  >
                    <S.GameKategory>PK</S.GameKategory>
                    <S.GameKategory>DL</S.GameKategory>
                  </span>
                </div>
                <S.IntroTitle height="2.75rem">베요네타 3</S.IntroTitle>
                <S.BoardPostDate
                  css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  2022.10.28
                  <br />
                  한국닌텐도
                  <img
                    src={Korean}
                    css={css`
                      width: 3.75rem;
                      height: 2.25rem;
                      float: right;
                    `}
                  />
                </S.BoardPostDate>
              </div>

              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[1]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  Nintendo Switch
                  <span
                    css={css`
                      float: right;
                      display: flex;
                      justify-content: space-between;
                      width: 3.4231rem;
                    `}
                  >
                    <S.GameKategory>PK</S.GameKategory>
                    <S.GameKategory>DL</S.GameKategory>
                  </span>
                </div>
                <S.IntroTitle height="2.75rem">스플래툰 3</S.IntroTitle>
                <S.BoardPostDate
                  css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  2022.09.09
                  <br />
                  한국닌텐도
                  <img
                    src={Korean}
                    css={css`
                      width: 3.75rem;
                      height: 2.25rem;
                      float: right;
                    `}
                  />
                </S.BoardPostDate>
              </div>
            </S.Boards>

            <S.Boards
              css={css`
                margin-top: 2.5rem;
              `}
            >
              <div css={css``}>
                <S.BoardImg backGroundImg={EventBaordImgs[10]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  Nintendo Switch
                  <span
                    css={css`
                      float: right;
                      display: flex;
                      justify-content: space-between;
                      width: 3.4231rem;
                    `}
                  >
                    <S.GameKategory>PK</S.GameKategory>
                    <S.GameKategory>DL</S.GameKategory>
                  </span>
                </div>
                <S.IntroTitle height="2.75rem">커비의 드림 뷔페</S.IntroTitle>
                <S.BoardPostDate
                  css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  2022.08.17
                  <br />
                  한국닌텐도
                  <img
                    src={Korean}
                    css={css`
                      width: 3.75rem;
                      height: 2.25rem;
                      float: right;
                    `}
                  />
                </S.BoardPostDate>
              </div>
              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[11]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  Nintendo Switch
                  <span
                    css={css`
                      float: right;
                      display: flex;
                      justify-content: space-between;
                      width: 3.4231rem;
                    `}
                  >
                    <S.GameKategory>PK</S.GameKategory>
                    <S.GameKategory>DL</S.GameKategory>
                  </span>
                </div>
                <S.IntroTitle height="2.75rem">
                  Nintendo Switch Sports
                </S.IntroTitle>
                <S.BoardPostDate
                  css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  2022.04.29
                  <br />
                  한국닌텐도
                  <img
                    src={Korean}
                    css={css`
                      width: 3.75rem;
                      height: 2.25rem;
                      float: right;
                    `}
                  />
                </S.BoardPostDate>
              </div>
              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[12]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  Nintendo Switch
                  <span
                    css={css`
                      float: right;
                      display: flex;
                      justify-content: space-between;
                      width: 6.625rem;
                    `}
                  >
                    <S.GameKategory>PK</S.GameKategory>
                    <S.GameKategory>DL</S.GameKategory>
                    <S.GameKategory>체험판</S.GameKategory>
                  </span>
                </div>
                <S.IntroTitle height="2.75rem">
                  별의커비 디스커버리
                </S.IntroTitle>
                <S.BoardPostDate
                  css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  2022.03.25
                  <br />
                  한국닌텐도
                  <img
                    src={Korean}
                    css={css`
                      width: 3.75rem;
                      height: 2.25rem;
                      float: right;
                    `}
                  />
                </S.BoardPostDate>
              </div>

              <div
                css={css`
                  margin-left: 2rem;
                `}
              >
                <S.BoardImg backGroundImg={EventBaordImgs[13]} />
                <div
                  css={css`
                    font-size: 0.875rem;
                    color: #e60012;
                  `}
                >
                  Nintendo Switch
                  <span
                    css={css`
                      float: right;
                      display: flex;
                      justify-content: space-between;
                    `}
                  >
                    <S.GameKategory>PK</S.GameKategory>
                  </span>
                </div>
                <S.IntroTitle height="2.75rem">링 피트 어드벤처</S.IntroTitle>
                <S.BoardPostDate
                  css={css`
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  2019.10.18
                  <br />
                  한국닌텐도
                  <img
                    src={Korean}
                    css={css`
                      width: 3.75rem;
                      height: 2.25rem;
                      float: right;
                    `}
                  />
                </S.BoardPostDate>
              </div>
            </S.Boards>
          </S.EventBoardsWrap>
        </S.MainGamesWrap>
        <br />
        <S.GameBannerWrap paddingTop="5.875rem">
          <S.GameBanner backGroundImg={GameBanner[0]} />
          <S.GameBanner backGroundImg={GameBanner[1]} />
          <S.GameBanner backGroundImg={GameBanner[2]} />
        </S.GameBannerWrap>

        <S.GameBannerWrap paddingTop="2.75rem">
          <S.GameBanner backGroundImg={GameBanner[3]} />
          <S.GameBanner backGroundImg={GameBanner[4]} />
          <S.GameBanner backGroundImg={GameBanner[5]} />
        </S.GameBannerWrap>
        <S.BuyGameContentWrap>
          <h2
            css={css`
              text-align: center;
            `}
          >
            쉽고 간편한 다운로드 버전으로도 즐길수 있습니다.
          </h2>
          <S.BuyBtnWrap>
            <S.BuyBtn>
              <S.BuyBtnImg>
                <FontAwesomeIcon icon={faCartShopping} />
              </S.BuyBtnImg>
              다운로드 구입하기
            </S.BuyBtn>
            <S.BuyBtn>
              <S.BuyBtnImg>
                <FontAwesomeIcon icon={faCreditCard} />
              </S.BuyBtnImg>
              Nintendo Switch / 닌텐도 3DS
              <br />
              닌텐도 선불 카드 안내
            </S.BuyBtn>
            <S.BuyBtn>
              <S.BuyBtnImg>
                <FontAwesomeIcon icon={faGamepad} />
              </S.BuyBtnImg>
              Nintendo Switch
              <br />
              닌텐도 선불 번호 구입하기
            </S.BuyBtn>
          </S.BuyBtnWrap>
        </S.BuyGameContentWrap>
      </S.Container>
    </section>
  );
};

export default Section;
