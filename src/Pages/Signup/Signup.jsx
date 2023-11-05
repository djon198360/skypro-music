/* eslint-disable no-unused-expressions */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createRegistation } from "../../API/User";
import {
  validEmail,
  validPassword,
  handleValidName,
  handleRepeatPasswordValidate,
} from "../../assets/function";
import * as S from "./SSignup";

export function SignupRender() {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const [userName, setUserName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const userEmailValidate = () => {
    setEmail(validEmail(emailRef.current.value));
    return validEmail(emailRef.current.value);
  };

  const userPasswordValidate = () => {
    setPassword(validPassword(passwordRef.current.value));
    return validPassword(passwordRef.current.value);
  };

  const userNameValidate = () => {
    setUserName(handleValidName(userRef.current.value));
    return handleValidName(userRef.current.value);
  };

  const userRepeatPasswordValidate = () => {
    setRepeatPassword(
      handleRepeatPasswordValidate(
        passwordRef.current.value,
        repeatPasswordRef.current.value
      )
    );
    setRepeatPassword(
      handleRepeatPasswordValidate(
        passwordRef.current.value,
        repeatPasswordRef.current.value
      )
    );
  };

  const handleRegister = () => {
    setIsActive(false);
    setErrorMessage(null);
    email.validate && password.validate && userName.validate
      ? createRegistation(
          emailRef.current.value,
          passwordRef.current.value,
          userRef.current.value
        )
          .then((data) => {
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/", { replace: true });
          })
          .catch((data) => {
            data ? setErrorMessage(data) : null;
          })
          .finally(() => {
            setIsActive(true);
          })
      : errorMessage;
  };

  useEffect(() => {
    userName.validate
      ? setErrorMessage({ ...errorMessage, userError: false })
      : setErrorMessage({
          ...errorMessage,
          userError: "Логин не может быть менее 2 букв",
        });
  }, [userName]);

  useEffect(() => {
    email.validate
      ? setErrorMessage({ ...errorMessage, emailError: false })
      : setErrorMessage({
          ...errorMessage,
          emailError: "Неверный формат email",
        });
  }, [email]);

  useEffect(() => {
    password.validate
      ? setErrorMessage({ ...errorMessage, passwordError: false })
      : setErrorMessage({
          ...errorMessage,
          passwordError: "Пароль не может быть менее 8 символов ",
        });
  }, [password]);

  useEffect(() => {
    repeatPassword.validate
      ? setErrorMessage({ ...errorMessage, repeatPasswordError: false })
      : setErrorMessage({
          ...errorMessage,
          repeatPasswordError: "Пароли не совпадают ",
        });
  }, [repeatPassword]);

  useEffect(() => {
    userName.validate &&
    password.validate &&
    email.validate &&
    repeatPassword.validate
      ? setIsActive(true)
      : setIsActive(false);
  }, [userName, password, email, repeatPassword]);

  useEffect(() => {
    setErrorMessage(errorMessage);
  }, [errorMessage]);

  return (
    <S.ContainerSignup>
      <S.ModalBlock>
        <S.ModalFormLogin>
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
              {Object.values(errorMessage).map((errors) =>
                errors ? (
                  <S.ErrorSpan>
                    {errors} {"\n"}
                  </S.ErrorSpan>
                ) : null
              )}
            </S.Error>
          ) : null}

          <S.ModalBtnSignupEnt
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