import { styled } from "styled-components";

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FilterItems = styled.div`
  position: relative;
`;

export const FilterButton = styled.div.attrs((props) => ({
  "data-name": props.name,
  "aria-hidden": "true",
  "onClick":props.onClick
}))`
 margin: 8px;
  background: #181818;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${(props) => (props.$state ? '#ad61ff' : " #fff")};
  border-radius: 38px;
  padding: 6px 20px;
  color: ${(props) => (props.$state ? "#ad61ff" : " #fff")};
`;

export const BtnText = styled(FilterButton)`
 &:hover {border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;}
  &:active {border-color: #AD61FF;
  color: #AD61FF;
  cursor: pointer;}
`;

export const FilterPopap =  styled.div`
  position: absolute;
  color: #d3d3d3;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  background: #313131;
  width: 248px;
  padding: 34px;
  gap: 10px;`