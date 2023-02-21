/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
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

  return (
    <section>
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
              width: 20px;
              height: 31px;
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
              width: 20px;
              height: 31px;
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
            font-size: 20px;

            position: absolute;
            top: 50%;
            left: 50%;

            transform: translate(-50%, -50%);
          `}
        >
          <span>{nowImg + 1}</span>/<span>8</span>
        </div>
      </S.SlideImgBtnWrap>
    </section>
  );
};

export default Section;
