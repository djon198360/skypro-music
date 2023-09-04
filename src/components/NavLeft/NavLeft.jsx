import { useState } from "react";
import CreateMenuItemLi from "../MenuItem/MenuItem";
import * as S from "./style";

function NavMenuLeftRender() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo"></S.LogoImage>
     
      </S.NavLogo>

      <S.NavBurger
        aria-hidden="true"
        onClick={toggleVisibility}>
<S.BurgerLine/><S.BurgerLine/><S.BurgerLine/>
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <CreateMenuItemLi url="/" text="Главная" />
            <CreateMenuItemLi url="/#" text="Мой плейлист" />
            <CreateMenuItemLi url="../login" text="Войти" />
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}

export default NavMenuLeftRender;
