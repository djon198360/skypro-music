import { createContext } from "react";

export const Context = createContext(false);
export const Loading = createContext({isLoading:true});

export const checkAuthData = (login,pass) => {
  localStorage.setItem("user", login);
  localStorage.setItem("pass",pass);
  const user = localStorage.getItem("user");

  return user;
};
export const Logaut = () => {
  localStorage.removeItem("user");
};

export default Context;
