import { useState } from "react";
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

  return (
    <S.FilterBlock>
      <S.FilterItems>
        <S.BtnText
          name="author"
          $state={state.filter === "author" ? 1 : 0}
          onClick={handle}
        >
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
        >
          году выпуска
        </S.BtnText>
        {state && state.filter === "year" ? (
          <S.FilterPopap>
            <FilterPopapRender event={state.filter} />
          </S.FilterPopap>
        ) : null}
      </S.FilterItems>
      <S.FilterItems>
        <S.BtnText
          name="genre"
          $state={state.filter === "genre" ? 1 : 0}
          onClick={handle}
        >
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
