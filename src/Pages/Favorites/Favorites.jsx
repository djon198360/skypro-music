/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-cycle */
/* eslint-disable react/function-component-definition */
import { useContext, useState,useEffect} from "react";

import { NavMenuLeftRender } from "../../components/NavLeft/NavLeft";
import {
  SearchFormRender,
  searchTrack,
} from "../../components/SearchForm/SearchForm";
import { useGetAllFavoriteQuery,refreshToken } from "../../Services/ApiTrack";
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




export const FavoritesPageRender = () => {
  const [searchValue, setSearchValue] = useState("");
  const [user] = useContext(Context);
  const [errorGetTrack,setErrorGetTrack] = useState(null);


  const { data, error, isLoading , refetch: refetchPosts} = useGetAllFavoriteQuery({
    pollingInterval: 3000,
    keepUnusedDataFor: 120,
    refetchOnReconnect: true,
  });
  if(error && error.status === Number( 401) ){
    console.log(error);
    console.log(data);
    refreshToken();
   refetchPosts();
  
 
}


/*  useEffect(() => {
 // refreshToken();

  refetchPosts();
  setErrorGetTrack(null)

 },[errorGetTrack])  */
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



            {error ? 
              <ErrorDescriptionRender errors="Error"/* {Object.values(error).map((errors) => errors)} */>
      {/*           {Object.values(error).map((errors) =>
                  errors ? (
                    <ErrorDescriptionRender errors ={errors}> */}
                    </ErrorDescriptionRender>
               
               : 
              <TrackDescriptionCaptionRender />
            }

            {isLoading ? <SkeletonTrackRender /> : null}
            {
              data?.length  &&
              !error &&
              searchValue &&
              searchTrack(searchValue, data).length === 0 ? (
                <h2>Ничего не найдено</h2>
              ) : (
                <>
                  {data && !isLoading ? (
                    <PlayListItemRender
                      trackStore={
                        searchValue ? searchTrack(searchValue, data) : data
                      }
                    />
                  ) : null
                    
                  }
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
};
