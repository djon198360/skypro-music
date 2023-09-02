import { styled } from "styled-components";

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
  &:active {
    width: 667px;
    height: 5px;
    flex-shrink: 0;
    background: #b672ff;
  }
  &:hover {
    width: 667px;
    height: 8px;
    flex-shrink: 0;
    background: #b672ff;
  }
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
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
`;

export const BarPlayer = styled.div`
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerControlsBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;

`;

export const PlayerControlsBtnPrev = styled(PlayerControlsBtn)`
  margin-right: 23px;
  &:hover {
    fill: transparent;
    stroke: #696969;
    cursor: pointer;
  }
`;
export const PlayerControlsBtnPlay = styled(PlayerControlsBtn)`
  margin-right: 23px;
  &:hover svg {
    fill: transparent;
    stroke: #696969;
    cursor: pointer;
  }
`;
export const PlayerControlsBtnNext = styled(PlayerControlsBtn)`
  margin-right: 28px;
  &:hover {
    fill: transparent;
    stroke: #696969;
    cursor: pointer;
  }
`;
export const PlayerControlsBtnRepeat = styled(PlayerControlsBtn)`
  margin-right: 24px;
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`;

export const PlayerControlsBtnShuffle = styled(PlayerControlsBtn)`
  margin-right: 24px;
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`;

export const PlayerBtnSvg = styled.svg.attrs((props) => ({
  alt: props.alt,
}))`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  fill: ${(props) => props.$fill};
  stroke: ${(props) => props.$stroke};
`;

export const Use = styled.use.attrs((props) => ({
  xlinkHref: props.xlinkHref,
}))``;

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const VolumeProgress = styled.div`
  cursor: pointer;
`;

export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  overflow: hidden;
  height: 7px;
  background-color: #fff;

  &::-webkit-slider-runnable-track {
    height: 7px;
    background-color: #797979;
  }
  &::-webkit-slider-thumb {
    background: #fff;
    background-color: #fff;
    cursor: pointer;
    width: 25px;
    height: 25px;
    -webkit-appearance: none;
    margin-top: -4px;
    box-shadow: -200px 0 0 200px #fff;
  }
`;
