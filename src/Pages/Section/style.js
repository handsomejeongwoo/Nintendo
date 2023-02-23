import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
`;

export const TitleImg = styled.div`
  width: 100%;
  height: 46.5rem;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.backGroundImg});
  margin-bottom: 0.75rem;
`;

export const SlideImgBtnWrap = styled.div`
  width: 100%;
  height: 1.875rem;
`;

export const EventBoards = styled.div`
  width: 75rem;
  height: 44.625rem;

  position: relative;
  margin: 0 auto;
  margin-top: 5rem;

  padding-bottom: 5rem;
`;

export const EventBoardsWrap = styled.div`
  margin-top: 2.5rem;
  width: 75rem;
  height: 40.5rem;
`;

export const Boards = styled.div`
  width: 17.25rem;
  height: 19.1875rem;
  display: flex;
`;

export const BoardImg = styled.div`
  width: 17.25rem;
  height: 10rem;

  background-image: url(${(props) => props.backGroundImg});
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 0.9375rem;
`;

export const IntroTitle = styled.div`
  width: 17.25rem;
  height: ${(props) => props.height};
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.375rem;
  color: #111;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;

  margin-top: 0.4375rem;
`;

export const BoardPostDate = styled.div`
  font-size: 0.8125rem;
  color: #737373;
  letter-spacing: -0.075em;
  line-height: 1.25rem;
  margin-top: 0.1875rem;
`;

export const EshopBanner = styled.div`
  width: 100%;
  height: 8.75rem;

  background: #fe7c0a
    url(https://www.nintendo.co.kr/images/renew/main/main_banner_eshop.gif)
    no-repeat top center;
`;

export const MainGamesWrap = styled.div`
  width: 75rem;
  height: 42.75rem;

  margin: 0 auto;
  margin-top: 5rem;
`;

export const GameKategory = styled.strong`
  display: inline-block;
  padding: 0.1875rem 0.3125rem;
  border-radius: 0.1875rem;
  background: #e60012;
  font-size: 0.625rem;
  color: #fff;
  font-weight: 300;
  letter-spacing: 0.05em;
  font-weight: bold;
`;

export const GameBannerWrap = styled.div`
  width: 75rem;
  height: 8.75rem;

  margin: 0 auto;

  padding-top: ${(props) => props.paddingTop};

  display: flex;
  justify-content: space-between;
`;

export const GameBanner = styled.div`
  width: 23.3125rem;
  height: 8.75rem;

  background-image: url(${(props) => props.backGroundImg});
  background-size: contain;

  cursor: pointer;
`;

export const BuyGameContentWrap = styled.div`
  width: 75rem;
  height: 10.875rem;

  margin: 0 auto;
  margin-top: 5rem;
`;

export const BuyBtnWrap = styled.ul`
  width: 1200px;
  height: 7.4375rem;

  margin: 1.875rem 0 1.25rem 0;

  display: flex;
  list-style: none;
  box-sizing: border-box;
  border-bottom: 1px solid #111;
  border-left: 1px solid #d6d6d6;
`;

export const BuyBtn = styled.li`
  width: 262.812px;
  height: 118px;
  padding-left: 136.478px;

  display: flex;
  align-items: center;

  border-top: 1px solid #d6d6d6;
  border-right: 1px solid #d6d6d6;

  font-size: 18px;
  position: relative;
  cursor: pointer;
`;

export const BuyBtnImg = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  border-radius: 100%;

  background-color: #d7d7d7;

  font-size: 30px;
  left: 15%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
