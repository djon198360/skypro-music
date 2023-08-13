import NavMenuLeftRender from "./NavLeft";
import SearchFormRender from "./SearchForm";
import TrackFilterRender from "./TrackFilter";
import TrackDescriptionCaptionRender from "./TrackDescriptionCaption";
import PlayListItemRender from "./PlayList";
import {SideBarRender} from "./SideBar";
import PlayerRender from "./Player";
import FooterRender from "./Footer";

function MainPageRender() {
  return (
    <div className="container">
      <main className="main">
        <NavMenuLeftRender />
        <div className="main__centerblock centerblock">
          <SearchFormRender />
          <h2 className="centerblock__h2">Треки</h2>
          <TrackFilterRender />
          <div className="centerblock__content">
            <TrackDescriptionCaptionRender />
            <PlayListItemRender
              title="Guilt"
              artist="Nero"
              album="Welcome Reality"
              time="4:44"
            />
          </div>
        </div>
        <SideBarRender />
      </main>
      <PlayerRender />
      <FooterRender />
    </div>
  );
}
export default MainPageRender;
