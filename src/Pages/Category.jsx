import { useState, useEffect } from "react";
import {useLocation } from "react-router";
import NavMenuLeftRender from  "../components/NavLeft/NavLeft" // "../NavLeft/NavLeft";
import SearchFormRender from "../components/SearchForm/SearchForm";
import TrackDescriptionCaptionRender from "../components/TrackDescriptionCaption/TrackDescriptionCaption";
import PlayListItemRender from "../components/PlayList/PlayList";
import PlayerRender from "../components/Player/Player";
import FooterRender from "../components/Footer/Footer";
import { PersonalSideBarRender } from "../components/SideBar/SideBar";
import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../components/Skeleton/Skeleton";
import { dataArray } from "../components/data";
import * as S from "./SMain";
import * as SS from "../components/SideBar/style";

function CategoryPageRender() {
  const [loading, setLoading] = useState(true);
  const location = useLocation()
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <S.Container>
      <S.Main>
        <NavMenuLeftRender />
        <S.mainCenterblock>
          <SearchFormRender />
          <S.H2>{location.state}</S.H2>
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
        {loading ? (
          <SkeletonSideBarRender />
        ) : (
          <SS.MainSidebar>
            <PersonalSideBarRender userName="Разработчик SkyPro" />
          </SS.MainSidebar>
        )}
      </S.Main>
      <PlayerRender> {loading}</PlayerRender>
      <FooterRender />
    </S.Container>
  );
}

export default CategoryPageRender;
