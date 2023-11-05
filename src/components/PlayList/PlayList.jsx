import { useDispatch, useSelector } from "react-redux";
import { creatorCurrentTrack } from "../../assets/function";
import { setCurrentTrack } from "../../Store/Slice/Slice";
import * as S from "./style";

export const PlayListItemRender = (trackStore) => {
  const stateHandleTrackState = useSelector((state) => state.handleTrackState);
  const isPlaying = stateHandleTrackState.isPlaying_track;
  const currentTrackStore = stateHandleTrackState.current_track;
  const dispatch = useDispatch();

  return trackStore.trackStore.map((playlist, index) => (
    <S.ContentPlayList key={playlist.id}>
      <S.PlaylistItem>
        <S.PlayListTrack>
          <S.TrackTitle
            onClick={() => {
              dispatch(setCurrentTrack(creatorCurrentTrack(playlist, index)));
            }}
          >
            <S.TrackTitleImage>
              {currentTrackStore &&
              currentTrackStore.key === index &&
              isPlaying ? (
                <S.imgActiveAnime></S.imgActiveAnime>
              ) : null}
              {currentTrackStore &&
              currentTrackStore.key === index &&
              !isPlaying ? (
                <S.imgActive></S.imgActive>
              ) : null}
              {currentTrackStore && currentTrackStore.key === index ? null : (
                <S.TrackTitleSvg alt="music" id={index}>
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
            <S.TrackTimeSvg alt="time">
              <S.Use xlinkHref="./img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>
              {(playlist.duration_in_seconds / 60).toFixed()}:
              {(playlist.duration_in_seconds % 60).toString().padStart(2, "0")}
            </S.TrackTimeText>
          </S.TrackTime>
        </S.PlayListTrack>
      </S.PlaylistItem>
    </S.ContentPlayList>
  ));
};
