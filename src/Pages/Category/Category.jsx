import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import NavMenuLeftRender from "../../components/NavLeft/NavLeft"; // "../NavLeft/NavLeft";
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
// import { Context } from "../../components/AuthForm/AuthForm";
import { todosSelector, loadingSelector } from "../../Store/Selectors/music";

function CategoryPageRender() {
  const loading = useSelector(loadingSelector);
  const location = useLocation();
  const allTrackStore = useSelector(todosSelector);
 // const [user] = useContext(Context);
  useEffect(() => {}, []);

  return (
    <S.Container>
      <S.Main>
        <NavMenuLeftRender />
        <S.mainCenterblock>
          <SearchFormRender />
          <S.H2>{location.state}</S.H2>
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
            <PersonalSideBarRender />
          </SS.MainSidebar>
        )}
      </S.Main>
    </S.Container>
  );
}

export default CategoryPageRender;
