import * as S from "./style";

export function SideBarRender() {
  return (
    <S.MainSidebar>
      <PersonalSideBarRender userName="Разработчик SkyPro" />
      <S.SidebarBlock>
        <S.SidebarList>
          <SideBarBlockRender
            to="/category/1"
            img="./img/playlist01.png"
            alt="Плейлист дня"
          />
          <SideBarBlockRender
            to="/category/2"
            img="./img/playlist02.png"
            alt="100 танцевальных хитов"
          />
          <SideBarBlockRender
            to="/category/3"
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
      <S.SidebarLink to={props.to} title={props.alt} state={props.alt}>
        <S.SidebarImg src={props.img} alt={props.alt} />
      </S.SidebarLink>
    </S.SidebarItem>
  );
}
