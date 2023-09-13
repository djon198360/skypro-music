/* eslint-disable no-unused-vars */
import { useState, useEffect, StrictMode, useContext } from "react";
import NavMenuLeftRender from "../components/NavLeft/NavLeft";
import SearchFormRender from "../components/SearchForm/SearchForm";
import TrackFilterRender from "../components/TrackFilter/TrackFilter";
import TrackDescriptionCaptionRender from "../components/TrackDescriptionCaption/TrackDescriptionCaption";
import PlayListItemRender from "../components/PlayList/PlayList";
import { SideBarRender } from "../components/SideBar/SideBar";
import PlayerRender from "../components/Player/Player";
import FooterRender from "../components/Footer/Footer";
import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../components/Skeleton/Skeleton";
import { dataArray } from "../components/data";
import * as S from "./SMain";
import Context from "../components/AuthForm/AuthForm";

function MainPageRender() {
const [currentTrack,setCurrentTrack] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
         /*  getAllTrack().then((todos) => {console.log(todos)}) 
 setAllTrack(todos)
 */
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Container>
      <S.Main>
        {/* <NavMenuLeftRender /> */}
        <S.mainCenterblock>
          <SearchFormRender />
          <S.H2>Треки</S.H2>
          <StrictMode>
            <TrackFilterRender />
          </StrictMode>
          <S.centerblockContent>
            <TrackDescriptionCaptionRender />
            {loading ? (
              <SkeletonTrackRender />
            ) : (
              dataArray.map((list) => (
                <PlayListItemRender 
                 setCurrentTrack = {setCurrentTrack}
                  key={list.id}
                  listName={list.name}
                  listAuthor={list.author}
                  listAlbum={list.album}
                  ListDuration_in_seconds={list.duration_in_seconds}
                  listUrl = {list.track_file}
                  
                />
              ))
            )}
          </S.centerblockContent>
        </S.mainCenterblock>
        {loading ? <SkeletonSideBarRender /> : <SideBarRender />}
      </S.Main>
      {currentTrack ? <PlayerRender current = {currentTrack} loading={loading}> </PlayerRender>: null}
      <FooterRender />
    </S.Container>
    
  );
}

  export default MainPageRender;
