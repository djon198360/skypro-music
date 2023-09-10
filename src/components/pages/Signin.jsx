import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SSignup";
import ContainerEnter from "./SSIgnin";
import { Context, Login } from "../AuthForm/AuthForm";

function SigninRender() {
  const [token, setToken] = useContext(Context);

  const navigate = useNavigate();
  const Authentication = (tokens) => {
    setToken(tokens);

    if (!token) {
      navigate("/register", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
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
          <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
          <S.ModalInputPasswordFirst
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <S.ModalBtnSignupEnt type="button">
            <S.ModalBtnSignupLink
              onClick={() => {
                Authentication(Login());
              }}
            >
              Войти
            </S.ModalBtnSignupLink>
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
