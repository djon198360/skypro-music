/* eslint-disable react/function-component-definition */
import { useContext } from "react";
import { useSelector } from "react-redux";
import NavMenuLeftRender from "../../components/NavLeft/NavLeft";
import SearchFormRender from "../../components/SearchForm/SearchForm";
import TrackDescriptionCaptionRender from "../../components/TrackDescriptionCaption/TrackDescriptionCaption";
import { PlayListItemRender } from "../../components/PlayList/PlayList";
import { PersonalSideBarRender } from "../../components/SideBar/SideBar";
import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../../components/Skeleton/Skeleton";
import * as S from "../Main/SMain";
import * as SS from "../../components/SideBar/style";
import { Context } from "../../components/AuthForm/AuthForm";
import { todosSelector, loadingSelector } from "../../Store/Selectors/music";

export const FavoritesPageRender = () => {
  const allTrackStore = useSelector(todosSelector);
  const loading = useSelector(loadingSelector);
  const [user] = useContext(Context);

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
              <PlayListItemRender trackStore={allTrackStore} />
            )}
          </S.centerblockContent>
        </S.mainCenterblock>
        {loading ? (
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
