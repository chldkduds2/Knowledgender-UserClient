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
  const [cardnewsListTitle, setCardnewsListTitle] = useState<string>("");

  const sendCategoryCardnewsData = async () => {
    try {
      const CategoryCardsnews = await customAxios.get(
        `https://algosipeosseong.site/api/card/?category=${category}`
      );
      setCardnews(CategoryCardsnews.data.cardResponseList);

      if (category === "신체") {
        setCardnewsListTitle("💪🏻 신체, 2차성징");
      } else if (category === "마음") {
        setCardnewsListTitle("❤️‍🩹 마음");
      } else if (category === "관계") {
        setCardnewsListTitle("🥰 관계, 우정");
      } else if (category === "범죄") {
        setCardnewsListTitle("💣 폭력");
      } else if (category === "평등") {
        setCardnewsListTitle("☁️ 양성평등");
      }
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
            <S.CardnewsTitle>{cardnewsListTitle}</S.CardnewsTitle>
          </S.CardnewsTitleWraper>
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
                <Cardnews data={slide} pageNumber={"userPage2"} />
              </SplideSlide>
            ))}
          </Splide>
        </S.CardnewsWraper>
      </S.CategoryContainer>
    </>
  );
};

export default CategoryOption;
