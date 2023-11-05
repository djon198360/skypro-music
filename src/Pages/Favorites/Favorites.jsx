/* eslint-disable react/function-component-definition */
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavMenuLeftRender } from "../../components/NavLeft/NavLeft";
import SearchFormRender from "../../components/SearchForm/SearchForm";
import {
  ErrorDescriptionRender,
  TrackDescriptionCaptionRender,
} from "../../components/TrackDescriptionCaption/TrackDescriptionCaption";
import { PlayListItemRender } from "../../components/PlayList/PlayList";
import { PersonalSideBarRender } from "../../components/SideBar/SideBar";
import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../../components/Skeleton/Skeleton";
import * as S from "../Main/SMain";
import * as SS from "../../components/SideBar/style";
import { Context } from "../../components/AuthForm/AuthForm";
import { useGetTokenMutation } from "../../Services/Auth";
import { setAccessToken, setRefreshToken } from "../../Store/Slice/Slice";
// import { useGetAllFavoriteQuery } from "../../Services/todo";

export const FavoritesPageRender = () => {
  const dispatch = useDispatch();
  const [user] = useContext(Context);
  const [addDataGetToken, { data, error, isLoading }] = useGetTokenMutation({
    refetchOnReconnect: true,
  });

  const getToken = () => {
    addDataGetToken({
      email: JSON.parse(localStorage.getItem("user")).email,
      password: JSON.parse(localStorage.getItem("user")).password,
      completed: false,
      refetchOnReconnect: true,
    });
  };
  console.log(data);
  const allTrackStore = data;
  dispatch(setAccessToken(data.access));
  dispatch(setRefreshToken(data.refresh));
  // const { data, error, isLoading } = useaddDataGetTokenQuery();
  useEffect(() => {
    getToken();
  }, []);

  return (
    <S.Container disabled={isLoading}>
      <S.Main>
        <NavMenuLeftRender />
        <S.mainCenterblock>
          <SearchFormRender />
          <S.H2>Мои треки</S.H2>
          <S.centerblockContent>
            {error ? (
              <ErrorDescriptionRender
                errors={error.message}
              ></ErrorDescriptionRender>
            ) : (
              <TrackDescriptionCaptionRender />
            )}

            {isLoading ? <SkeletonTrackRender /> : null}
            {allTrackStore ? (
              <PlayListItemRender trackStore={allTrackStore} />
            ) : (
              <ErrorDescriptionRender errors="Список треков пуст"></ErrorDescriptionRender>
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
