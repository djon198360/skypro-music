/* eslint-disable import/no-cycle */
/* eslint-disable react/function-component-definition */
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavMenuLeftRender } from "../../components/NavLeft/NavLeft";
import SearchFormRender from "../../components/SearchForm/SearchForm";
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
import { getFavoritesTrack } from "../../API/Api";
import { setFavoriteAllTrack, setPage } from "../../Store/Slice/Slice";

export const FavoritesPageRender = () => {
  const [user] = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const getFavorite = () => {
    setIsLoading(true);
    getFavoritesTrack()
      .then((data) => { 
       dispatch(setFavoriteAllTrack(data))
       
      })
      .catch(() => {
        setError("Произошла ошибка");
      })
      .finally(() => {
        setIsLoading(false);
       
      });
     
  };

  useEffect(() => {
    dispatch(setPage("Favorite"));
    getFavorite();
  }, []);

  const favoriteTrack = useSelector(
    (state) => state.handleTrackState.favoriteTrack
  );

  return (
    <S.Container>
      <S.Main>
        <NavMenuLeftRender />
        <S.mainCenterblock>
          <SearchFormRender />
          <S.H2>Мои треки</S.H2>
          <S.centerblockContent>
            {error ? (
              <ErrorDescriptionRender>
                {Object.values(error).map((errors) =>
                  errors ? (
                    <ErrorDescriptionRender>
                      {errors} {"\n"}
                    </ErrorDescriptionRender>
                  ) : null
                )}
              </ErrorDescriptionRender>
            ) : (
              <TrackDescriptionCaptionRender />
            )}

            {isLoading ? <SkeletonTrackRender /> : null}
            {favoriteTrack && favoriteTrack.length > 0 && !isLoading && !error? (
              <PlayListItemRender trackStore={favoriteTrack} />
            ) : (
              <ErrorDescriptionRender errors="No track">No Track</ErrorDescriptionRender> // <ErrorDescriptionRender errors={Object.values(error).map((errors) =>errors)}></ErrorDescriptionRender>
            )}
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
};
