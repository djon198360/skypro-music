/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context, checkRegisterData } from "../../components/AuthForm/AuthForm";
import * as S from "./SSignup";

function SignupRender() {
  const [user, setUser] = useContext(Context);
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const buttonRef = useRef(null);
  const [userName, setUserName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const userNameValidate = () => {
    const minLength = 2;
    userRef.current.addEventListener("input" || "blur" || "focus", () => {
      userRef.current.value.length >= minLength
        ? setUserName({ validate: true, color: true })
        : setUserName({ validate: false, color: false });
    });
    userName.validate
      ? setErrorMessage({ ...errorMessage, userError: false })
      : setErrorMessage({
          ...errorMessage,
          userError: "Логин не может быть менее 2 букв \n",
        });
    return userRef.current.value.length >= minLength;
  };

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

  const userRepeatPasswordValidate = () => {
    repeatPasswordRef.current.addEventListener(
      "input" || "blur" || "focus",
      () => {
        repeatPasswordRef.current.value === passwordRef.current.value
          ? setRepeatPassword({ validate: true, color: true })
          : setRepeatPassword({ validate: false, color: false });
      }
    );
    repeatPassword.validate
      ? setErrorMessage({ ...errorMessage, repeatPasswordError: false })
      : setErrorMessage({
          ...errorMessage,
          repeatPasswordError: "Пароли не совпадают \n",
        });
    return repeatPasswordRef.current.value === passwordRef.current.value;
  };

  const handleRegister = () => {
    setIsActive(false);
    email.validate && password.validate && userName.validate
      ? checkRegisterData(
          emailRef.current.value,
          passwordRef.current.value,
          userRef.current.value
        )
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

 /*  const formOnClick = () => {
    const userInput = userNameValidate();
    const emailInput = userEmailValidate();
    const passwordInput = userPasswordValidate();
    const repeatInput = userRepeatPasswordValidate();
    userInput
      ? setUserName({ validate: true, color: true })
      : setUserName({ validate: false, color: false });
    emailInput
      ? setEmail({ validate: true, color: true })
      : setEmail({ validate: false, color: false });
    passwordInput
      ? setPassword({ validate: true, color: true })
      : setPassword({ validate: false, color: false });
    repeatInput
      ? setRepeatPassword({ validate: true, color: true })
      : setRepeatPassword({ validate: false, color: false });

    userInput && emailInput && passwordInput && repeatInput
      ? setIsActive(true)
      : setIsActive(false);
  }; */

  useEffect(() => {
    setErrorMessage(null);
  }, [user]);

  useEffect(() => {
    setErrorMessage(null);
    userName.validate &&
    password.validate &&
    email.validate &&
    repeatPassword.validate
      ? setIsActive(true)
      : setIsActive(false);
  }, [userName, password, email, repeatPassword]);

  return (
    <S.ContainerSignup>
      <S.ModalBlock>
        <S.ModalFormLogin
         /*  onClick={() => {
            formOnClick();
          }} */
        >
          <S.ModalFormLink to="/">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </S.ModalFormLink>
          <S.ModalInputLogin
            type="text"
            name="Login"
            placeholder="Login"
            autoComplete="username"
            ref={userRef}
            $activ={userName.color}
            onChange={() => {
              userNameValidate();
            }}
          />

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
          <S.ModalInputPasswordDouble
            type="password"
            name="passwordRepeat"
            placeholder="Повторите пароль"
            autoComplete="current-password"
            ref={repeatPasswordRef}
            $activ={repeatPassword.color}
            onChange={() => {
              userRepeatPasswordValidate();
            }}
          />
          {errorMessage ? (
            <S.Error>
              {Object.values(errorMessage).map((error) => error)}
            </S.Error>
          ) : null}
          <S.ModalBtnSignupEnt
            ref={buttonRef}
            type="button"
            disabled={!isActive}
            onClick={() => {
              handleRegister();
            }}
          >
            Зарегистрироваться
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerSignup>
  );
}

export default SignupRender;
