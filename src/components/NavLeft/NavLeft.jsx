import { useState, useContext } from "react";
import CreateMenuItemLi from "../MenuItem/MenuItem";
import * as S from "./style";
import { Context, Logaut } from "../AuthForm/AuthForm";

function NavMenuLeftRender() {
  const [token, setToken] = useContext(Context);
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

            {token ? (
              <CreateMenuItemLi
                onClick={() => {
                  setToken(false);
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

export default NavMenuLeftRender;
