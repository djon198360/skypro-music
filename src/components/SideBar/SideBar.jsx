import * as S from "./style";

export function SideBarRender() {
  return (
    <S.MainSidebar>
      <PersonalSideBarRender userName="Разработчик SkyPro" />
      <S.SidebarBlock>
        <S.SidebarList>
          <SideBarBlockRender
            href="/#"
            img="./img/playlist01.png"
            alt="Плелист дня"
          />
          <SideBarBlockRender
            href="/#"
            img="./img/playlist02.png"
            alt="100 танцевальных хитов"
          />
          <SideBarBlockRender
            href="/#"
            img="./img/playlist03.png"
            alt="Инди-заряд"
          />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export function PersonalSideBarRender({ userName }) {
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonal>{userName}</S.SidebarPersonal>
      <S.SidebarIcon>
        <S.LogoutSvg>
          <S.Logout xlinkHref="./img/icon/sprite.svg#logout" />
        </S.LogoutSvg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}
export function SideBarBlockRender(props) {
  return (
    <S.SidebarItem>
      <S.SidebarLink href={props.href}>
        <S.SidebarImg src={props.img} alt={props.alt} />
      </S.SidebarLink>
    </S.SidebarItem>
  );
}
