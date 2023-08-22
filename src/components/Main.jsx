/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import NavMenuLeftRender from "./NavLeft";
import SearchFormRender from "./SearchForm";
import TrackFilterRender from "./TrackFilter";
import TrackDescriptionCaptionRender from "./TrackDescriptionCaption";
import PlayListItemRender from "./PlayList";
import { SideBarRender } from "./SideBar";
import PlayerRender from "./Player";
import FooterRender from "./Footer";
import { SkeletonTrackRender, SkeletonSideBarRender } from "./Skeleton";

import { dataArray}  from "./data";




function MainPageRender() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
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
            {
              loading ? (
                <SkeletonTrackRender />
              ) : 
     
              
             dataArray.map((list) => 
                <PlayListItemRender key={list.id} listName={list.name} listAuthor={list.author} listAlbum={list.album} ListDuration_in_seconds={list.duration_in_seconds}/>
              
              )
                
              

              /* 
            <PlayListItemRender
              title="Guilt"
              artist="Nero"
              album="Welcome Reality"
              time="4:44"
            /> */
            }
          </div>
        </div>
        {loading ? <SkeletonSideBarRender /> : <SideBarRender />}
      </main>
      <PlayerRender> {loading}</PlayerRender>
      <FooterRender />
    </div>
  );
}
export default MainPageRender;
