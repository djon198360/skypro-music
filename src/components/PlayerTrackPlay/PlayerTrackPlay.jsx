import { useState, useEffect } from "react";
import {
  useLikeTrackMutation,
  useDislikeTrackMutation,
} from "../../Services/ApiTrack";
import * as S from "./style";

export function TrackPlayRender(props) {
  const [isLiked, setIsLiked] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const [likeTrack] = useLikeTrackMutation();
  const [disLikeTrack] = useDislikeTrackMutation();
  const idTrack = props.trackStore.id;

  const handleLike = async (id) => {
    likeTrack({ id })
   setIsLiked(true);
  };

  const handleDislike = async (id) => {
    disLikeTrack({ id })
    setIsLiked(false)
  };

  const toogleLikeDislike = (id,isLike) => {
    if (isLike) {
      handleDislike(id);
    } else {
      handleLike(id);
    }
  };

  useEffect(() => {
    if (props.trackStore.stared_user) {
      setIsLiked(
        Boolean(props.trackStore.stared_user.find(({ id }) => id === user.id))
      );
    }
  }, [props.trackStore.stared_user]);
  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg
            alt="music"
            $width="18px"
            $height="17px"
            $fill="transparent"
            $stroke="#4e4e4e"
          >
            <S.Use xlinkHref="../img/icon/sprite.svg#icon-note" />
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAlbum>
          <S.TrackPlayLink href={props.name_link}>
            {props.trackStore.name}
          </S.TrackPlayLink>
        </S.TrackPlayAlbum>
        <S.TrackPlayAuthor>
          <S.TrackPlayLink href={props.author_link}>
            {props.trackStore.author}
          </S.TrackPlayLink>
        </S.TrackPlayAuthor>
      </S.TrackPlayContain>

      <S.TrackPlayLikeDis>{isLiked}
        {isLiked ? (
          <S.TrackPlayDis onClick={() => toogleLikeDislike(idTrack, true)}>
            <S.TrackPlaySvg
              $width="14px"
              $height="12px"
              $stroke="#ad61ff"
              $fill="#ad61ff"
            >
              <S.Use xlinkHref="../img/icon/sprite.svg#icon-dislike" />
            </S.TrackPlaySvg>
          </S.TrackPlayDis>
        ) : (
          <S.TrackPlayLike onClick={() => toogleLikeDislike(idTrack, false)}>
            <S.TrackPlaySvg
              $width="14.34px"
              $height="13px"
              $stroke="#696969"
              $fill="#696969"
            >
              <S.Use xlinkHref="../img/icon/sprite.svg#icon-like" />
            </S.TrackPlaySvg>
          </S.TrackPlayLike>
        )}
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  );
}