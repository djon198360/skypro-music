/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
import { createContext } from "react";
import { useDispatch } from "react-redux";
import { setIsPlaying } from "../../Store/Slice/Slice";

export const Context = createContext(false);
export const isShuffle = createContext(false);
export const refAudios = createContext({ currentTrack: false });
// export const Loading = createContext({ isLoading: true });
export const setCurrentTrackContext = createContext({ isCurrent: false });

const APIHOST = "https://skypro-music-api.skyeng.tech/user/";

export const checkAuthData = async (email, password) => {
  const userData = {
    email,
    password,
  };
  const response = await fetch(`${APIHOST}login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (!response.ok) {
    return data;
  }
   localStorage.setItem("user", JSON.stringify(data,data.password=password)) ;
  return data;
};

export async function checkRegisterData(email, password, username) {
  const userData = {
    email,
    password,
    username,
  };
  const response = await fetch(`${APIHOST}signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  localStorage.setItem("user", JSON.stringify(data));

  return data;
}

export const Logaut = () => {
  const dispatch = useDispatch()
  localStorage.removeItem("user");
  dispatch(setIsPlaying(false))
  alert('44')
 // return false;
};

export default Context;
