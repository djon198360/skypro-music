/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import { useState,useEffect} from "react";
import * as S from "./style";

export const TrackPlayRender = (props) => {

const [isLiked, setIsLiked] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

// console.log(isLiked)
useEffect(() => {
  if(props.trackStore.stared_user) 
  {setIsLiked(Boolean(props.trackStore.stared_user.find(({ id }) => id === user.id)))}
  console.log(isLiked);
 
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
            {props.name_text}
          </S.TrackPlayLink>
        </S.TrackPlayAlbum>
        <S.TrackPlayAuthor>
          <S.TrackPlayLink href={props.author_link}>
            {props.author_text}
          </S.TrackPlayLink>
        </S.TrackPlayAuthor>
      </S.TrackPlayContain>

      <S.TrackPlayLikeDis>
        
        {isLiked ?  <Dislike />:<Like />}
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  );
};

export const Dislike = () => {
  return (
    <S.TrackPlayDis >
      <S.TrackPlaySvg
        $width="14.34px"
        $height="13px"
        $fill="#ad61ff"
       // $stroke="#696969"
        alt="dislike"
      >
        <S.Use xlinkHref="../img/icon/sprite.svg#icon-dislike" />
      </S.TrackPlaySvg>
    </S.TrackPlayDis>
  );
};

export const Like = () => {
  return (
    <S.TrackPlayLike>
      <S.TrackPlaySvg
        $width="14px"
        $height="12px"
      //  $fill="transparent"
        $stroke="#696969"
        alt="dislike"
      >
        <S.Use xlinkHref="../img/icon/sprite.svg#icon-like"  />
      </S.TrackPlaySvg>
    </S.TrackPlayLike>
  );
};
/* 
{isLiked ? (
  <S.TrackTimeSvg
    alt="time"
    onClick={() => {
      toogleLikeDislike(playlist.id, true);
    }}
  >
    {loadings ? (
      <S.UseLoading
        xlinkHref="../img/icon/sprite.svg#icon-like"
        fill="#d0ff61"
      />
    ) : (
      <S.Use
        xlinkHref="../img/icon/sprite.svg#icon-like"
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
        xlinkHref="../img/icon/sprite.svg#icon-dislike"
        fill="#d0ff61"
      />
    ) : (
      <S.Use xlinkHref="../img/icon/sprite.svg#icon-dislike" />
    )}
  </S.TrackTimeSvg>
)} */