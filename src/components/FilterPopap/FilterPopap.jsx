import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterAuthors, setFilterGenres } from "../../Store/Slice/Slice";
import * as S from "./style";

function FilterPopapRender(event) {
  const dispatch = useDispatch();
  const [filterAuthor, setFilterAuthor] = useState(
    useSelector((state) => state?.handleTrackState?.filterAuthor)
  );
  const [filterGenre, setFilterGenre] = useState(
    useSelector((state) => state?.handleTrackState?.filterGenre)
  );

  /*   const setFilterAuthors = (params) => {
    if (!filterAuthor.includes(params)) {
      setFilterAuthor([...filterAuthor, params]);
    } else {
      setFilterAuthor(filterAuthor.filter((item) => item !== params));
    }
  };
   */

  useEffect(() => {
    dispatch(setFilterAuthors(filterAuthor));
  }, [filterAuthor]);

  useEffect(() => {
    dispatch(setFilterGenres(filterGenre));
  }, [filterGenre]);

  const filters = event.event;
  const filterUnicum = (params) => {
    const result = params?.reduce((acc, item) => {
      if (acc.includes(item)) {
        return acc; // если значение уже есть, то просто возвращаем аккумулятор
      }
      return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
    }, []);
    return result;
  };

  switch (filters) {
    case "author":
      return (
        <S.FilterPopapItem>
          <S.FilterPopaptable>
            {
              useSelector((state) => state?.handleTrackState?.filterAuthor)
                ?.length
            }
          </S.FilterPopaptable>
          {filterUnicum(event?.data?.data?.map(({ author }) => author))?.map(
            (author) => (
              <S.FilterPopapContent key={author}>
                <S.FilterPopapLink
                  onClick={() =>
                    !filterAuthor.includes(author)
                      ? setFilterAuthor([...filterAuthor, author])
                      : setFilterAuthor(
                          filterAuthor.filter((item) => item !== author)
                        )
                  }
                  $state={Boolean(filterAuthor.includes(author))}
                  key={author}
                >
                  {author}
                </S.FilterPopapLink>
              </S.FilterPopapContent>
            )
          )}
        </S.FilterPopapItem>
      );

    case "genre":
      return (
        <S.FilterPopapItem>
          {filterUnicum(event.data.data.map(({ genre }) => genre))?.map(
            (genre) => (
              <S.FilterPopapContent key={genre}>
                <S.FilterPopapLink
                  onClick={() =>
                    !filterGenre.includes(genre)
                      ? setFilterGenre([...filterGenre, genre])
                      : setFilterGenre(
                          filterGenre.filter((item) => item !== genre)
                        )
                  }
                  $state={Boolean(filterGenre.includes(genre))}
                >
                  {genre}
                </S.FilterPopapLink>
              </S.FilterPopapContent>
            )
          )}
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
