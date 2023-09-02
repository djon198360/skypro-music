import * as S from "./style"

function SignupRender() {
  return (
    <S.ContainerSignup>
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
          <S.ModalInputPasswordDouble 
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink href="/">Зарегистрироваться</S.ModalBtnSignupLink>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerSignup>
  );
}

export default SignupRender;
