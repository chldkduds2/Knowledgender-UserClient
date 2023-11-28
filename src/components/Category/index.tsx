import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useLocation } from "react-router-dom";
import customAxios from "../../lib/customAxios";
import Category from "../Main/Category";
import Cardnews from "../../components/Main/Cardnews/index";

const CategoryOption = () => {
  const location = useLocation();
  const category = location.state && location.state.category;
  const [cardnews, setCardnews] = useState<any[]>([]);
  const [cardnewsListTitles, setCardnewsListTitles] = useState({
    신체: "💪🏻 신체, 2차성징",
    마음: "❤️‍🩹 마음",
    관계: "🥰 관계, 우정",
    범죄: "💣 폭력",
    평등: "☁️ 양성평등",
  });

  const [cardnewsListSubtitles, setCardnewsListSubtitle] = useState({
    신체: "내 안에 숨어있는 마음상담소로 초대합니다!",
    마음: "나조차도 모르고 있었던 나의 몸 속 비밀",
    관계: "즐겁고 행복한 우리의 관계를 건강하게 유지하는 법",
    범죄: "폭력으로부터 나를 올바른 방법으로 보호해봅시다",
    평등: "차이는 틀린 것이 아닌 다른 것!",
  });
  const sendCategoryCardnewsData = async () => {
    try {
      const CategoryCardsnews = await customAxios.get(
        `https://algosipeosseong.site/api/card/?category=${category}`
      );
      setCardnews(CategoryCardsnews.data.cardResponseList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(category);
    sendCategoryCardnewsData();
  }, [category]);

  return (
    <>
      <S.CategoryContainer>
        <Category />
        <S.CardnewsWraper>
          <S.CardnewsTitleWraper>
            <S.CardnewsTitle>
              {cardnewsListTitles[category as keyof typeof cardnewsListTitles]}
            </S.CardnewsTitle>
            <S.CardnewsSubtitle>
              {
                cardnewsListSubtitles[
                  category as keyof typeof cardnewsListTitles
                ]
              }
            </S.CardnewsSubtitle>
          </S.CardnewsTitleWraper>
          {category === "평등" ? (
            <>
              <Splide
                options={{
                  width: "1250px",
                  perPage: 4,
                  height: "300px",
                  rewind: true,
                  gap: "90px",
                  autoplay: true,
                  arrows: false,
                  pagination: false,
                }}
              >
                {cardnews?.map((slide: any) => (
                  <SplideSlide key={slide}>
                    <Cardnews data={slide} />
                  </SplideSlide>
                ))}
              </Splide>
            </>
          ) : (
            <>
              {" "}
              <Splide
                options={{
                  width: "1250px",
                  perPage: 4,
                  height: "300px",
                  rewind: true,
                  gap: "10px",
                  autoplay: true,
                  arrows: false,
                  pagination: false,
                }}
              >
                {cardnews?.map((slide: any) => (
                  <SplideSlide key={slide}>
                    <Cardnews data={slide} />
                  </SplideSlide>
                ))}
              </Splide>
            </>
          )}
        </S.CardnewsWraper>
      </S.CategoryContainer>
    </>
  );
};

export default CategoryOption;
