import React from "react";
import * as S from "./style";
import Thumbnail from "../../../assets/userbanner.svg";
import { useNavigate } from "react-router-dom";
const Cardnews = (data: any, usePagNumber: string) => {
  console.log(data);
  const movePage = useNavigate();

  const onClickHandler = () => {
    movePage(`/cardnews/${data.data.id}`);
  };

  return (
    <>
      <S.CardnewsWraper onClick={onClickHandler}>
        <S.CardnewsThumbnail src={data.data.thumbnail}></S.CardnewsThumbnail>
        <S.CardnewsInfo>{data.data.writer}</S.CardnewsInfo>
        <S.CardnewsTitle>{data.data.title}</S.CardnewsTitle>
        <S.CardnewsCategoryWraper>
          <S.CardnewsCategoryContent>
            {data.data.category}
          </S.CardnewsCategoryContent>
        </S.CardnewsCategoryWraper>
      </S.CardnewsWraper>
    </>
  );
};

export default Cardnews;
