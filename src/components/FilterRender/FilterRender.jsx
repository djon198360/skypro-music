import { useState } from "react";
import { useSelector } from "react-redux";
import FilterPopapRender from "../FilterPopap/FilterPopap";
import * as S from "./style";

function FilterRender(array) {
  const [state, setState] = useState({ isChecked: null });
  const data = array;
  const handle = (event) => {
    const popapName = event.target.dataset.name;
    if (state.isChecked && state.filter === popapName) {
      setState({ isChecked: false, filter: false });
    } else {
      setState({ filter: popapName, isChecked: true });
    }
  };
   const filterAuthor = useSelector(
    (states) => states?.handleTrackState?.filterAuthor
  );
  
  const filterGenre = useSelector(
    (states) => states?.handleTrackState?.filterGenre
  );
  const filterYear = useSelector(
    (states) => states?.handleTrackState?.filterYear
  ); 
  const yearFilter = {
    DEFAULT_SORT_VALUE: "По умолчанию",
    ASC_SORT_VALUE: "Сначала старые",
    DESC_SORT_VALUE: "Сначала новые",
  };
  return (
    <S.FilterBlock>
      <S.FilterItems>           
        <S.BtnText
          name="author"
          $state={state.filter === "author" ? 1 : 0}
          onClick={handle}>
         {filterAuthor.length > 0 ? <S.CountFilter> {
          filterAuthor.length
        }</S.CountFilter>:null}
          исполнителю
        </S.BtnText>
        {state && state.filter === "author" ? (
          <S.FilterPopap>
            <FilterPopapRender event={state.filter} data={data} />
          </S.FilterPopap>
        ) : null}
      </S.FilterItems>

      <S.FilterItems>
        <S.BtnText
          name="year"
          $state={state.filter === "year" ? 1 : 0}
          onClick={handle}
        >         {filterYear > 0 ? <S.CountFilter> {
          filterYear.length
        }</S.CountFilter>:null}
          году выпуска
        </S.BtnText>
        {state && state.filter === "year" ? (
          <S.FilterPopap>
            <FilterPopapRender event={state.filter} data={yearFilter} />
          </S.FilterPopap>
        ) : null}
      </S.FilterItems>
      <S.FilterItems>
        <S.BtnText
          name="genre"
          $state={state.filter === "genre" ? 1 : 0}
          onClick={handle}
        >         {filterGenre.length > 0 ? <S.CountFilter> {
          filterGenre.length
        }</S.CountFilter>:null}
          жанру
        </S.BtnText>
        {state && state.filter === "genre" ? (
          <S.FilterPopap>
            <FilterPopapRender event={state.filter} data={data} />
          </S.FilterPopap>
        ) : null}
      </S.FilterItems>
    </S.FilterBlock>
  );
}

export default FilterRender;
