import { useState, useEffect } from "react";
import NavMenuLeftRender from "./NavLeft";
import SearchFormRender from "./SearchForm";
import TrackFilterRender from "./TrackFilter";
import TrackDescriptionCaptionRender from "./TrackDescriptionCaption";
import PlayListItemRender from "./PlayList";
import { SideBarRender } from "./SideBar";
import PlayerRender from "./Player";
import FooterRender from "./Footer";
import  { SkeletonTrackRender, SkeletonSideBarRender } from "./Skeleton";

function MainPageRender() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

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
            {loading ? <SkeletonTrackRender /> :
            <PlayListItemRender
              title="Guilt"
              artist="Nero"
              album="Welcome Reality"
              time="4:44"
            />}
          </div>
        </div>
        {loading ? <SkeletonSideBarRender /> :<SideBarRender />}
      </main>
      <PlayerRender> {loading}</PlayerRender>
      <FooterRender />
    </div>
  );
}
export default MainPageRender;
