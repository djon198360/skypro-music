import { useState} from "react";
import CreateMenuItemLi from "../MenuItem/MenuItem";
import * as S from "./style";
import {  Logaut } from "../../API/User";

export function NavMenuLeftRender(user) {

  
 
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

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

            {user ? (
              <CreateMenuItemLi
                onClick={() => {
                  Logaut();
                }}
                text="Выйти"
              />
            ) : (
              <CreateMenuItemLi to="../login" text="Войти" />
            )}
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
