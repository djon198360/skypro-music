import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import * as S from "../PlayList/style"
import * as Z from "../SideBar/style"
import * as SS from "../PlayerTrackPlay/style"
import "react-loading-skeleton/dist/skeleton.css";

export function SkeletonTrackRender() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <S.PlayListTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <Skeleton height={50} width={50} />
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink href="http://">
              <S.TrackTitleSpan />
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">
            <Skeleton height={24} width={200} />
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumTitle href="http://">
            <Skeleton height={24} width={200} />
          </S.TrackAlbumTitle>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
          <Skeleton height={24} width={20} />
          </S.TrackTimeSvg >
          <S.TrackTimeText>
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlayListTrack>
    </SkeletonTheme>
  );
}

export function SkeletonSideBarRender() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Z.MainSidebar>
      <Z.SidebarBlock>
        <Z.SidebarList>
        <Z.SidebarItem>
              <Skeleton height={150} width={249} />
              </Z.SidebarItem>
            <Z.SidebarItem>
              <Skeleton height={150} width={249} />
              </Z.SidebarItem>
            <Z.SidebarItem>
              <Skeleton height={150} width={249} />
              </Z.SidebarItem>
          </Z.SidebarList>
        </Z.SidebarBlock>
      </Z.MainSidebar>
    </SkeletonTheme>
  );
}

export function SkeletonTrackPlayRender() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <SS.PlayerTrackPlay>
      <SS.TrackPlayContain>
        <SS.TrackPlayImage>
            <Skeleton height={50} width={50} />
            </SS.TrackPlayImage>
            <SS.TrackPlayAuthor>
          <SS.TrackPlayLink href="http://">
              <Skeleton height={24} width={50} />
              </SS.TrackPlayLink>
        </SS.TrackPlayAuthor>
        <SS.TrackPlayAlbum>
          <SS.TrackPlayLink href="http://">
              <Skeleton height={24} width={50} />
              </SS.TrackPlayLink>
        </SS.TrackPlayAlbum>
      </SS.TrackPlayContain>

      <SS.TrackPlayLikeDis>
      </SS.TrackPlayLikeDis>

 
      </SS.PlayerTrackPlay>
    </SkeletonTheme>
  );
}

export default SkeletonTrackRender;
