/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-expressions */
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  currentTrackSelector,
  todosSelector,
  isPlayingSelector,
  shuffleSelector,
  shuffleAllTrackSelector,
} from "../../Store/Selectors/music";
import {
  addCurrentTrack,
  addIsPlaying,
  addShuffleAllTrack,
  addShuffleTrack,
} from "../../Store/Actions/Creators/music";
import TrackPlayRender from "../PlayerTrackPlay/PlayerTrackPlay";
import { SkeletonTrackPlayRender } from "../Skeleton/Skeleton";
import * as S from "./style";

export const PlayerRender = (props) => {
  const currentTrackStore = useSelector(currentTrackSelector);
  const allTrackStore = useSelector(todosSelector);
  const isPlaying = useSelector(isPlayingSelector);
  const audioRef = useRef(null);
  const inputRef = useRef(null);
  const [urlmp3, setUrlmp3] = useState(
    allTrackStore[currentTrackStore.key].track_file || false
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const [isVolume, setIsVolume] = useState(0.2);
  const [isMuted, setIsMuted] = useState(false);
  const isShuffle = useSelector(shuffleSelector);
  const shuffleAllTrack = useSelector(shuffleAllTrackSelector);
  const dispatch = useDispatch();

  const addTrackPlayer = (content) => {
    dispatch(addCurrentTrack(content));
  };
  const shuffleTrack = () => {
    dispatch(addShuffleTrack(true));

    //  const randomTrack = allTrackStore.slice().sort(() => Math.random() - 0.5);

    dispatch(
      addShuffleAllTrack(allTrackStore.slice().sort(() => Math.random() - 0.5))
    );
    /*     const randomTrack = Math.floor(
      Math.random() * Object.keys(allTrackStore).length
    );
    allTrackStore[randomTrack] ? addTrackPlayer({ key: randomTrack }) : null; */
  };

  const shuffleTrackStop = () => {
    dispatch(addShuffleTrack(false));
  };
  const toggleShuffle = isShuffle ? shuffleTrackStop : shuffleTrack;

  const prevTrackPlay = () => {
/*     if (currentTime <= 5) {
      audioRef.current.currentTime = 0;
    } else { */
      if (isShuffle) {
        if (currentTime <= 5) {
          audioRef.current.currentTime = 0;
        } else {
        shuffleAllTrack[currentTrackStore.key - 1]
          ? addTrackPlayer({ key: currentTrackStore.key - 1 })
          : shuffleAllTrack[currentTrackStore.key];
        }
      } if (!isShuffle) {
        if (currentTime <= 5) {
          audioRef.current.currentTime = 0;
        } else {
        allTrackStore[currentTrackStore.key - 1]
          ? addTrackPlayer({ key: currentTrackStore.key - 1 })
          : allTrackStore[currentTrackStore.key];
          }
      }
    
  };

  const nextTrackPlay = () => {
    if (isShuffle) {
      shuffleAllTrack[currentTrackStore.key + 1]
        ? addTrackPlayer({ key: currentTrackStore.key + 1 })
        : shuffleAllTrack[currentTrackStore.key];
    } else {
      allTrackStore[currentTrackStore.key + 1]
        ? addTrackPlayer({ key: currentTrackStore.key + 1 })
        : allTrackStore[currentTrackStore.key];
    }
  };

  const setTimeUpdate = () => {
    audioRef.current
      ? setCurrentTime(Math.round(audioRef.current.currentTime))
      : setCurrentTime(0);
    audioRef.current
      ? setDuration(Math.round(audioRef.current.duration))
      : setDuration(Math.round(0));
    audioRef.current && audioRef.current.ended ? nextTrackPlay() : null;
  };

  const setStart = () => {
    dispatch(addIsPlaying(true));
    audioRef.current.play();

    /*          audioRef.current.addEventListener("loadeddata", () => {
      if (audioRef.current.readyState >= 2) {
       setIsPlaying(true);
        audioRef.current.play();
      }
    });  */
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

  const setPause = () => {
    dispatch(addIsPlaying(false));
    audioRef.current.pause();
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
    dispatch(addIsPlaying(true));
    setStart();
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", setTimeUpdate);
    }
    return () => {
      audioRef.current
        ? audioRef.current.removeEventListener("timeupdate", setTimeUpdate)
        : null;
    };
  }, []);

  useEffect(() => {
    dispatch(addIsPlaying(true));
    setStart();
  }, [urlmp3]);

  useEffect(() => {
    isShuffle
      ? setUrlmp3(shuffleAllTrack[currentTrackStore.key].track_file || false)
      : setUrlmp3(allTrackStore[currentTrackStore.key].track_file || false);
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", setTimeUpdate);
    }
    return () => {
      audioRef.current
        ? audioRef.current.removeEventListener("timeupdate", setTimeUpdate)
        : null;
    };
  }, [currentTrackStore, isShuffle]);

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
              <S.PlayerControlsBtnPrev onClick={prevTrackPlay}>
                <S.PlayerBtnSvg
                  $width="15px"
                  $height="14px"
                  $fill="transparent"
                  $stroke={allTrackStore[currentTrackStore.key - 1] ||shuffleAllTrack[currentTrackStore.key - 1] ? "#fff" : "red"}
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
              <S.PlayerControlsBtnNext onClick={nextTrackPlay}>
                <S.PlayerBtnSvg
                  $width="15px"
                  $height="14px"
                  $fill="transparent"
                  $stroke={allTrackStore[currentTrackStore.key + 1] ||shuffleAllTrack[currentTrackStore.key + 1] ? "#fff" : "red"}
                 
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

              <S.PlayerControlsBtnShuffle onClick={toggleShuffle}>
                <S.PlayerBtnSvg
                  $width="19px"
                  $height="12px"
                  $fill="transparent"
                  $stroke={isShuffle ? "#fff" : "#696969"}
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
                name_text={
                  currentTrackStore && isShuffle
                    ? shuffleAllTrack[currentTrackStore.key].name
                    : allTrackStore[currentTrackStore.key].name
                }
                author_link="http://"
                author_text={
                  currentTrackStore && isShuffle
                    ? shuffleAllTrack[currentTrackStore.key].author
                    : allTrackStore[currentTrackStore.key].author
                }
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
};
