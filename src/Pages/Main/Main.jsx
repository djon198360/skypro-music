/* eslint-disable no-undef */
/* eslint-disable no-shadow */
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
import {
  setAllTrack,
  setPage,
  setCurrentPlaylist,
} from "../../Store/Slice/Slice";

import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../../components/Skeleton/Skeleton";
import { useGetAllTrackQuery } from "../../Services/ApiTrack";
import * as S from "./SMain";

export function MainPageRender() {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllTrackQuery({
    // pollingInterval: 3000,
    // keepUnusedDataFor: 120,
    refetchOnReconnect: true,
  });

  const [searchValue, setSearchValue] = useState();
  const [errorMessage, seterrorMessage] = useState();
  const [allTracks, setAllTracks] = useState(
    useSelector((state) => state?.handleTrackState.allTrack)
  );
  const isEmptyList = !isLoading && !data?.length;
  const filterAuthor = useSelector(
    (state) => state?.handleTrackState?.filterAuthor
  );
  const filterGenre = useSelector(
    (state) => state?.handleTrackState?.filterGenre
  );
  const filterYear = useSelector(
    (state) => state?.handleTrackState?.filterYear
  );
  if (error) {
    seterrorMessage(error.message);
    return (
      <h3>
        Не удалось загрузить плейлист, попробуйте позже:{' '}
        {JSON.stringify(error.data, null, 2)}
      </h3>
    )
  }
  if (isEmptyList) {
    seterrorMessage("Список треков пуст");
  }

  /*   useEffect(() => {
    dispatch(setAllTrack(data))
}, []);
 */
  const filterTracks = () => {
    let allFilterTrack = data;
    if (filterGenre.length > 0) {
      allFilterTrack = allFilterTrack?.filter(({ genre }) =>
        filterGenre.includes(genre)
      );
    }

    if (filterAuthor.length > 0) {
      allFilterTrack = allFilterTrack?.filter(({ author }) =>
        filterAuthor.includes(author)
      );
    }

    if (filterYear.length > 0 && filterYear[0] > 0) {
      if (filterYear[0] === 1) {
        allFilterTrack = [...allFilterTrack].sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );
      } else {
        allFilterTrack = [...allFilterTrack].sort(
          (a, b) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
        );
      }
    }
    return allFilterTrack;
  };
  const allFilterTrack = filterTracks();

  useEffect(() => {
    dispatch(setPage("allTrack"));
    if (data) {
      dispatch(setCurrentPlaylist(allFilterTrack));
    }
  }, [allFilterTrack]);

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
            <TrackFilterRender array={data} />
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
            ) : (
              <>
                <PlayListItemRender
                  trackStore={
                    searchValue
                      ? searchTrack(searchValue, allFilterTrack)
                      : allFilterTrack
                  }
                />
                {searchValue &&
                searchTrack(searchValue, allFilterTrack).length === 0 ? (
                  <span>Таких треков не найдено</span>
                ) : null}
              </>
            )}
          </S.centerblockContent>
        </S.mainCenterblock>
        {isLoading ? <SkeletonSideBarRender /> : <SideBarRender />}
      </S.Main>
    </S.Container>
  );
}
