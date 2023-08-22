/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import FilterPopapRender from "./FilterPopap";


function FilterRender(props) {
  const [popapState, setPopapState] = useState(false);
  const TooglePopapVisibility = () => setPopapState(!popapState); 

  useEffect(() => {}, []);

  return (
    <div
      onClick={TooglePopapVisibility}
      data-name={props.name}
      className={`filter__button button-${props.class} _btn-text`}
    >
      {props.title}

      {popapState && (
        <div className="filter__popap">
          <FilterPopapRender filter={props.name}/>
        </div>
      )}
    </div>
  );
}

export default FilterRender;
