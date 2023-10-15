/* eslint-disable no-undef */
import { styled, keyframes } from "styled-components";

export const ContentPlayList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`;

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

export const PlayListTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackTitle = styled.div`
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
  width: 447px;
`;

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;

export const Svg = styled.svg.attrs((props) => ({
  alt: props.alt,
  state: props.state,
}))``;

export const TrackTitleSvg = styled(Svg)`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
  &:active {
    border-radius: 16px;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    background-color: #b672ff;
  }
`;

const shadow = () => keyframes`
 50% {
    box-shadow: 0 0 0 0 rgba(55, 141, 250, 0.8);
  }
  100% {
    box-shadow: 0 0 0 16px rgba(55, 141, 250, 0);
  }
`;
export const imgActive = styled(TrackTitleSvg)`
  border-radius: 16px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  background: #b672ff;
`;
export const imgActiveAnime = styled(imgActive)`
  animation: ${shadow} 1s ease-in-out infinite;
`;

export const Use = styled.use.attrs((props) => ({
  xlinkHref: props.xlinkHref,
}))``;

export const TrackTitleText = styled.div``;

export const Track = styled.a.attrs((props) => ({
  href: props.href,
}))`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const TrackTitleLink = styled(Track)`
  color: #ffffff;
`;
export const TrackAuthorLink = styled(Track)`
  color: #ffffff;
`;

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;

export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const TrackAlbum = styled.div`
  width: 245px;
`;

export const TrackAlbumTitle = styled(Track)`
  color: #696969;
`;

export const TrackTime = styled.div``;

export const TrackTimeSvg = styled(Svg)`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;
