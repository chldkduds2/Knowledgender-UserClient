import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import customAxios from "../../lib/customAxios";
import CardnewsImage from "../../assets/userbanner.svg";

type CardnewsContent = {
  id?: string;
  title?: string;
  writer?: string;
  category?: string;
  content?: string;
  thumbnail: string;
  image: string;
};

const Detail = () => {
  const params = useParams();
  // const [cardnewsContents, setCardnewsContents] = useState<CardnewsContent[]>(
  //   []
  // );
  const [cardnewsContents, setCardnewsContents] =
    useState<CardnewsContent | null>(null);
  // console.log(cardnewsContents);

  // console.log(test);

  useEffect(() => {
    const id = params.id;

    customAxios
      .get(`/api/card/${id}`)
      .then((response) => {
        setCardnewsContents(response.data);
        console.log(cardnewsContents?.content);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {cardnewsContents && (
        <S.DetailContainer>
          <S.DetailTitleContainer>
            <S.DetailTitleWraper>
              <S.DetailCategoryText>
                {cardnewsContents.category}
              </S.DetailCategoryText>
              <S.DetailTitle>{cardnewsContents.title}</S.DetailTitle>

              <S.DetailWriter>{cardnewsContents.writer}</S.DetailWriter>
            </S.DetailTitleWraper>
            <S.DetailCategory>{cardnewsContents.category}</S.DetailCategory>
          </S.DetailTitleContainer>
          <S.DetailImage src={cardnewsContents.image} />
          <S.DetailContents>{cardnewsContents.content}</S.DetailContents>
        </S.DetailContainer>
      )}
    </>
  );
};

export default Detail;
