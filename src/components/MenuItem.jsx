function CreateMenuItemLi(props) {
    return (
      <li className="menu__item">
        <a href={props.url} className="menu__link">
          {props.text}
        </a>
      </li>
    );
  }

  export default CreateMenuItemLi;