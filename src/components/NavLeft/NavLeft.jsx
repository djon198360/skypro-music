import { useState } from "react";
import CreateMenuItemLi from "../MenuItem/MenuItem";
import * as S from "./style";


function NavMenuLeftRender({token }) {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  const auth = () => {
   localStorage.removeItem("user");
 
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo"></S.LogoImage>
      </S.NavLogo>
      <S.NavBurger aria-hidden="true" onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <CreateMenuItemLi to="/" text="Главная" />
            <CreateMenuItemLi to="/favorites" text="Мой плейлист" />
            {token ? (
              <CreateMenuItemLi onClick={auth()} text="Выйти" />
            ) : (
              <CreateMenuItemLi to="../login" text="Войти" />
            )}
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}

export default NavMenuLeftRender;
