import * as S from "./SSignup";
import ContainerEnter from "./SSIgnin";
import ModalErrorTitle from "./SNotFound";

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

          <ModalErrorTitle>Такой страницы нет</ModalErrorTitle>
          <S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink href="/">
              Перейти на главную
            </S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </ContainerEnter>
  );
}

export default NotFoundRender;
