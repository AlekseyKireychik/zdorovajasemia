import React, { Fragment } from "react";
import style from "./Login.module.css";
import Input from "../../components/input/Input";

const Login = () => {
  return (
    <Fragment>
      <div className={style.login}>
        <h1>Войдите в систему</h1>
        <form className={style.loginForm} action="">
          <Input
            error="Не верный логин"
            placeholder="Логин"
            type="text"
            name="login"
            value=""
          />
          <Input
            type="password"
            error="Не верный пароль"
            placeholder="Пароль"
            name="password"
            value=""
          />
        </form>      
      </div>
    </Fragment>
  );
};
export default Login;
