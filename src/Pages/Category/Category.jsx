import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { NavMenuLeftRender } from "../../components/NavLeft/NavLeft"; // "../NavLeft/NavLeft";
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
import { Context } from "../../assets/context";
import { useGetCategoryQuery } from "../../Services/ApiTrack";
import { setTrackCategory, setPage } from "../../Store/Slice/Slice";
import * as S from "../Main/SMain";
import * as SS from "../../components/SideBar/style";

function CategoryPageRender() {
  const [user] = useContext(Context);
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const idPage = location.pathname.split("/").pop();
  const { data, error, isLoading } = useGetCategoryQuery(idPage);

  if (error) {
    setErrors("Произошла ошибка");
  }

  useEffect(() => {
    if (data) {
      dispatch(setTrackCategory(data));
    }
    dispatch(setPage("Category"));
  }, [data]);

  const categoryTrack = useSelector(
    (state) => state.handleTrackState.categoryTrack.items
  );

  return (
    <S.Container>
      <S.Main>
        <NavMenuLeftRender />
        <S.mainCenterblock>
          <SearchFormRender />
          <S.H2>{location.state}</S.H2>
          <S.centerblockContent>
            {error ? (
              <ErrorDescriptionRender>
                {Object.values(errors).map((e) =>
                  e ? (
                    <ErrorDescriptionRender>
                      {e} {"\n"}
                    </ErrorDescriptionRender>
                  ) : null
                )}
              </ErrorDescriptionRender>
            ) : (
              <TrackDescriptionCaptionRender />
            )}
            {isLoading ? <SkeletonTrackRender /> : null}
            {error ? (
              <ErrorDescriptionRender errors="No track">
                Произошла ошибка
              </ErrorDescriptionRender>
            ) : null}
            {categoryTrack && categoryTrack.length > 0 && !isLoading ? (
              <PlayListItemRender trackStore={categoryTrack} />
            ) : null}
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

export default CategoryPageRender;
