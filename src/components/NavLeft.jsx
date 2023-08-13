function NavMenuLeftRender() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="./img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <CreateMenuItemLi url="/#" text="Главная" />
          <CreateMenuItemLi url="/#" text="Мой плейлист" />
          <CreateMenuItemLi url="../signin" text="Войти" />
        </ul>
      </div>
    </nav>
  );
}

function CreateMenuItemLi(props) {
  return (
    <li className="menu__item">
      <a href={props.url} className="menu__link">
        {props.text}
      </a>
    </li>
  );
}

export default NavMenuLeftRender;
