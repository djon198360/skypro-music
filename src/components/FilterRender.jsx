import { useState } from "react";
import FilterPopapRender from "./FilterPopap";


function FilterRender(props) {

const [author,setAuthor] = useState(false);
const [year,setYear] = useState(false);
const [genre,setGenre] = useState(false);


const handle = (event) => {
  const popapName= event.target.dataset.name;
  if (popapName === "author" && author === false) {
   
    setAuthor((prev) => !prev); setGenre(false);setYear(false);
  }
   else {setAuthor(false);}
  if(popapName === "year" && year === false)  {
    setYear((prev) => !prev); setGenre(false);setAuthor(false);} 
    else {setYear(false)}
  if(popapName === "genre" && genre === false) {
    setGenre((prev) => !prev);setYear(false);setAuthor(false);} 
    else {setGenre(false)}
}

/* useEffect(() => {

  console.log("Huki")
     setAuthor(author)
     setYear(year)
     setGenre(genre)
   
   
 console.log(`${author} автор`)
 console.log(`${year} год`)
 console.log(`${genre} жанр`)
 }, [author,year,genre]); */

  return (
    <div className="filter__block">
      <input
        id={props.class}
        className={`filter__${props.class}`}
        type="radio"
        name="filter"
        value={props.name}
      />
      <label
        data-name={props.name}
        onClick={handle}
        htmlFor={props.class}
        aria-hidden="true"
        className={`filter__button button-${props.class} _btn-text`}
      >
        {props.title}
        {author}{year}{genre}
      </label>
    
{author ? <div className={`${author ? 'filter__popap' :'filter__author'}`}><FilterPopapRender event={props.name} state={author}/></div> :null}
{year ? <div className={`${year ? 'filter__popap' :'filter__author'}`}><FilterPopapRender event={props.name} state={year}/></div>:null}
{genre ? <div className="filter__popap"><FilterPopapRender event={props.name} state={genre}/></div> :null}
    </div>
  );
}

export default FilterRender;
