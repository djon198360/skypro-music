import { useState,useEffect } from "react";
import FilterPopapRender from "./FilterPopap";

function FilterRender() {
  const [author, setAuthor] = useState(false);
  const [year, setYear] = useState(false);
  const [genre, setGenre] = useState(false);

  const handle = (event) => {
    const popapName = event.target.dataset.name;
    if (popapName === "author" && author === false) {
      setAuthor((prev) => !prev);
      setGenre(false);
      setYear(false);
    } else {
      setAuthor(false);
    }
    if (popapName === "year" && year === false) {
      setYear((prev) => !prev);
      setGenre(false);
      setAuthor(false);
    } else {
      setYear(false);
    }
    if (popapName === "genre" && genre === false) {
      setGenre((prev) => !prev);
      setYear(false);
      setAuthor(false);
    } else {
      setGenre(false);
    }
  };

   useEffect(() => {
 }, [author,year,genre]); 

  return (
    <div className="filter__block">
      <div className="filter__items">
        <div
          data-name="author"
          onClick={handle}
          aria-hidden="true"
          className={`filter__button button-author _btn-text ${author ? "active" : ""}`}
        >
          исполнителю
        </div>
        {author ? (
          <div className={`${author ? "filter__popap" : "filter__author"}`}>
            <FilterPopapRender event="author" state={author} />
          </div>
        ) : null}
      </div>

      <div className="filter__items">
        <div
          data-name="year"
          onClick={handle}
          aria-hidden="true"
          className={`filter__button button-year _btn-text ${year ? "active" : ""}`}
        >

          году выпуска
        </div>
        {year ? (
          <div className={`${year ? "filter__popap" : "filter__year"}`}>
            <FilterPopapRender event="year" state={year} />
          </div>
        ) : null}
      </div>
      <div className="filter__items">
        <div
          data-name="genre"
          onClick={handle}
          aria-hidden="true"
          className={`filter__button button-genre _btn-text ${genre ? "active" : ""}`}
        >
          жанру
        </div>
        {genre ? (
          <div className={`${genre ? "filter__popap" : "filter__genre"}`}>
            <FilterPopapRender event="genre" state={genre} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FilterRender;
