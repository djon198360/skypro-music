/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatorCurrentTrack } from "../../assets/function";
import { setFavoritesTrack, delFavoritesTrack,getFavoritesTrack } from "../../API/Api";
import { setFavoriteAllTrack, setCurrentTrack } from "../../Store/Slice/Slice";
import * as S from "./style";

export const RenderItem = (track) => {
  const playlist = track.track;
  const stateHandleTrackState = useSelector((state) => state.handleTrackState);
  const isPlaying = stateHandleTrackState.isPlaying_track;
  const currentTrackStore = stateHandleTrackState.current_track;
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isLiked, setIsLiked] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [dis,setDis] = useState(null)

  useEffect(() => {
    stateHandleTrackState.page === "Favorite" ? setIsLiked(true) : null;
  playlist.stared_user 
      ? setIsLiked(playlist.stared_user.find(({ id }) => id === user.id)) || setIsLiked(Boolean(stateHandleTrackState.favoriteTrack.find(( {id} ) => id ===playlist.id)))
      : null;
  }, []);

  useEffect(() => {
    stateHandleTrackState.page === "Favorite" ?
      getFavoritesTrack()
        .then((data) => {
          dispatch(setFavoriteAllTrack(data));
          setDis(false)
        }):null
  }, [dis]);

  const toogleLikeDislike = (id, isLike) =>
    isLike ? handleDislike(id) : handleLike(id);

  const handleLike = async (id) => {
    setIsLiked(true);
    setLoadings(true);
    setFavoritesTrack(id)
      .then((result) => {
        if (result) {
          setLoadings(false);
        }
      })
      .catch(() => {
        console.log(`Не удалось удалить трек, попробуйте позже!`);
      })
      .finally(() => {
        setLoadings(false);
      });
  };

  const handleDislike = async (id) => {
    setIsLiked(false);
    setLoadings(true);
    delFavoritesTrack(id)
      .then((result) => {
        if (result) {
          setLoadings(false);
          
          stateHandleTrackState.page === "Favorite" ? setDis(true) : null;
        }
      })
      .catch(() => {
        console.log(`Не удалось удалить трек, попробуйте позже!`);
      })
      .finally(() => {
        setLoadings(false);
      });
    
  };

  return (
    <S.ContentPlayList key={playlist.id}>
      <S.PlaylistItem>
        <S.PlayListTrack>
          <S.TrackTitle
            onClick={() => {
              dispatch(
                setCurrentTrack(creatorCurrentTrack(playlist, track.index))
              );
            }}
          >
            <S.TrackTitleImage>
              {currentTrackStore &&
              currentTrackStore.id === playlist.id &&
              isPlaying ? (
                <S.imgActiveAnime></S.imgActiveAnime>
              ) : null}
              {currentTrackStore &&
              currentTrackStore.id === playlist.id &&
              !isPlaying ? (
                <S.imgActive></S.imgActive>
              ) : null}
              {currentTrackStore &&
              currentTrackStore.id === playlist.id ? null : (
                <S.TrackTitleSvg alt="music">
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg>
              )}
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <S.TrackTitleLink>
                {playlist.name}
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
              {playlist.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumTitle href="http://">
              {playlist.album}
            </S.TrackAlbumTitle>
          </S.TrackAlbum>
          <S.TrackTime>
            {isLiked ? (
              <S.TrackTimeSvg
                alt="time"
                onClick={() => {
                  toogleLikeDislike(playlist.id, true);
                }}
              >
                {loadings ? (
                  <S.UseLoading
                    xlinkHref="./img/icon/sprite.svg#icon-like"
                    fill="#d0ff61"
                  />
                ) : (
                  <S.Use
                    xlinkHref="./img/icon/sprite.svg#icon-like"
                    fill="#ad61ff"
                  />
                )}
              </S.TrackTimeSvg>
            ) : (
              <S.TrackTimeSvg
                alt="time"
                onClick={() => {
                  toogleLikeDislike(playlist.id, false);
                }}
              >
                {loadings ? (
                  <S.UseLoading
                    xlinkHref="./img/icon/sprite.svg#icon-dislike"
                    fill="#d0ff61"
                  />
                ) : (
                  <S.Use xlinkHref="./img/icon/sprite.svg#icon-dislike" />
                )}
              </S.TrackTimeSvg>
            )}

            <S.TrackTimeText>
              {(playlist.duration_in_seconds / 60).toFixed()}:
              {(playlist.duration_in_seconds % 60).toString().padStart(2, "0")}
            </S.TrackTimeText>
          </S.TrackTime>
        </S.PlayListTrack>
      </S.PlaylistItem>
    </S.ContentPlayList>
  );
};
