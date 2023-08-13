function SigninRender() {
  return (
    <div className="container-enter">
      <div className="modal__block">
        <form className="modal__form-login" action="#">
          <a href="../">
            <div className="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
          </a>
          <input
            className="modal__input login"
            type="text"
            name="login"
            placeholder="Почта"
          />
          <input
            className="modal__input password"
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <button type="button" className="modal__btn-enter">
            <a href="/">Войти</a>
          </button>
          <button type="button" className="modal__btn-signup">
            <a href="signup">Зарегистрироваться</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigninRender;
