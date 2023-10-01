import { useState, useEffect ,useContext} from "react";
import NavMenuLeftRender from "../../components/NavLeft/NavLeft";
import SearchFormRender from "../../components/SearchForm/SearchForm";
import TrackDescriptionCaptionRender from "../../components/TrackDescriptionCaption/TrackDescriptionCaption";
import PlayListItemRender from "../../components/PlayList/PlayList";
import PlayerRender from "../../components/Player/Player";
import FooterRender from "../../components/Footer/Footer";
import { PersonalSideBarRender } from "../../components/SideBar/SideBar";
import {
  SkeletonTrackRender,SkeletonSideBarRender
} from "../../components/Skeleton/Skeleton";
import { dataArray } from "../../components/data";
import * as S from "../Main/SMain";
import * as SS from "../../components/SideBar/style"
import { setCurrentTrackContext,Context } from "../../components/AuthForm/AuthForm";


function FavoritesPageRender() {
  const [currentTrack, setCurrentTrack] = useContext(setCurrentTrackContext);
  const [user] = useContext(Context);
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
          <S.H2>Мои треки</S.H2>
          <S.centerblockContent>
            <TrackDescriptionCaptionRender />
            {loading ? (
              <SkeletonTrackRender />
            ) : (
              dataArray.map((list) => (
                <PlayListItemRender
                setCurrentTrack={setCurrentTrack}
                key={list.id}
                listName={list.name}
                listAuthor={list.author}
                listAlbum={list.album}
                ListDuration_in_seconds={list.duration_in_seconds}
                listUrl={list.track_file}
                />
              ))
            )}
          </S.centerblockContent>
        </S.mainCenterblock>
         {loading ? <SkeletonSideBarRender /> : <SS.MainSidebar><PersonalSideBarRender userName={user}/></SS.MainSidebar>}
      </S.Main>
      {currentTrack ? (
        <PlayerRender current={currentTrack} loading={loading}>
          
        </PlayerRender>
      ) : null}
      <FooterRender />
    </S.Container>
  );
}

export default FavoritesPageRender;
