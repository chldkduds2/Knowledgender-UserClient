import React, { useEffect, useState } from "react";
import * as S from "./style";
import banner from "../../assets/userbanner.svg";
import Category from "./Category";
import Cardnews from "./Cardnews";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import customAxios from "../../lib/customAxios";
import config from "../../config/config.json";

const Main: React.FC = () => {
  const serverUrl = config.SERVER_ADDRESS;

  const [mindCardnews, setMindCardnews] = useState<any[]>([]);
  const [bodyCardnews, setBodyCardnews] = useState<any[]>([]);
  const [relationshipCardnews, setRelationshipCardnews] = useState<any[]>([]);
  const [violenceCardnews, setViolenceCardnews] = useState<any[]>([]);
  const [equalityCardnews, setEqualityCardnews] = useState<any[]>([]);

  const sendCardnewsData = async () => {
    try {
      const mind = await customAxios.get(
        `https://algosipeosseong.site/api/card/?category=마음`
      );
      const body = await customAxios.get(
        `https://algosipeosseong.site/api/card/?category=신체`
      );
      const relationship = await customAxios.get(
        `https://algosipeosseong.site/api/card/?category=관계`
      );
      const violence = await customAxios.get(
        `https://algosipeosseong.site/api/card/?category=범죄`
      );
      const equality = await customAxios.get(
        `https://algosipeosseong.site/api/card/?category=평등`
      );
      console.log("Mind card data:", mind.data.cardResponseList);
      setMindCardnews(mind.data.cardResponseList);
      setBodyCardnews(body.data.cardResponseList);
      setRelationshipCardnews(relationship.data.cardResponseList);
      setViolenceCardnews(violence.data.cardResponseList);
      setEqualityCardnews(equality.data.cardResponseList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    sendCardnewsData();
  }, []);

  return (
    <>
      <S.MainContainer>
        <S.Mainbanner src={banner}></S.Mainbanner>
        <S.CategoryContentsContainer>
          <Category></Category>
          <S.CardnewsContentsWraper>
            <S.CardnewsWraper>
              <S.CardnewsTitleWraper>
                <S.CardnewsTitle>마음 상담소로 오세요</S.CardnewsTitle>
                <S.CardnewsSubtitle>
                  내 안에 숨어있는 마음상담소로 초대합니다!
                </S.CardnewsSubtitle>
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
                {mindCardnews?.map((slide: any) => (
                  <SplideSlide key={slide}>
                    <Cardnews data={slide} />
                  </SplideSlide>
                ))}
              </Splide>
            </S.CardnewsWraper>
            <S.CardnewsWraper>
              <S.CardnewsTitleWraper>
                <S.CardnewsTitle>나도 몰랐던 나의 몸</S.CardnewsTitle>
                <S.CardnewsSubtitle>
                  나조차도 모르고 있었던 나의 몸 속 비밀
                </S.CardnewsSubtitle>
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
                {bodyCardnews?.map((slide: any) => (
                  <SplideSlide key={slide}>
                    <Cardnews data={slide} />
                  </SplideSlide>
                ))}
              </Splide>
            </S.CardnewsWraper>
            <S.CardnewsWraper>
              <S.CardnewsTitleWraper>
                <S.CardnewsTitle>너와 나의 연결고리</S.CardnewsTitle>
                <S.CardnewsSubtitle>
                  즐겁고 행복한 우리의 관계를 건강하게 유지하는 법
                </S.CardnewsSubtitle>
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
                {relationshipCardnews?.map((slide: any) => (
                  <SplideSlide key={slide}>
                    <Cardnews data={slide} />
                  </SplideSlide>
                ))}
              </Splide>
            </S.CardnewsWraper>
            <S.CardnewsWraper>
              <S.CardnewsTitleWraper>
                <S.CardnewsTitle>나를 확실하게 지키는 법</S.CardnewsTitle>
                <S.CardnewsSubtitle>
                  폭력으로부터 나를 올바른 방법으로 보호해봅시다
                </S.CardnewsSubtitle>
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
                {violenceCardnews?.map((slide: any) => (
                  <SplideSlide key={slide}>
                    <Cardnews data={slide} />
                  </SplideSlide>
                ))}
              </Splide>
            </S.CardnewsWraper>
            <S.CardnewsWraper>
              <S.CardnewsTitleWraper>
                <S.CardnewsTitle>세상에 같은 사람은 없다</S.CardnewsTitle>
                <S.CardnewsSubtitle>
                  차이는 틀린 것이 아닌 다른 것!
                </S.CardnewsSubtitle>
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
                {equalityCardnews?.map((slide: any) => (
                  <SplideSlide key={slide}>
                    <Cardnews data={slide} />
                  </SplideSlide>
                ))}
              </Splide>
            </S.CardnewsWraper>
          </S.CardnewsContentsWraper>
        </S.CategoryContentsContainer>
      </S.MainContainer>
    </>
  );
};

export default Main;
