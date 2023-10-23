/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import * as S from "./style";

export const TrackPlayRender = (props) => {
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
        <Like />
        <Dislike />
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  );
};

export const Dislike = () => {
  return (
    <S.TrackPlayDis $marginleft="28.5px">
      <S.TrackPlaySvg
        $width="14.34px"
        $height="13px"
        $fill="transparent"
        $stroke="#696969"
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
        $fill="transparent"
        $stroke="#696969"
        alt="dislike"
      >
        <S.Use xlinkHref="../img/icon/sprite.svg#icon-like" />
      </S.TrackPlaySvg>
    </S.TrackPlayLike>
  );
};
