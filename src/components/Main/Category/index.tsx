import React from "react";
import * as S from "./style";
import CategoryLogo from "../../../assets/categoryLogo.svg";
const Category = () => {
  return (
    <>
      <S.CategoryContainer>
        <S.CategoryTitleWraper>
          <S.CategoryLogo src={CategoryLogo} />
          <S.CategoryTitle>카테고리</S.CategoryTitle>
        </S.CategoryTitleWraper>
        <S.CategoryTextContainer>
          <S.CategoryText>신체, 2차성징</S.CategoryText>
          <S.CategoryText>마음</S.CategoryText>
          <S.CategoryText>관계, 우정</S.CategoryText>
          <S.CategoryText>폭력</S.CategoryText>
          <S.CategoryText>양성평등</S.CategoryText>
        </S.CategoryTextContainer>
      </S.CategoryContainer>
    </>
  );
};

export default Category;
