import * as S from "../Signup/style"
import ContainerEnter from "../Signin/style"

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
            <S.ModalBtnSignupLink href="/">Войти</S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
          <S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink href="/">Зарегистрироваться</S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </ContainerEnter>
  );
}
export default AuthFormRender;
