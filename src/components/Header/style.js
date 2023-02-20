import styled from "@emotion/styled/macro";

export const Container = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
`;

export const LogoWrap = styled.div`
  width: 306px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e60012;
`;

export const Logo = styled.div`
  background-image: url(https://www.nintendo.co.kr/images/renew/common/logo_nintendo_red.gif);
  width: 122px;
  height: 29px;
  background-repeat: no-repeat;
`;

export const ListWrap = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  > li {
  }
`;

export const ListTitle = styled.li`
  float: left;
  text-align: center;
  width: 302.77px;
  height: 74px;
  background-color: #fff;
  border-right: 1px solid #d9d9d9;
  font-size: 18px;
  letter-spacing: -0.03em;
  color: #111;
  position: relative;

  &:hover a {
    color: #e60012;
  }
`;

export const ListContent = styled.ul`
  color: #111;
  display: none;
  height: 0;
  padding: 20px 0;
  background-color: #f7f7f7;
  border: 1px solid #d9d9d9;
  list-style: none;
  line-height: 1;
  text-align: left;
  transition: all 1s;

  > li {
    font-size: 15px;
    line-height: 150%;
    padding: 10px 10px 10px 30px;
    cursor: pointer;
    &:hover {
      color: #e60012;
    }
  }

  ${ListTitle}:hover & {
    display: block;
    height: ${(props) => props.height};
  }
`;

export const Eshop = styled.div`
  background-image: url(https://www.nintendo.co.kr/images/renew/common/btn_head_eshop.gif);
  background-repeat: no-repeat;
  width: 141px;
  height: 75px;

  cursor: pointer;
`;

export const SearchClickBox = styled.div`
  width: 75px;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #d9d9d9;

  cursor: pointer;
`;
