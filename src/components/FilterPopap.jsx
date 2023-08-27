
import { dataArray } from "./data";


function FilterPopapRender(props) {

  switch (props.filter) {
    case "author":
      return (
        <div>
          {dataArray.map(({ author,id }) => (
            <div key={id} className="filter__popap__content">
              <a className="filter__popap_a" href="http://">
              {author}
              </a>
            </div>
          ))}
        </div>
      );
      

    case "genre":
      return (
        <div>
          {dataArray.map(({ genre, id }) => (
            <div key={id} className="filter__popap__content">
              <a key={id} className="filter__popap_a" href="http://">
                {genre}
              </a>
            </div>
          ))}
        </div>
      );
      

    case "year":
      return (
        <div>
          {dataArray.map((year) => (
            <div key={year.id} className="filter__popap__content">
              <a className="filter__popap_a" href="http://">
                {year.release_date}

              </a>
            </div>
          ))}
        </div>
      );
      
    default:
      break;
  }
}

export default FilterPopapRender;
