import { dataArray } from "../data";
import * as S from "./style";

function FilterPopapRender(event) {
  const filters = event.event;
  switch (filters) {
    case "author":
      return (
        <S.FilterPopapItem>
          {dataArray.map(({ author, id }) => (
            <S.FilterPopapContent key={id}>
              <S.FilterPopapLink href="http://">{author}</S.FilterPopapLink>
            </S.FilterPopapContent>
          ))}
        </S.FilterPopapItem>
      );

    case "genre":
      return (
        <S.FilterPopapItem>
          {dataArray.map(({ genre, id }) => (
            <S.FilterPopapContent key={id}>
              <S.FilterPopapLink href="http://">
                {genre.split(" ").slice(0, 1)}
              </S.FilterPopapLink>
            </S.FilterPopapContent>
          ))}
        </S.FilterPopapItem>
      );

    case "year":
      return (
        <S.FilterPopapItem>
          <S.FilterPopapContent>
            <S.FilterPopapLink href="http://">По умолчанию</S.FilterPopapLink>
          </S.FilterPopapContent>

          <S.FilterPopapContent>
            <S.FilterPopapLink href="http://">Сначала новые</S.FilterPopapLink>
          </S.FilterPopapContent>

          <S.FilterPopapContent>
            <S.FilterPopapLink href="http://">Сначала старые</S.FilterPopapLink>
          </S.FilterPopapContent>
        </S.FilterPopapItem>
      );

    default:
      break;
  }
}

export default FilterPopapRender;
