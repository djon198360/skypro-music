import * as S from "./style"

function CreateMenuItemLi(props) {
    return (
      <S.MenuItem>
        <S.MenuLink href={props.url}>
        {props.text}
        </S.MenuLink>
      </S.MenuItem>
    );
  }

  
  export default CreateMenuItemLi;