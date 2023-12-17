/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import { useState, useEffect } from "react";
import {
  useLikeTrackMutation,
  useDislikeTrackMutation,
} from "../../Services/ApiTrack";
import * as S from "./style";

export const TrackPlayRender = (props) => {
  const [isLiked, setIsLiked] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [likeTrack] = useLikeTrackMutation();
  const [disLikeTrack] = useDislikeTrackMutation();
const idTrack = props.trackStore.id;

  const toogleLikeDislike = (id, isLike) => {
    isLike ? handleDislike(id) : handleLike(id);
  }; 

  const handleLike = async (id) => {
    console.log('1')
    setIsLiked(likeTrack({ id }));
  };

  const handleDislike = async (id) => {
    console.log('0')
    setIsLiked(disLikeTrack({ id }));
    
  }; 

  useEffect(() => {
    if (props.trackStore.stared_user) {
      setIsLiked(
        Boolean(props.trackStore.stared_user.find(({ id }) => id === user.id))
      );
    }
  }, [props]);
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

      <S.TrackPlayLikeDis>
        {isLiked ? (
          <Dislike
          onClick= { () => toogleLikeDislike(idTrack,false)}
          />
        ) : (
          <Like
            onClick={() => toogleLikeDislike(idTrack,true)}
            
          />
        )}
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  );
};

export const Like = () => {
  return (
    <S.TrackPlayDis>
      <S.TrackPlaySvg
        $width="14.34px"
        $height="13px"
        $stroke="#696969"
        $fill="#696969"
        alt="dislike"
      >
        <S.Use xlinkHref="../img/icon/sprite.svg#icon-dislike" />
      </S.TrackPlaySvg>
    </S.TrackPlayDis>
  );
};

export const Dislike = () => {
  return (
    <S.TrackPlayLike>
      <S.TrackPlaySvg
        $width="14px"
        $height="12px"
        $stroke="#ad61ff"
        $fill="#ad61ff"
        alt="like"
      >
        <S.Use xlinkHref="../img/icon/sprite.svg#icon-like" />
      </S.TrackPlaySvg>
    </S.TrackPlayLike>
  );
};
