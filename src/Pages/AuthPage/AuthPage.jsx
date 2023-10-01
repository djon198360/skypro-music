/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { 
  checkAuthData,
  checkRegisterData,
  Context,
} from "../../components/AuthForm/AuthForm";

export default function AuthPage({ isLoginMode = false }) {
  const [token, setToken] = useContext(Context);
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const validEmail = (val) => {
    return EMAIL_REGEXP.test(val);
  };

  const validPassword = (val) => {
    return val.length >= 8;
  };
  const handleLogin = async ({ password, email }) => {
    setErrorMessage(null);
    let errorText = "";
    validPassword(email.emailData)
      ? setPassword({
          passwordlData: password.passwordData,
          passwordlValid: validPassword,
        })
      : (errorText = {
          errorPass:
            "Длина password должна быть не менее 8 символов , или пароли не совпадают\n",
        });

    validEmail(email.emailData)
      ? setEmail({
          emailData: email.emailData,
          emailValid: validEmail(email.emailData),
        })
      : (errorText = [errorText, { errorEmail: "Email указан неверно \n" }]);

    email.emailValid && password.passwordValid
      ? checkAuthData(email, password)
          .then((data) => {
            setToken(data);

            navigate("/", { replace: true });
          })
          .catch((error) => {
            setErrorMessage(error.message + token);
          
          })
          .finally(() => {
            setDisabled(false);
          })
      : setErrorMessage(errorText);
  };

  const handleRegister = async ({
    email,
    username,
    password,
    repeatPassword,
  }) => {
    let errorText = "";

    username.length >= 4
      ? setUserName(username)
      : (errorText = "Длина логина должна быть не менее 4 символов \n");

    password.length >= 8 && password === repeatPassword
      ? setPassword(password)
      : (errorText = [
          errorText,
          "Длина password должна быть не менее 8 символов , или пароли не совпадают\n",
        ]);


    username && email && password && repeatPassword
      ? checkRegisterData(email, password, username)
          .then((data) => {
            setToken(data);
          })
          .catch((error) => {
            setErrorMessage(error.message + token);
       
          })
          .finally(() => {})
      : setErrorMessage(errorText);
  };

  /*  const onEmailChange = (e) => {
    const val = e.target.value;
    const valid = validEmail(val);
   
    console.log(val);
    console.log(`${email} + "email"`)
    setEmail({email: val, emailValid: valid})
    console.dir(email.email);
    
  }; */
  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setErrorMessage(null);
  }, [isLoginMode, email, password, repeatPassword]);
  const nameColor = email.emailValid === true ? "green" : "";

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                style={{ outlineColor: nameColor }}
                type="text"
                name="email"
                placeholder="Почта"
                value={email.emailData}
                onChange={(event) => {
                  setEmail({
                    emailData: event.target.value,
                    emailValid: false,
                  });
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password.passwordData}
                onChange={(event) => {
                  setPassword({
                    passwordlData: event.target.value,
                    passwordValid: false,
                  });
                }}
              />
            </S.Inputs>
            {errorMessage && <S.Error>{errorMessage}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={disabled}
                onClick={() => handleLogin({ password, email })}
              >
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="email"
                placeholder="Почта"
                value={email.emailData ? email.emailData : email}
                onChange={(event) => {
                  event.target.addEventListener("input", () => {
                    event.target.value >= 8
                      ? setEmail({
                        emailData: event.target.value,
                        emailValid: true,
                        })
                      : setEmail(event.target.value);
                  });
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Логин"
                value={username}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password.passwordData ? password.passwordData : password}
                onChange={(event) => {
                  event.target.addEventListener("input", () => {
                    event.target.value >= 8
                      ? setPassword({
                          passwordlData: event.target.value,
                          passwordValid: true,
                        })
                      : setPassword(event.target.value);
                  });
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {errorMessage && <S.Error>{errorMessage}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleRegister()}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
