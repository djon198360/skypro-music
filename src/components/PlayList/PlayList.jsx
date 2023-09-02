import * as S from "./style"

function PlayListItemRender(list) {
  return (
    <S.ContentPlayList>
      <TrackRender props={list} />
    </S.ContentPlayList>
  );
}

export default PlayListItemRender;

function TrackRender(props) {
const playlist = props.props;
  return (
    <S.PlaylistItem>
      <S.PlayListTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <S.Use xlinkHref="./img/icon/sprite.svg#icon-note"/>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink href="http://">
              {playlist.listName}
              <S.TrackTitleSpan />
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">
            {playlist.listAuthor}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumTitle href="http://">
            {playlist.listAlbum}
          </S.TrackAlbumTitle>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <S.Use xlinkHref="./img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg >
          <S.TrackTimeText>
            {(playlist.ListDuration_in_seconds / 60).toFixed()}:{ (playlist.ListDuration_in_seconds % 60).toString().padStart(2, "0")}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlayListTrack>
    </S.PlaylistItem>
  );
}
