import { StrictMode } from "react";
import FilterRender from "../FilterRender/FilterRender";
import * as S from "./style";

function TrackFilterRender() {
  return (
    <StrictMode>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <FilterRender />
      </S.CenterblockFilter>
    </StrictMode>
  );
}
export default TrackFilterRender;
