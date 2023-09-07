import { useState, useEffect } from "react";
import NavMenuLeftRender from "../NavLeft/NavLeft";
import SearchFormRender from "../SearchForm/SearchForm";
import TrackDescriptionCaptionRender from "../TrackDescriptionCaption/TrackDescriptionCaption";
import PlayListItemRender from "../PlayList/PlayList";
import PlayerRender from "../Player/Player";
import FooterRender from "../Footer/Footer";
import { PersonalSideBarRender } from "../SideBar/SideBar";
import {
  SkeletonTrackRender,SkeletonSideBarRender
} from "../Skeleton/Skeleton";
import { dataArray } from "../data";
import * as S from "./SMain";
import * as SS from "../SideBar/style"

function CategoryPageRender() {
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
          <S.centerblockContent>
            <TrackDescriptionCaptionRender />
            {loading ? (
              <SkeletonTrackRender />
            ) : (
              dataArray.map((list) => (
                <PlayListItemRender
                  key={list.id}
                  listName={list.name}
                  listAuthor={list.author}
                  listAlbum={list.album}
                  ListDuration_in_seconds={list.duration_in_seconds}
                />
              ))
            )}
          </S.centerblockContent>
        </S.mainCenterblock>
         {loading ? <SkeletonSideBarRender /> : <SS.MainSidebar><PersonalSideBarRender userName="Разработчик SkyPro" /></SS.MainSidebar>}
      </S.Main>
      <PlayerRender> {loading}</PlayerRender>
      <FooterRender />
    </S.Container>
  );
}

export default CategoryPageRender;
