import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 150px;
  background-color: white;
  padding-left: 10vw;
  padding-right: 10vw;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const HeaderLogo = styled.img`
  width: 176px;
`;

export const HeaderText = styled.a`
  color: black;
  text-align: center;
  font-family: "Pretendard";
  font-size: 25px;
  font-weight: 500;
  margin-left: 50px;
`;

export const HeaderTextWraper = styled.div``;
