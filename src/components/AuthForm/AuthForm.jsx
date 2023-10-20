/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
import { createContext } from "react";

export const Context = createContext(false);
export const isShuffle = createContext(false);
export const refAudios = createContext({ currentTrack: false });
export const Loading = createContext({ isLoading: true });
export const setCurrentTrackContext = createContext({ isCurrent: false });

export const checkAuthData = (login, pass) => {
  localStorage.setItem("user", login);
  localStorage.setItem("pass", pass);
  const user = localStorage.getItem("user");

  return data;
}

export const Logaut = () => {
  localStorage.removeItem("user");
  return false;
};

export default Context;
