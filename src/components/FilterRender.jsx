/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState ,useEffect} from "react";
import FilterPopapRender from "./FilterPopap";

function FilterRender(props) {
  // const filter = props.name;
  const [author, setStateAuthor] = useState(false);
  const [year, setStateYear] = useState(false);
  const [genre, setStateGenre] = useState(false);

  useEffect(() => {    

  },
  [author,year,genre]);

    function Popap(event) {
      const filterShowHide = event.target.dataset.name;
      if (filterShowHide === "author") {
        setStateAuthor({isChecked:true})
        setStateYear({isChecked:false})
        setStateGenre({isChecked:false})
        console.dir(author);
      }
      if (filterShowHide === "year") {
        setStateYear({isChecked:true})
        setStateAuthor({isChecked:false})
        setStateGenre({isChecked:false})
        console.dir(year);
      }
      if (filterShowHide === "genre") {
        setStateGenre({isChecked:true})
        setStateYear({isChecked:false})
        setStateAuthor({isChecked:false})
        console.dir(genre);
      }
  }

  return (
    <div>
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
      {author.isChecked && (
        <div className="filter__popap">
          <FilterPopapRender filter={props.class} />
        </div>
      )}
     {genre.isChecked && (
        <div className="filter__popap">
          <FilterPopapRender filter={props.class} />
        </div>
      )} 
      {year.isChecked && (
        <div className="filter__popap">
          <FilterPopapRender filter={props.class} />
        </div>
      )
      }
    </div>
  );
}

export default FilterRender;
