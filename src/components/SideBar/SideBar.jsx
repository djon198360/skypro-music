import { useContext } from "react";
import { Logaut } from "../../API/User";
import Context from "../../assets/context";
import * as S from "./style";

export function SideBarRender() {
  return (
    <S.MainSidebar>
      <PersonalSideBarRender />
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

export function PersonalSideBarRender() {
  const [user, setUser] = useContext(Context);
  const logAuth = () => {
    Logaut();
    setUser(false);
  };
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonal>{user}</S.SidebarPersonal>
      <S.SidebarIcon
        onClick={() => {
          logAuth();
        }}
      >
        <S.LogoutSvg>
          <S.Logout xlinkHref="../../img/icon/sprite.svg#logout" />
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
