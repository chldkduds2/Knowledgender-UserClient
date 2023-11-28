import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 20vw;
  padding-right: 20vw;
  box-sizing: border-box;
`;

export const DetailTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DetailWriter = styled.div`
  color: var(--text-black-light, #6c7072);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;
export const DetailCategory = styled.div`
  width: 100px;
  border-radius: 100px;
  border: 2px solid var(--main-purple-base, #7b39d1);
  padding: 5px;
  margin-top: 16px;
  height: 20px;

  color: var(--main-purple-darkest, #6823c2);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.56px;
  margin-bottom: 2vh;
`;

export const DetailContents = styled.p`
  color: var(--text-black-darkest, #090a0a);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px; /* 160.714% */
  letter-spacing: -1.4px;
  word-break: keep-all;
  white-space: pre-wrap;
  width: 60vw;
`;
export const DetailCategoryText = styled.p`
  color: var(--main-purple-base, #7b39d1);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.2px;
`;

export const DetailTitleWraper = styled.div`
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

export const DetailTitleContainer = styled.div`
  width: 60vw;
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const DetailImage = styled.img`
  width: 60vw;
  flex-shrink: 0;
  object-fit: cover;
`;
