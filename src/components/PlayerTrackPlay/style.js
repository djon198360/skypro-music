import { styled } from "styled-components";

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-column: 1;
  grid-area: image;
`;

export const TrackPlaySvg = styled.svg`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  fill: ${(props) => props.$fill};
  stroke: ${(props) => props.$stroke};

  &:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`;

export const Use = styled.use.attrs((props) => ({
  xlinkHref: props.xlinkHref,
}))``;

export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-column: 2;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const TrackPlayLink = styled.a.attrs((props) => ({
  href: props.href,
}))`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  grid-row: 2;
  -ms-grid-column: 2;
  grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;
export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;

export const Likes = styled.div`
  padding: 5px;
`;

export const TrackPlayDis = styled(Likes)`
  padding: 5px;
  margin-left: ${(props) => props.$marginleft};
`;
export const TrackPlayLike = styled(Likes)`
  padding: 5px;
`;
