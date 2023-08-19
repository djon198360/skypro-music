/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import CreateMenuItemLi from "./MenuItem";


function NavMenuLeftRender() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="./img/logo.png" alt="logo" />
      </div>
      <div onClick={toggleVisibility} className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {visible && ( <div className="nav__menu menu">
        <ul className="menu__list">
          <CreateMenuItemLi url="/#" text="Главная" />
          <CreateMenuItemLi url="/#" text="Мой плейлист" />
          <CreateMenuItemLi url="../signin" text="Войти" />
        </ul>
      </div>)}
    </nav>
  );
}

export default NavMenuLeftRender;
