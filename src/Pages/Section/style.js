import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
`;

export const TitleImg = styled.div`
  width: 100%;
  height: 744px;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.backGroundImg});
  margin-bottom: 12px;
`;

export const SlideImgBtnWrap = styled.div`
  width: 100%;
  height: 30px;
`;

export const EventBoards = styled.div`
  width: 1200px;
  height: 714px;

  position: relative;
  margin: 0 auto;
  margin-top: 80px;

  padding-bottom: 80px;
`;

export const EventBoardsWrap = styled.div`
  margin-top: 40px;
  width: 1200px;
  height: 648px;
`;

export const Boards = styled.div`
  width: 276px;
  height: 307px;
  display: flex;
`;

export const BoardImg = styled.div`
  width: 276px;
  height: 160px;

  background-image: url(${(props) => props.backGroundImg});
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 15px;
`;

export const IntroTitle = styled.div`
  width: 276px;
  height: ${(props) => props.height};
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  color: #111;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;

  margin-top: 7px;
`;

export const BoardPostDate = styled.div`
  font-size: 13px;
  color: #737373;
  letter-spacing: -0.075em;
  line-height: 20px;
  margin-top: 3px;
`;

export const EshopBanner = styled.div`
  width: 100%;
  height: 140px;

  background: #fe7c0a
    url(https://www.nintendo.co.kr/images/renew/main/main_banner_eshop.gif)
    no-repeat top center;
`;

export const MainGamesWrap = styled.div`
  width: 1200px;
  height: 684px;

  margin: 0 auto;
  margin-top: 80px;
`;

export const GameKategory = styled.strong`
  display: inline-block;
  padding: 3px 5px;
  border-radius: 3px;
  background: #e60012;
  font-size: 10px;
  color: #fff;
  font-weight: 300;
  letter-spacing: 0.05em;
  font-weight: bold;
`;
