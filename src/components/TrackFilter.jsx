import { StrictMode } from "react";
import FilterRender from "./FilterRender";


function TrackFilterRender() {
  return (<StrictMode>
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
       <FilterRender />
    </div>
    </StrictMode> );
}
export default TrackFilterRender;
