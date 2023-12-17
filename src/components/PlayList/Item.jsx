/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatorCurrentTrack } from "../../assets/function";
import {
  refreshToken,
  useLikeTrackMutation,
  useDislikeTrackMutation,
} from "../../Services/ApiTrack";
import { setCurrentTrack } from "../../Store/Slice/Slice";
import * as S from "./style";


export const RenderItem = (track) => {
  const playlist = track.track;
  const stateHandleTrackState = useSelector((state) => state.handleTrackState);
  const isPlaying = stateHandleTrackState.isPlaying_track;
  const currentTrackStore = stateHandleTrackState.current_track;
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const [isLiked, setIsLiked] = useState(false);
  const [likeTrack] = useLikeTrackMutation();
  const [disLikeTrack] = useDislikeTrackMutation();
  useEffect(() => {
    if (playlist.stared_user) {
      setIsLiked(
        Boolean(playlist.stared_user.find(({ id }) => id === user.id))
      );
    } else {
      setIsLiked(true);
    }
  }, [track]);

  useEffect(() => {}, []);

  const toogleLikeDislike = (id, isLike) => {
    isLike ? handleDislike(id) : handleLike(id);
  };

  const handleLike = async (id) => {
    setIsLiked(refreshToken(() => likeTrack({ id })));
  };

  const handleDislike = async (id) => {
    setIsLiked(refreshToken(() => disLikeTrack({ id })));
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
                : (
                <S.Use
                  xlinkHref="../img/icon/sprite.svg#icon-like"
                  fill="#ad61ff"
                />
                )
              </S.TrackTimeSvg>
            ) : (
              <S.TrackTimeSvg
                alt="time"
                onClick={() => {
                  toogleLikeDislike(playlist.id, false);
                }}
              >
                
                : (
                <S.Use xlinkHref="../img/icon/sprite.svg#icon-dislike" />)
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
