import FilterRender from "./FilterRender";

function TrackFilterRender() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterRender title="исполнителю" name="author" class="author" />
      <FilterRender title="году выпуска" name="year" class="year" />
      <FilterRender title="жанру" name="genre" class="genre" />
    </div>
  );
}
export default TrackFilterRender;
