import * as S from "./style";

export function SearchFormRender(setSearchValue) {
  return (
    <S.CenterblockSearch>
      <S.Svg>
        <S.useSvgSearch></S.useSvgSearch>{" "}
      </S.Svg>
      <S.SearchText
        value={setSearchValue.setSearchValue}
        onChange={setSearchValue.onChange}
      />
    </S.CenterblockSearch>
  );
}

export const searchTrack = (searchValueText, list) =>
  list.filter(({ name,author }) =>
    name?.toLowerCase().includes(searchValueText.toLowerCase()) || author?.toLowerCase().includes(searchValueText.toLowerCase())
  );

export default SearchFormRender;
