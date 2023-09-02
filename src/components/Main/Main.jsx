/* eslint-disable no-unused-vars */
import { useState, useEffect ,StrictMode} from "react";
import NavMenuLeftRender from "../NavLeft/NavLeft";
import SearchFormRender from "../SearchForm/SearchForm";
import TrackFilterRender from "../TrackFilter/TrackFilter";
import TrackDescriptionCaptionRender from "../TrackDescriptionCaption/TrackDescriptionCaption";
import PlayListItemRender from "../PlayList/PlayList";
import { SideBarRender } from "../SideBar/SideBar";
import PlayerRender from "../Player/Player";
import FooterRender from "../Footer/Footer";
import { SkeletonTrackRender, SkeletonSideBarRender } from "../Skeleton/Skeleton";

import { dataArray}  from "../data";

import * as S from "./Style"



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
    <S.Container>
      <S.Main>
        <NavMenuLeftRender />
        <S.mainCenterblock>
          <SearchFormRender />
          <S.H2>Треки</S.H2>
          <StrictMode><TrackFilterRender /></StrictMode>
          <S.centerblockContent>
            <TrackDescriptionCaptionRender />
            {
              loading ? (
                <SkeletonTrackRender />
              ) : dataArray.map((list) => 
                <PlayListItemRender key={list.id} listName={list.name} listAuthor={list.author} listAlbum={list.album} ListDuration_in_seconds={list.duration_in_seconds}/>    
              )
            }
          </S.centerblockContent>
          </S.mainCenterblock>
        {loading ? <SkeletonSideBarRender /> : <SideBarRender />}
        </S.Main>
      <PlayerRender> {loading}</PlayerRender>
      <FooterRender />
      </S.Container>
  );
}
export default MainPageRender;
