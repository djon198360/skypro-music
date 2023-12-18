/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import FilterRender from "../FilterRender/FilterRender";
import * as S from "./style";

function TrackFilterRender(array) {
  return (
    <StrictMode>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <FilterRender data={array.array} />
      </S.CenterblockFilter>
    </StrictMode>
  );
}
export default TrackFilterRender;
