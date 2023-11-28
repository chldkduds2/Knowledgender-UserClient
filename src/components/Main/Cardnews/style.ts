import styled from "styled-components";

export const CardnewsWraper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
`;

export const CardnewsThumbnail = styled.img`
  width: 300px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

export const CardnewsInfo = styled.p`
  color: #6c7072;
  font-family: Pretendard;
  font-size: 1em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const CardnewsTitle = styled.div`
  width: 300px;
  height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #090a0a;
  font-family: Pretendard;
  font-size: 1.5em; 
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const CardnewsCategoryWraper = styled.div`
  width: 75px;
  border-radius: 100px;
  border: 2px solid var(--main-purple-base, #7b39d1);
  padding: 5px;
  margin-top: 16px;
`;
export const CardnewsCategoryContent = styled.p`
  color: #6823c2;
  text-align: center;
  font-family: Pretendard;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;
