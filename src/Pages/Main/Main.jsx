/* eslint-disable react/function-component-definition */
import { useState, StrictMode, useEffect } from "react";
import { useDispatch } from "react-redux";
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
import { setUserData } from "../../Store/Slice/UserSlice";
import { useGetAllTodosQuery } from "../../Services/todo";
import * as S from "./SMain";

export const MainPageRender = (props) => {
  console.log(props)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserData(JSON.parse(localStorage.getItem("user"))));
  }, []);
  const [errorMessage, seterrorMessage] = useState();
  const { data, error, isLoading } = useGetAllTodosQuery({
    refetchOnReconnect: true,
  });

  const isEmptyList = !isLoading && !data?.length;
  if (isLoading) {
    return isLoading;
  }

  if (error) {
    seterrorMessage(error.message);
  }

  if (isEmptyList) {
    <p>No todos, yay!</p>;
  }

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
            {isLoading ? <SkeletonTrackRender /> : null}
            {data !== null ? <PlayListItemRender trackStore={data} /> : null}
          </S.centerblockContent>
        </S.mainCenterblock>
        {isLoading ? <SkeletonSideBarRender /> : <SideBarRender />}
      </S.Main>
    </S.Container>
  );
};
