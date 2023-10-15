import { useState, useEffect ,useContext} from "react";
import { useSelector } from "react-redux";
import NavMenuLeftRender from "../../components/NavLeft/NavLeft";
import SearchFormRender from "../../components/SearchForm/SearchForm";
import TrackDescriptionCaptionRender from "../../components/TrackDescriptionCaption/TrackDescriptionCaption";
import {PlayListItemRender} from "../../components/PlayList/PlayList";
import {PlayerRender} from "../../components/Player/Player";
import FooterRender from "../../components/Footer/Footer";
import { PersonalSideBarRender } from "../../components/SideBar/SideBar";
import {
  SkeletonTrackRender,SkeletonSideBarRender
} from "../../components/Skeleton/Skeleton";
// import { dataArray } from "../../components/data";
import * as S from "../Main/SMain";
import * as SS from "../../components/SideBar/style"
import { Context } from "../../components/AuthForm/AuthForm";
import {
  todosSelector,
  currentTrackSelector
} from "../../Store/Selectors/music";

function FavoritesPageRender() {
  const allTrackStore = useSelector(todosSelector);
  const currentTrackStore = useSelector(currentTrackSelector);
  const [user] = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  console.dir(currentTrackStore)
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
            //  allTrackStore.map((list) => (
                <PlayListItemRender trackStore={allTrackStore} 
               /*  setCurrentTrack={setCurrentTrack}
                key={list.id}
                listName={list.name}
                listAuthor={list.author}
                listAlbum={list.album}
                ListDuration_in_seconds={list.duration_in_seconds}
                listUrl={list.track_file} */
                />
       //       ))
            )}
          </S.centerblockContent>
        </S.mainCenterblock>
         {loading ? <SkeletonSideBarRender /> : <SS.MainSidebar><PersonalSideBarRender userName={user}/></SS.MainSidebar>}
      </S.Main>
      {currentTrackStore ? (
        <PlayerRender current={currentTrackStore} loading={loading}>
          
        </PlayerRender>
      ) : null}
      <FooterRender />
    </S.Container>
  );
}

export default FavoritesPageRender;
