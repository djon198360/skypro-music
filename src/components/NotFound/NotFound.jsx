import * as S from "../Signup/style"
import ContainerEnter from "../Signin/style"
import  ModalErrorTitle from "./style"

function NotFoundRender() {
  return (
    <ContainerEnter>
      <S.ModalBlock>
    <S.ModalFormLogin>
      <S.ModalFormLink href="../">
        <S.ModalLogo>
          <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
        </S.ModalLogo>
      </S.ModalFormLink>

      < ModalErrorTitle>Такой страницы нет</ModalErrorTitle>
      <S.ModalBtnSignupEnt type="button">
        <S.ModalBtnSignupLink href="/">Перейти на главную</S.ModalBtnSignupLink>
      </S.ModalBtnSignupEnt>
    </S.ModalFormLogin>
  </S.ModalBlock>


        

    </ContainerEnter>
  );
}

export default NotFoundRender;
