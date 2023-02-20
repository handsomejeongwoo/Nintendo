/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <S.Container>
      <S.LogoWrap>
        <S.Logo />
      </S.LogoWrap>
      <div
        css={css`
          width: 1513.8px;
          height: 100%;
          border-bottom: 1px solid #d9d9d9;
          line-height: 74px;
        `}
      >
        <S.ListWrap>
          <S.ListTitle>
            <a href="#">Nintendo Switch</a>
            <S.ListContent height="340px">
              <li>Nintendo Switch OLED 모델</li>
              <li>Nintendo Switch </li>
              <li>Nintendo Switch Lite</li>
              <li>기능ㆍ특징을 비교</li>
              <li>주변기기</li>
              <li>Nintendo Switch Online</li>
              <li>Nintendo 지킴이 Switch™ </li>
              <li>닌텐도 e숍</li>
            </S.ListContent>
          </S.ListTitle>
          <S.ListTitle>
            <a href="#">소프트웨어</a>
            <S.ListContent height="172px">
              <li>Nintendo Switch 소프트웨어</li>
              <li>닌텐도 3DS 소프트웨어</li>
              <li>발매 예정 소프트웨어</li>
              <li>스마트폰용 앱</li>
            </S.ListContent>
          </S.ListTitle>
          <S.ListTitle>
            <a href="#">캐릭터</a>
            <S.ListContent height="87px">
              <li>스플래툰 베이스 홈페이지</li>
              <li>별의 커비 공식 홈페이지</li>
            </S.ListContent>
          </S.ListTitle>
          <S.ListTitle>
            <a href="#">고객지원</a>
            <S.ListContent height="215px">
              <li>Nintendo Switch 고객지원</li>
              <li>Nintendo Switch Online 서포트</li>
              <li>닌텐도 3DS 고객지원</li>
              <li>고객지원 홈페이지</li>
              <li>네트워크 장애 발생 상황</li>
            </S.ListContent>
          </S.ListTitle>
          <S.ListTitle>
            <a href="#">News</a>
            <S.ListContent height="172px">
              <li>News</li>
              <li>보도자료</li>
              <li>알림</li>
              <li>이벤트</li>
            </S.ListContent>
          </S.ListTitle>
        </S.ListWrap>
      </div>
      <S.Eshop></S.Eshop>
      <S.SearchClickBox>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          css={css`
            font-size: 30px;
          `}
        />
      </S.SearchClickBox>
    </S.Container>
  );
};

export default Header;
