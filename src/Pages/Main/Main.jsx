/* eslint-disable no-unused-vars */
import { useState, StrictMode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavMenuLeftRender } from "../../components/NavLeft/NavLeft";
import {
  SearchFormRender,
  searchTrack,
} from "../../components/SearchForm/SearchForm";
import {
  ErrorDescriptionRender,
  TrackDescriptionCaptionRender,
} from "../../components/TrackDescriptionCaption/TrackDescriptionCaption";
import TrackFilterRender from "../../components/TrackFilter/TrackFilter";
import { PlayListItemRender } from "../../components/PlayList/PlayList";
import { SideBarRender } from "../../components/SideBar/SideBar";
import { setAllTrack, setPage } from "../../Store/Slice/Slice";

import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../../components/Skeleton/Skeleton";
import { useGetAllTrackQuery } from "../../Services/ApiTrack";
import * as S from "./SMain";

export function MainPageRender() {

  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllTrackQuery({
        pollingInterval: 3000,
    keepUnusedDataFor: 120, 
    refetchOnReconnect: true,
  });
  useEffect(() => {
    dispatch(setPage("allTrack"));
  }, []);
  const [searchValue, setSearchValue] = useState();
  const [errorMessage, seterrorMessage] = useState();
  const isEmptyList = !isLoading && !data?.length;

  if (error) {
    seterrorMessage(error.message);
  }

  if (isEmptyList) {
    seterrorMessage("Список треков пуст");
  }
  useEffect(() => {
    dispatch(setPage("allTrack"));
    if (data) {
      dispatch(setAllTrack(data));
    }
  }, [data]);
  const allTrack = useSelector((state) => state.handleTrackState.allTrack);

  return (
    <S.Container>
      <S.Main>
        <NavMenuLeftRender />
        <S.mainCenterblock>
        <SearchFormRender
            setSearchValue={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <S.H2>Треки</S.H2>
          <StrictMode>
            <TrackFilterRender  array={data}/>
          </StrictMode>
          <S.centerblockContent>
            {errorMessage ? (
              <ErrorDescriptionRender
                errors={Object.values(errorMessage).map((errors) => errors)}
              ></ErrorDescriptionRender>
            ) : (
              <TrackDescriptionCaptionRender />
            )}
            {isLoading ? (
              <SkeletonTrackRender />
            ) : (<>
            {searchValue && searchTrack(searchValue, allTrack).length === 0 && data ?  seterrorMessage("Список треков пуст")}
             :  <PlayListItemRender
              trackStore={
                searchValue ? searchTrack(searchValue, data) : data
              }
              /> 

            </>)}
            {/* {data !== null ? <PlayListItemRender trackStore={data} /> : null} */}
          </S.centerblockContent>
        </S.mainCenterblock>
        {isLoading ? <SkeletonSideBarRender /> : <SideBarRender />}
      </S.Main>
    </S.Container>
  );
}
