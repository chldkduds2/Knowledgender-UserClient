import React from "react";
import * as S from "./style";
import Logo from "../../../assets/userMainLogo.svg";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderLogo src={Logo}></S.HeaderLogo>
        <S.HeaderTextWraper>
          <button onClick={() => handleNavigate("/cardlist")}>
            <S.HeaderText>상담센터</S.HeaderText>
          </button>
          <button onClick={() => handleNavigate("/cardlist")}>
            <S.HeaderText>로그인</S.HeaderText>
          </button>
        </S.HeaderTextWraper>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
