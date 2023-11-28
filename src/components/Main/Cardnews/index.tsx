import React from "react";
import * as S from "./style";
import Thumbnail from "../../../assets/userbanner.svg";
const Cardnews = (data: any) => {
  console.log(data);
  return (
    <>
      <S.CardnewsWraper>
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
