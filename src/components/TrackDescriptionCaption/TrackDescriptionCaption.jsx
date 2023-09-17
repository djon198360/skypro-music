import * as S from "./style";


export function TrackDescriptionCaptionRender() {
  return (
    <S.ContentTitle>
      <S.col01>Трек</S.col01>
      <S.col02>ИСПОЛНИТЕЛЬ</S.col02>
      <S.col03>АЛЬБОМ</S.col03>
      <S.col04>
        <S.Svg alt="time">
          <S.Use xlinkHref="./img/icon/sprite.svg#icon-watch" />
        </S.Svg>
      </S.col04>
    </S.ContentTitle>
  );
}
// export default TrackDescriptionCaptionRender;

export function ErrorDescriptionRender(errors) {
  
  return (
    <S.ContentTitle>
      {errors.errors}
    </S.ContentTitle>
  );
}

export default TrackDescriptionCaptionRender;