/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from "react";
import FilterPopapRender from "./FilterPopap";

function FilterRender(props) {
  const [author, setStateAuthor] = useState(false);
  const [year, setStateYear] = useState(false);
  const [genre, setStateGenre] = useState(false);

  useEffect(() => {}, [author, year, genre]);

  function Popap(event) {
    const filterShowHide = event.target.dataset.name;
    if (filterShowHide === "author") {
      if (author) {
        setStateAuthor(false);
      } else {

        setStateAuthor(true);
        setStateGenre(false);
        setStateYear(false);
       
      }

    }
    if (filterShowHide === "year") {
      if (year) {
        setStateYear(false);
      } else {
        setStateYear(true);
        setStateAuthor(false);
        setStateGenre(false);
    
      }
    }
    if (filterShowHide === "genre") {
      setStateGenre((prev) => prev);
      setStateYear(false);
      setStateAuthor(false);
    }
  }
  console.log(`author ${author}`);
  console.log(`year ${year}`);
  console.log(`genre ${genre}`);
  return (
    <div className="filter__block">
      <input
        id={props.class}
        className={`filter__${props.class}`}
        type="radio"
        data-name={props.name}
        name="filter"
        value={props.name.isChecked}
      />
      <label
        data-name={props.name}
        onClick={Popap}
        htmlFor={props.class}
        aria-hidden="true"
        className={`filter__button button-${props.class} _btn-text`}
      >
        {props.title}
      </label>
      {author && !genre && !year && (
        <div className={`filter__popap popap_${author}`}>
          <FilterPopapRender filter={props.class} />
        </div>
      )}
      {genre && !author && !genre && (
        <div className="filter__popap">
          <FilterPopapRender filter={props.class} />
        </div>
      )}
      {year && (
        <div className="filter__popap">
          <FilterPopapRender filter={props.class} />
        </div>
      )}
    </div>
  );
}

export default FilterRender;
