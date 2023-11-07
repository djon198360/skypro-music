import { getToken } from "./Api";

const APIHOST = "https://skypro-music-api.skyeng.tech/";



export const createRegistation = async (email, password, username) => {
  const userData = {
    email,
    password,
    username,
  };
  const response = await fetch(`${APIHOST}user/signup/`, {
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
  getToken(userData);
  localStorage.setItem(
    "user",
    JSON.stringify(data, (data.password = password))
  );
  return data;
}

export const setAuth = async (email, password) => {
  const userData = {
    email,
    password,
  };
  const response = await fetch(`${APIHOST}user/login/`, {
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
  getToken(userData);
  localStorage.setItem(
    "user",
    JSON.stringify(data) // ,(data.password = password))
  );
  return data;
};

export const Logaut = async () => {
  localStorage.removeItem("user");
  return false;
};
