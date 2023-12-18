/* eslint-disable react/jsx-no-useless-fragment */
import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteAllTrack, setPage } from "../../Store/Slice/Slice";
import { NavMenuLeftRender } from "../../components/NavLeft/NavLeft";
import {
  SearchFormRender,
  searchTrack,
} from "../../components/SearchForm/SearchForm";
import { useGetAllFavoriteQuery, refreshToken } from "../../Services/ApiTrack";
import {
  TrackDescriptionCaptionRender,
  ErrorDescriptionRender,
} from "../../components/TrackDescriptionCaption/TrackDescriptionCaption";
import { PlayListItemRender } from "../../components/PlayList/PlayList";
import { PersonalSideBarRender } from "../../components/SideBar/SideBar";
import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../../components/Skeleton/Skeleton";
import * as S from "../Main/SMain";
import * as SS from "../../components/SideBar/style";
import { Context } from "../../assets/context";

export function FavoritesPageRender() {
  const PAGE = "Favorite";
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [user] = useContext(Context);
  const [errorGetTrack, setErrorGetTrack] = useState("");
  const {
    data,
    error,
    isLoading,
    refetch: refetchPosts,
  } = useGetAllFavoriteQuery({
    pollingInterval: 3000,
    keepUnusedDataFor: 120,
    refetchOnReconnect: true,
  });
  if (error && error.status === Number(401)) {
    refreshToken();
    refetchPosts();
  }
  const [FavoriteTrack, setFavoriteTrack] = useState(
    useSelector((state) => state.handleTrackState.favoriteTrack)
  );

  useEffect(() => {
    dispatch(setPage(PAGE));
    if (data) {
      dispatch(setFavoriteAllTrack(data));
      setFavoriteTrack(data);
    }
  }, [data]);

  useEffect(() => {
    // refreshToken();

    refetchPosts();
    setErrorGetTrack(null);
  }, [errorGetTrack]);
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
          <S.H2>Мои треки</S.H2>
          <S.centerblockContent>
            {error && !isLoading ? (
              <ErrorDescriptionRender
                errors="Error" /* {Object.values(error).map((errors) => errors)} */
              >
                {/*           {Object.values(error).map((errors) =>
                  errors ? (
                    <ErrorDescriptionRender errors ={errors}> */}
              </ErrorDescriptionRender>
            ) : (
              <TrackDescriptionCaptionRender />
            )}

            {isLoading ? <SkeletonTrackRender /> : null}
            {
              FavoriteTrack?.length &&
              !error &&
              searchValue &&
              searchTrack(searchValue, FavoriteTrack).length === 0 ? (
                <h2>Ничего не найдено</h2>
              ) : (
                <>
                  {FavoriteTrack && !isLoading ? (
                    <PlayListItemRender
                      trackStore={
                        searchValue ? searchTrack(searchValue, FavoriteTrack) : FavoriteTrack
                      }
                    />
                  ) : null}
                </>
              )

              /* (
              <PlayListItemRender trackStore={data} />
            ) */
            }

            {/*             {data && !isLoading && !error ? (
              <PlayListItemRender trackStore={data} />
            ) : (
              <ErrorDescriptionRender errors="No track">
                No Track
              </ErrorDescriptionRender> // <ErrorDescriptionRender errors={Object.values(error).map((errors) =>errors)}></ErrorDescriptionRender>
            )} */}
          </S.centerblockContent>
        </S.mainCenterblock>
        {isLoading ? (
          <SkeletonSideBarRender />
        ) : (
          <SS.MainSidebar>
            <PersonalSideBarRender userName={user} />
          </SS.MainSidebar>
        )}
      </S.Main>
    </S.Container>
  );
}
