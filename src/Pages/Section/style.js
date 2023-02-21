import styled from "@emotion/styled";

export const Container = styled.div`
  width: 2041px;
`;

export const TitleImg = styled.div`
  width: 2041px;
  height: 744px;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.backGroundImg});
  margin-bottom: 12px;
`;

export const SlideImgBtnWrap = styled.div`
  width: 2041px;
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
  height: 66px;
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
  width: 2041px;
  height: 140px;

  background: #fe7c0a
    url(https://www.nintendo.co.kr/images/renew/main/main_banner_eshop.gif)
    no-repeat top center;
`;
