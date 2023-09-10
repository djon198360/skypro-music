import TrackPlayRender from "../PlayerTrackPlay/PlayerTrackPlay";
import { SkeletonTrackPlayRender } from "../Skeleton/Skeleton";
import * as S from "./style";

function PlayerRender(loading) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerControlsBtnPrev>
                <S.PlayerBtnSvg
                  $width="15px"
                  $height="14px"
                  $fill="#d9d9d9"
                  alt="prev"
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnSvg>
              </S.PlayerControlsBtnPrev>
              <S.PlayerControlsBtnPlay>
                <S.PlayerBtnSvg
                  $width="22px"
                  $height="20px"
                  $fill="#d9d9d9"
                  alt="play"
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-play" />
                </S.PlayerBtnSvg>
              </S.PlayerControlsBtnPlay>
              <S.PlayerControlsBtnNext>
                <S.PlayerBtnSvg
                  $width="15px"
                  $height="14x"
                  $fill="#d9d9d9"
                  alt="next"
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnSvg>
              </S.PlayerControlsBtnNext>
              <S.PlayerControlsBtnRepeat>
                <S.PlayerBtnSvg
                  $width="18px"
                  $height="12px"
                  $fill="transparent"
                  $stroke="#696969"
                  alt="repeat"
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnSvg>
              </S.PlayerControlsBtnRepeat>
              <S.PlayerControlsBtnShuffle>
                <S.PlayerBtnSvg
                  $width="19px"
                  $height="12px"
                  $fill="transparent"
                  $stroke="#696969"
                  alt="shuffle"
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnSvg>
              </S.PlayerControlsBtnShuffle>
            </S.PlayerControls>
            {loading.children[1] ? (
              <SkeletonTrackPlayRender />
            ) : (
              <TrackPlayRender
                author_link="http://"
                author_text="Ты та..."
                album_link="http://"
                album_text="Баста"
              />
            )}
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.PlayerBtnSvg
                  $width="13px"
                  $height="18px"
                  $fill="transparent"
                  alt="volume"
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-volume" />
                </S.PlayerBtnSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range"   />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
export default PlayerRender;
