import * as S from "../pages/SSignup"
import ContainerEnter from "../pages/SSIgnin"

function AuthFormRender() {
  return (
    <ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin>
        <S.ModalFormLink href="../">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </S.ModalFormLink>
          <S.ModalInputLogin
            type="text"
            name="login"
            placeholder="Почта"
          />
          <S.ModalInputPasswordFirst
            type="password"
            name="password"
            placeholder="Пароль"
          />
<S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink href="/login">Войти</S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
          <S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink href="/register">Зарегистрироваться</S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </ContainerEnter>
  );
}
export default AuthFormRender;
