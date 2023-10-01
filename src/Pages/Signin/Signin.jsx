/* eslint-disable no-unused-expressions */
import { useContext, useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Signup/SSignup";
import ContainerEnter from "./SSIgnin";
import { Context, checkAuthData } from "../../components/AuthForm/AuthForm";

function SigninRender() {
  const [user, setUser] = useContext(Context);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const userEmailValidate = () => {
    emailRef.current.addEventListener("input" || "blur" || "focus", () => {
      EMAIL_REGEXP.test(emailRef.current.value)
        ? setEmail({ validate: true, color: true })
        : setEmail({ validate: false, color: false });
    });
    email.validate
      ? setErrorMessage({ ...errorMessage, emailError: false })
      : setErrorMessage({
          ...errorMessage,
          emailError: "Неверный формат email \n",
        });

    return EMAIL_REGEXP.test(emailRef.current.value);
  };

  const userPasswordValidate = () => {
    const minLength = 8;
    passwordRef.current.addEventListener("input" || "blur" || "focus", () => {
      passwordRef.current.value.length >= minLength
        ? setPassword({ validate: true, color: true })
        : setPassword({ validate: false, color: false });
    });
    password.validate
      ? setErrorMessage({ ...errorMessage, passwordError: false })
      : setErrorMessage({
          ...errorMessage,
          passwordError: "Пароль не может быть менее 8 символов \n",
        });

    return passwordRef.current.value.length >= minLength;
  };

  const loginAuthData = () => {
    setIsActive(false);
    email.validate && password.validate
      ? checkAuthData(emailRef.current.value, passwordRef.current.value)
          .then((data) => {
            setUser(data.username);
            navigate("/", { replace: true });
          })
          .catch((data) => {
            Object.keys(data).map((id) =>
            data[id].map((error) => setErrorMessage(`${error}`))
            );
          })
          .finally(() => {
            setIsActive(true);
          })
      : errorMessage;
   
  };

  const formOnClick = () => {
    const emailInput = userEmailValidate();
    const passwordInput = userPasswordValidate();
    emailInput
      ? setEmail({ validate: true, color: true })
      : setEmail({ validate: false, color: false });
    passwordInput
      ? setPassword({ validate: true, color: true })
      : setPassword({ validate: false, color: false });
    emailInput && passwordInput ? setIsActive(true) : setIsActive(false);
  };

  useEffect(() => {
    setErrorMessage(null);
  }, [user]);

  useEffect(() => {
    setErrorMessage(null);
    password.validate && email.validate
      ? setIsActive(true)
      : setIsActive(false);
  }, [password, email]);
  return (
    <ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin
          onClick={() => {
            formOnClick();
          }}
        >
          <S.ModalFormLink to="/">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </S.ModalFormLink>

          <S.ModalInputEmail
            type="text"
            name="Email"
            placeholder="Почта"
            autoComplete="email"
            ref={emailRef}
            $activ={email.color}
            onChange={() => {
              userEmailValidate();
            }}
          />

          <S.ModalInputPasswordFirst
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete="password"
            ref={passwordRef}
            $activ={password.color}
            onChange={() => {
              userPasswordValidate();
            }}
          />

          <S.ModalBtnSignupEnt
            type="button"
            disabled={!isActive}
            onClick={() => {
              loginAuthData();
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
