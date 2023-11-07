/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { useContext, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validEmail, validPassword } from "../../assets/function";
import * as S from "../Signup/SSignup";
import ContainerEnter from "./SSIgnin";
import { setAuth } from "../../API/User";
import Context from "../../assets/context";

import { setUserData } from "../../Store/Slice/UserSlice";

export const SigninRender = () => {
  const [user, setUser] = useContext(Context);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userEmailValidate = () => {
    setEmail(validEmail(emailRef.current.value));
    return validEmail(emailRef.current.value);
  };

  const userPasswordValidate = () => {
    setPassword(validPassword(passwordRef.current.value));
    return validPassword(passwordRef.current.value);
  };

 

  const formOnClick = () => {
    userEmailValidate();
    userPasswordValidate();
    email.validate && password.validate
      ? setIsActive(true)
      : setIsActive(false);
  };

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
    password.validate && email.validate
      ? setIsActive(true)
      : setIsActive(false);
  }, [password]);

  useEffect(() => {
    setErrorMessage(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    setErrorMessage(null);
  }, [user]);

  const handleLogin = () => {
    setIsActive(false);
    email.validate && password.validate
      ? setAuth(emailRef.current.value, passwordRef.current.value)
          .then((data) => {
            dispatch(setUserData(data));
            setUser(data.username);
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
              handleLogin();
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
};
