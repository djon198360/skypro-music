import { createContext } from "react";

const APIHOST = "https://skypro-music-api.skyeng.tech/user/";
export const Context = createContext(false);

export async function createRegistation(email, password, username) {
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
  localStorage.setItem("user",JSON.stringify(data, (data.password = password)));
  return data;
}

export const setAuth = async (email, password) => {
  //  const navigate = useNavigate();
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
  // localStorage.setItem("user", JSON.stringify(data,data.password=password)) ;
  // localStorage.setItem("user",JSON.stringify(data, (data.password = password)));

  // navigate("/", { replace: true });

  return data;
};

export const Logaut = () => {
  localStorage.removeItem("user");
  return false;
};
