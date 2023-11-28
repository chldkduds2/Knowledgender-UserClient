import React from "react";
import * as S from "./style";
import CategoryLogo from "../../../assets/categoryLogo.svg";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const navigate = useNavigate();
  const url = "https://bento.me/knowledgender";

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <S.CategoryContainer>
        <S.CategoryTitleWraper>
          <S.CategoryLogo src={CategoryLogo} />
          <S.CategoryTitle>카테고리</S.CategoryTitle>
        </S.CategoryTitleWraper>
        <S.CategoryTextContainer>
          <S.CategoryText onClick={() => handleNavigate("/category/body")}>
            신체, 2차성징
          </S.CategoryText>
          <S.CategoryText onClick={() => handleNavigate("/category/mind")}>
            마음
          </S.CategoryText>
          <S.CategoryText
            onClick={() => handleNavigate("/category/relationship")}
          >
            관계, 우정
          </S.CategoryText>
          <S.CategoryText onClick={() => handleNavigate("/category/violence")}>
            폭력
          </S.CategoryText>
          <S.CategoryText onClick={() => handleNavigate("/category/equality")}>
            양성평등
          </S.CategoryText>
        </S.CategoryTextContainer>
      </S.CategoryContainer>
    </>
  );
};

export default Category;
