import * as S from "./style";

function CreateMenuItemLi(props) {
  return (
    <S.MenuItem>
      <S.MenuLink to={props.to}>{props.text}</S.MenuLink>
    </S.MenuItem>
  );
}

export default CreateMenuItemLi;
