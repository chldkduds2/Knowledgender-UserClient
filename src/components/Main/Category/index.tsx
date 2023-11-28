import React from "react";
import * as S from "./style";
import CategoryLogo from "../../../assets/categoryLogo.svg";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const navigate = useNavigate();
  const url = "https://bento.me/knowledgender";

  const handleNavigate = (path: string, category: string) => {
    navigate(path, { state: { category } });
  };

  return (
    <>
      <S.CategoryContainer>
        <S.CategoryTitleWraper>
          <S.CategoryLogo src={CategoryLogo} />
          <S.CategoryTitle>카테고리</S.CategoryTitle>
        </S.CategoryTitleWraper>
        <S.CategoryTextContainer>
          <S.CategoryText onClick={() => handleNavigate("/category", "신체")}>
            신체, 2차성징
          </S.CategoryText>
          <S.CategoryText onClick={() => handleNavigate("/category", "마음")}>
            마음
          </S.CategoryText>
          <S.CategoryText onClick={() => handleNavigate("/category", "관계")}>
            관계, 우정
          </S.CategoryText>
          <S.CategoryText onClick={() => handleNavigate("/category", "범죄")}>
            폭력
          </S.CategoryText>
          <S.CategoryText onClick={() => handleNavigate("/category", "평등")}>
            양성평등
          </S.CategoryText>
        </S.CategoryTextContainer>
      </S.CategoryContainer>
    </>
  );
};

export default Category;
