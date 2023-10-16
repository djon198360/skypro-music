/* eslint-disable react/function-component-definition */
import { useState, useEffect, StrictMode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addloading } from "../../Store/Actions/Creators/music";
import {
  todosSelector,
  loadingSelector,
} from "../../Store/Selectors/music";
import NavMenuLeftRender from "../../components/NavLeft/NavLeft";
import SearchFormRender from "../../components/SearchForm/SearchForm";
import {
  ErrorDescriptionRender,
  TrackDescriptionCaptionRender,
} from "../../components/TrackDescriptionCaption/TrackDescriptionCaption";
import TrackFilterRender from "../../components/TrackFilter/TrackFilter";
import { PlayListItemRender } from "../../components/PlayList/PlayList";
import { SideBarRender } from "../../components/SideBar/SideBar";


import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../../components/Skeleton/Skeleton";
import * as S from "./SMain";
import { getAllTrack } from "../../API/Api";

export const MainPageRender = () => {
  const [errorMessage, seterrorMessage] = useState();
  const allTrackStore = useSelector(todosSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTrack()
      .then((arrayTrack) => {
        if (arrayTrack.length > 1) {
          dispatch(addTodo(arrayTrack));
        } else {
          Promise.reject(arrayTrack);
        }
      })
      .catch(() => {
        seterrorMessage(`Не удалось загрузить плейлист, попробуйте позже!`);
      })
      .finally(() => {
        dispatch(addloading(false));
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
            {allTrackStore !== null ? (
              <PlayListItemRender trackStore={allTrackStore} />
            ) : null}
          </S.centerblockContent>
        </S.mainCenterblock>
        {loading ? <SkeletonSideBarRender /> : <SideBarRender />}
      </S.Main>
    </S.Container>
  );
}
