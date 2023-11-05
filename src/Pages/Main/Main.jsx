import { useState, StrictMode } from "react";
import { NavMenuLeftRender } from "../../components/NavLeft/NavLeft";
import SearchFormRender from "../../components/SearchForm/SearchForm";
import {
  ErrorDescriptionRender,
  TrackDescriptionCaptionRender,
} from "../../components/TrackDescriptionCaption/TrackDescriptionCaption";
import TrackFilterRender from "../../components/TrackFilter/TrackFilter";
import { PlayListItemRender } from "../../components/PlayList/PlayList";
import { SideBarRender } from "../../components/SideBar/SideBar";

import {
  SkeletonTrackRender,
  SkeletonSideBarRender,
} from "../../components/Skeleton/Skeleton";
import { useGetAllTrackQuery } from "../../Services/ApiTrack";
import * as S from "./SMain";

export function MainPageRender() {
  const { data, error, isLoading } = useGetAllTrackQuery({
/*     pollingInterval: 3000,
    keepUnusedDataFor: 120, */
    refetchOnReconnect: true,
  });
  const [errorMessage, seterrorMessage] = useState();
  const isEmptyList = !isLoading && !data?.length;

  if (error) {
    seterrorMessage(error.message);
  }

  if (isEmptyList) {
    seterrorMessage("Список треков пуст");
  }

  return (
    <S.Container>
      <S.Main>
        <NavMenuLeftRender />
        <S.mainCenterblock>
          <SearchFormRender />
          <S.H2>Треки</S.H2>
          <StrictMode>
            <TrackFilterRender />
          </StrictMode>
          <S.centerblockContent>
            {errorMessage ? (
              <ErrorDescriptionRender
                errors={errorMessage}
              ></ErrorDescriptionRender>
            ) : (
              <TrackDescriptionCaptionRender />
            )}
            {isLoading ? <SkeletonTrackRender /> : <PlayListItemRender trackStore={data} />}
            {/* {data !== null ? <PlayListItemRender trackStore={data} /> : null} */}
          </S.centerblockContent>
        </S.mainCenterblock>
        {isLoading ? <SkeletonSideBarRender /> : <SideBarRender />}
      </S.Main>
    </S.Container>
  );
}
