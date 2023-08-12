function NotFoundRender() {
    return(
        <div className="container-enter">
        <div className="modal__block">
            
          <form className="modal__form-login" action="#">
          
            <a href="../">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <h1 className="modal__error_title">Такой страницы нет</h1>
            <button type="button" className="modal__btn-enter">
              <a href="/">Перейти на главную</a>
            </button>

          </form>
        </div>
      </div>

    )
}

export default NotFoundRender;