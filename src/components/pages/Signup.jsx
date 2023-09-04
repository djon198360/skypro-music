import * as S from "./SSignup";

function SignupRender() {
  return (
    <S.ContainerSignup>
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
          <S.ModalInputPasswordDouble
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink to="/register">
              Зарегистрироваться
            </S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerSignup>
  );
}

export default SignupRender;
