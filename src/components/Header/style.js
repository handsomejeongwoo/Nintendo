import styled from "@emotion/styled/macro";

export const Container = styled.div`
  width: 100%;
  height: 4.625rem;
  display: flex;
`;

export const LogoWrap = styled.div`
  width: 19.125rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e60012;
`;

export const Logo = styled.div`
  background-image: url(https://www.nintendo.co.kr/images/renew/common/logo_nintendo_red.gif);
  width: 7.625rem;
  height: 1.8125rem;
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
  width: 18.9231rem;
  height: 4.625rem;
  background-color: #fff;
  border-right: 1px solid #d9d9d9;
  font-size: 1.125rem;
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
  padding: 1.25rem 0;
  background-color: #f7f7f7;
  border: 1px solid #d9d9d9;
  list-style: none;
  line-height: 1;
  text-align: left;
  transition: all 1s;

  > li {
    font-size: 0.9375rem;
    line-height: 150%;
    padding: 0.625rem 0.625rem 0.625rem 1.875rem;
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

  width: 8.8125rem;
  height: 4.6875rem;

  cursor: pointer;
`;

export const SearchClickBox = styled.div`
  width: 4.6875rem;
  height: 4.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #d9d9d9;

  cursor: pointer;
`;
