import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SSignup";
import ContainerEnter from "./SSIgnin";
import { Context, checkAuthData } from "../components/AuthForm/AuthForm";

function SigninRender() {
  const [token, setToken] = useContext(Context);
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  const onAuthSuccess = (user) => {
    setToken(user);
    return token;
  };

  return (
    <ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin>
          <S.ModalFormLink to="/">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </S.ModalFormLink>
          <S.ModalInputLogin
            type="text"
            name="login"
            placeholder="Почта"
            autoComplete="username"
            onChange={(event) => setLogin(event.target.value)}
          />
          <S.ModalInputPasswordFirst
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete="current-password"
            onChange={(event) => setPass(event.target.value)}
          />
          <S.ModalBtnSignupEnt
            type="button"
            onClick={() => {
              onAuthSuccess(checkAuthData(login, pass));
              navigate("/", { replace: true });
            }}
          >
            Войти
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
