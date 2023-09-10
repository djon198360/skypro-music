import * as S from "./SSignup";

function SignupRender() {
  return (
    <S.ContainerSignup>
      <S.ModalBlock>
        <S.ModalFormLogin>
          <S.ModalFormLink to="/">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </S.ModalFormLink>
          <S.ModalInputLogin type="text" name="login" placeholder="Почта"
          autoComplete="username"
          />
          <S.ModalInputPasswordFirst
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete="current-password"
          />
          <S.ModalInputPasswordDouble
            type="password"
            name="password"
            placeholder="Повторите пароль"
            autoComplete="current-password"
          />
          <S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink >
              Зарегистрироваться
            </S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerSignup>
  );
}

export default SignupRender;
