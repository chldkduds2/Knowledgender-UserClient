import React from "react";
import * as S from "./style";
import Logo from "../../../assets/userMainLogo.svg";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const url = "https://bento.me/knowledgender";

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderLogo
          src={Logo}
          onClick={() => handleNavigate("/")}
        ></S.HeaderLogo>
        <S.HeaderTextWraper>
          <button
            onClick={() => {
              window.open(url);
            }}
          >
            <S.HeaderText>성지식 테스트</S.HeaderText>
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
