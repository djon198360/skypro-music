
import { dataArray } from "./data";

function FilterPopapRender(event) {
 
  const filters = event.event;

  switch (filters) {
    case "author":
      return (
        <div className="filter__popap_item">
          {dataArray.map(({ author,id }) => (
            <div key={id} className="filter__popap__content">
              <a className="filter__popap_a"  href="http://">
              {author}
              </a>
            </div>
          ))}
        </div>
      );
      

    case "genre":
      return (
        <div className="filter__popap_item">
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
        <div className="filter__popap_item">
         
            <div className="filter__popap__content">
            <a className="filter__popap_a" href="http://">
          По умолчанию

              </a></div>
              <div className="filter__popap__content">
              <a className="filter__popap_a" href="http://">
          Сначала новые

              </a></div>
              <div className="filter__popap__content">
              <a className="filter__popap_a" href="http://">
          Сначала старые

              </a>
            </div>
         
        </div>
      );
      
    default:
      break;
  }
}

export default FilterPopapRender;
