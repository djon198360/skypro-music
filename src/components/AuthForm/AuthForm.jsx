import { createContext } from "react";


export const Context = createContext(false);

export const Login = () => {
  localStorage.setItem("user", "test");
  const user = localStorage.getItem("user")
  
  return user;
};
export const Logaut = () => {
  localStorage.removeItem("user");
};

export default Context;
