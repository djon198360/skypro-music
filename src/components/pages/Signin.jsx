import * as S from "./SSignup";
import ContainerEnter from "./SSIgnin";

function SigninRender() {
  return (
    <ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin>
          <S.ModalFormLink to="../">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </S.ModalFormLink>
          <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
          <S.ModalInputPasswordFirst
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink to="/login">Войти</S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
          <S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink to="/register">
              Зарегистрироваться
            </S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </ContainerEnter>
  );
}

export default SigninRender;
