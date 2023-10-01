/* eslint-disable no-unused-vars */
import { useState, useEffect, StrictMode, useContext } from "react";
import NavMenuLeftRender from "../../components/NavLeft/NavLeft";
import SearchFormRender from "../../components/SearchForm/SearchForm";
import {
  ErrorDescriptionRender,
  TrackDescriptionCaptionRender,
} from "../../components/TrackDescriptionCaption/TrackDescriptionCaption";
import TrackFilterRender from "../../components/TrackFilter/TrackFilter";
import PlayListItemRender from "../../components/PlayList/PlayList";
import { SideBarRender } from "../../components/SideBar/SideBar";
import PlayerRender from "../../components/Player/Player";
import FooterRender from "../../components/Footer/Footer";
import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../../components/Skeleton/Skeleton";
import * as S from "./SMain";
import { setCurrentTrackContext } from "../../components/AuthForm/AuthForm";
import { getAllTrack } from "../../Api";

function MainPageRender() {
  const [currentTrack, setCurrentTrack] = useContext(setCurrentTrackContext);
  const [allTrack, setAllTrack] = useState(null);
  const [loading, setLoading] = useState(null);
  const [errorMessage, seterrorMessage] = useState();
 // const localUser =JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setLoading(true);
    getAllTrack()
      .then((arrayTrack) => {
        if (arrayTrack.length > 1) {
          setAllTrack(arrayTrack);
        } else {
          Promise.reject(arrayTrack);
        }
      })
      .catch(() => {
        seterrorMessage(`Не удалось загрузить плейлист, попробуйте позже!`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <S.Container>
      <S.Main>
        <NavMenuLeftRender />
        <S.mainCenterblock>
          <SearchFormRender />
          <S.H2>Треки</S.H2>
          <StrictMode>
            <TrackFilterRender />
          </StrictMode>
          <S.centerblockContent>
            {errorMessage ? (
              <ErrorDescriptionRender
                errors={errorMessage}
              ></ErrorDescriptionRender>
            ) : (
              <TrackDescriptionCaptionRender />
            )}
            {loading ? <SkeletonTrackRender /> : null}
            {allTrack !== null
              ? allTrack.map((list, index) => (
                  <PlayListItemRender
                    setCurrentTrack={setCurrentTrack}
                    key={list.id}
                    listKey={index}
                    listName={list.name}
                    listAuthor={list.author}
                    listAlbum={list.album}
                    ListDuration_in_seconds={list.duration_in_seconds}
                    listUrl={list.track_file}
                  />
                ))
              : null}
          </S.centerblockContent>
        </S.mainCenterblock>
        {loading ? <SkeletonSideBarRender /> : <SideBarRender />}
      </S.Main>
      {currentTrack ? (
        <PlayerRender current={currentTrack} toggle="false" loading={loading}></PlayerRender>
      ) : null}
      <FooterRender />
    </S.Container>
  );
}

export default MainPageRender;
