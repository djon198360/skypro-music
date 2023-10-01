import { useRef, useState, useEffect } from "react";
import TrackPlayRender from "../PlayerTrackPlay/PlayerTrackPlay";
import { SkeletonTrackPlayRender } from "../Skeleton/Skeleton";
import * as S from "./style";

function PlayerRender(props) {
  const audioRef = useRef(null);
  const inputRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState();
  const [urlmp3, setUrlmp3] = useState(props.current.url);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const [isVolume, setIsVolume] = useState(0.2);
  const [isMuted, setIsMuted] = useState(false);

  const setTimeUpdate = () => {
    setCurrentTime(Math.round(audioRef.current.currentTime));
    setDuration(Math.round(audioRef.current.duration));
  };

  const timeFormat = (secondstime) => {
    const minutes = Math.round(secondstime / 60);
    const seconds = Math.round(secondstime % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const setSeek = (event) => {
    audioRef.current.currentTime = Math.round(event.target.value);
    setCurrentTime(Math.round(event.target.value));
  };

  const setStart = () => {
    audioRef.current.addEventListener("loadeddata", () => {
      if (audioRef.current.readyState >= 2) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    });
  };

  const setPause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? setPause : setStart;

  const setLoop = () => {
    audioRef.current.loop = true;
    setIsLoop(true);
  };

  const setLoopStop = () => {
    audioRef.current.loop = false;
    setIsLoop(false);
  };

  const toggleLoop = isLoop ? setLoopStop : setLoop;

  const setMuted = () => {
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };
  const setVolume = (event) => {
    setIsMuted(false);
    audioRef.current.muted = isMuted;
    const volume = event.target.value;
    audioRef.current.volume = volume;
    setIsVolume(volume);
    if (volume === "0") {
      setIsMuted(true);
      audioRef.current.muted = isMuted;
    }
  };

  useEffect(() => {
    setIsPlaying(true);
    setStart();
    audioRef.current.addEventListener("timeupdate", setTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", setTimeUpdate);
    };
  }, []);

  useEffect(() => {
    setUrlmp3(props.current.url);
    setIsPlaying(true);
    audioRef.current.addEventListener("timeupdate", setTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", setTimeUpdate);
    };
  }, [props.current.url]);

  const noFunct = () => {
    alert("Ещё не реализовано");
  };

  return (
    <S.Bar>
      <S.Time>
        <S.TimeSpan> {timeFormat(currentTime)} </S.TimeSpan>{" "}
        <S.TimeSpan> &#x20; / &#x20;</S.TimeSpan>
        <S.TimeSpan> {duration ? timeFormat(duration) : "00:00"} </S.TimeSpan>
      </S.Time>

      <S.Audio src={urlmp3} controls="controls" ref={audioRef}></S.Audio>
      <S.BarContent>
        <S.ProgressBar
          type="range"
          min="0"
          value={currentTime}
          max={duration || "0"}
          onChange={setSeek}
        />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerControlsBtnPrev onClick={noFunct}>
                <S.PlayerBtnSvg
                  $width="15px"
                  $height="14px"
                  $fill="#d9d9d9"
                  alt="prev"
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnSvg>
              </S.PlayerControlsBtnPrev>
              {isPlaying ? (
                <S.PlayerControlsBtnPause onClick={togglePlay}>
                  <S.PlayerBtnSvg
                    $width="22px"
                    $height="20px"
                    $fill="#d9d9d9"
                    alt="pause"
                  >
                    <S.Use xlinkHref="../img/icon/sprite.svg#icon-pause" />
                  </S.PlayerBtnSvg>
                </S.PlayerControlsBtnPause>
              ) : (
                <S.PlayerControlsBtnPlay onClick={togglePlay}>
                  <S.PlayerBtnSvg
                    $width="22px"
                    $height="20px"
                    $fill="#d9d9d9"
                    alt="play"
                  >
                    <S.Use xlinkHref="../img/icon/sprite.svg#icon-play" />
                  </S.PlayerBtnSvg>
                </S.PlayerControlsBtnPlay>
              )}
              <S.PlayerControlsBtnNext onClick={noFunct}>
                <S.PlayerBtnSvg
                  $width="15px"
                  $height="14x"
                  $fill="#d9d9d9"
                  alt="next"
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnSvg>
              </S.PlayerControlsBtnNext>

              <S.PlayerControlsBtnRepeat onClick={toggleLoop}>
                <S.PlayerBtnSvg
                  $width="18px"
                  $height="12px"
                  $fill="transparent"
                  $stroke={isLoop ? "#fff" : "#696969"}
                  alt="repeat"
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnSvg>
              </S.PlayerControlsBtnRepeat>

              <S.PlayerControlsBtnShuffle onClick={noFunct}>
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
            {props.loading ? (
              <SkeletonTrackPlayRender />
            ) : (
              <TrackPlayRender
                name_link="http://"
                name_text={props.current ? props.current.name : null}
                author_link="http://"
                author_text={props.current ? props.current.author : null}
              />
            )}
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.PlayerBtnSvg
                  onClick={setMuted}
                  $width="13px"
                  $height="18px"
                  $fill="transparent"
                  alt="volume"
                  stroke={isMuted ? "#fff" : "#696969"}
                >
                  <S.Use xlinkHref="../img/icon/sprite.svg#icon-volume" />
                </S.PlayerBtnSvg>
              </S.VolumeImage>
              <S.VolumeProgress title={isVolume}>
                <S.VolumeProgressLine
                  type="range"
                  value={isVolume}
                  alt="volume"
                  min="0"
                  max="1"
                  step="0.1"
                  onChange={setVolume}
                  ref={inputRef}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
export default PlayerRender;
