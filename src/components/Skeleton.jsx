import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export function SkeletonTrackRender() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <Skeleton height={50} width={50} />
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              <span className="track__title-span"></span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            <Skeleton height={24} width={200} />
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            <Skeleton height={24} width={200} />
          </a>
        </div>
        <div className="track__time">
          <Skeleton height={24} width={20} />
          <span className="track__time-text"></span>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export function SkeletonSideBarRender() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="main__sidebar sidebar">
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <Skeleton height={150} width={249} />
            </div>
            <div className="sidebar__item">
              <Skeleton height={150} width={249} />
            </div>
            <div className="sidebar__item">
              <Skeleton height={150} width={249} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export function SkeletonTrackPlayRender() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="player__track-play track-play">
        <div className="track-play__contain">
          <div className="track-play__image">
            <Skeleton height={50} width={50} />
          </div>
          <div className="track-play__author">
            <a className="track-play__author-link" href="http://">
              <Skeleton height={24} width={50} />
            </a>
          </div>
          <div className="track-play__album">
            <a className="track-play__album-link" href="http://">
              <Skeleton height={24} width={50} />
            </a>
          </div>
        </div>

        <div className="track-play__like-dis"></div>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonTrackRender;
