import { styled } from "styled-components";

export const FilterPopapItem = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  scrollbar-color: #4b4949;
  scrollbar-width: 4px;
  overflow: auto;
  height: auto;
  max-height: 240px;
  flex-direction: column;
  align-items: flex-start;
  /* сам скроллбар */
  &::-webkit-scrollbar {
    width: 4px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    background-color: #4b4949;
  }
  /* ползунок скроллбара */
  &::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
    border-radius: 3px 0 3px 0;
  }
`;

export const FilterPopapContent = styled.div``;
export const FilterPopapLink = styled.a.attrs()`
  color: #fff;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &:hover {border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;}
  &:active {border-color: #AD61FF;
  color: #AD61FF;
  cursor: pointer;}
`;
