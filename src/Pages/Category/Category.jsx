import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getTrackCategory } from "../../API/Api";
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
import { setTrackCategory, setPage } from "../../Store/Slice/Slice";
import * as S from "../Main/SMain";
import * as SS from "../../components/SideBar/style";

function CategoryPageRender() {
  const [user] = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const getCategory = (id) => {
    setIsLoading(true);
    getTrackCategory(id)
      .then((data) => {
        dispatch(setTrackCategory(data));
      })
      .catch(() => {
        setError("Произошла ошибка");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const categoryTrack = useSelector(
    (state) => state.handleTrackState.category.items
  );

  useEffect(() => {
    dispatch(setPage("Category"));
    const id = location.pathname.split("/").pop();
    getCategory(id);
  }, []);

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

            {categoryTrack &&
            categoryTrack.length > 0 &&
            !isLoading &&
            !error ? (
              <PlayListItemRender trackStore={categoryTrack} />
            ) : (
              <ErrorDescriptionRender errors="No track">
                No Track
              </ErrorDescriptionRender> // <ErrorDescriptionRender errors={Object.values(error).map((errors) =>errors)}></ErrorDescriptionRender>
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
}

export default CategoryPageRender;
