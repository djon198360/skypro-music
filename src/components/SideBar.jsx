export function SideBarRender () {
    return(
        <div className="main__sidebar sidebar">
<PersonalSideBarRender userName ='Разработчик SkyPro' />
<div className="sidebar__block">
    <div className="sidebar__list">
<SideBarBlockRender img = './img/playlist01.png' alt ='Плелист дня'/>
<SideBarBlockRender img = './img/playlist02.png'alt ='100 танцевальных хитов'/>
<SideBarBlockRender img = './img/playlist03.png'alt ='Инди-заряд'/>
</div>
  </div>
        </div>
    )
}

export function PersonalSideBarRender({userName}) {
    return(
        <div className="sidebar__personal">
        <p className="sidebar__personal-name">{userName}</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="./img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
    );
}
export function SideBarBlockRender({img,alt}) {
    return(          
      <div className="sidebar__item">
        <a className="sidebar__link" href="/#">
          <img
            className="sidebar__img"
            src={img}
            alt={alt}
          />
        </a>
      </div>
      );
}
