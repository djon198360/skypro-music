/* eslint-disable react/function-component-definition */
import { useContext, useEffect, useState } from "react";
import NavMenuLeftRender from "../../components/NavLeft/NavLeft";
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
// import { useGetAllFavoriteQuery } from "../../Services/todo";

export const FavoritesPageRender = () => {
  const [user] = useContext(Context);
  const [token, setToken] = useState(null);
  const [addTodo, { data, error, isLoading }] = useGetTokenMutation({
    refetchOnReconnect: true,
  });
  const handleToken = () => {
    addTodo({
      email: JSON.parse(localStorage.getItem("user")).email,
      password: JSON.parse(localStorage.getItem("user")).password,
      completed: false,
    });
  };

  const allTrackStore = null;

  // const { data, error, isLoading } = useAddTodoQuery();
  useEffect(() => {
    handleToken();
  }, []);
  useEffect(() => {
    console.log(data);
    setToken(data.access);

    console.log(token);
  }, [token]);

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
