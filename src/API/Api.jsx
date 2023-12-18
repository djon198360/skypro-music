/* eslint-disable no-unused-vars */
import { useGetAllFavoriteQuery } from "../Services/ApiTrack";

const APIHOST = "https://skypro-music-api.skyeng.tech/";

export const getToken = async (userData) => {
  const token = await fetch(`${APIHOST}user/token/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await token.json();
  if (!token.ok) {
    throw data;
  }
  localStorage.setItem("token_access", data.access);
  localStorage.setItem("token_refresh", data.refresh);
};

export const refreshToken = async (functionCallback) => {
  const token = await fetch(`${APIHOST}user/token/refresh/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ refresh: localStorage.getItem("token_refresh") }),
  });
  const data = await token.json();
  if (!token.ok) {
    throw data;
  }
  localStorage.setItem("token_access", data.access);
  functionCallback();
};

export async function getAllTrack() {
  const response = await fetch(`${APIHOST}catalog/track/all/`, {
    headers: { Authorization: ``, "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Не удалось загрузить плейлист, попробуйте позже!`); // ${response.status}
  }
  return data;
}

export async function getTrackCategory(id) {
  const response = await fetch(`${APIHOST}catalog/selection/${id}`, {
    headers: { Authorization: ``, "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Не удалось загрузить плейлист, попробуйте позже!`); // ${response.status}
  }
  return data;
}

export const getFavoritesTrack = async () => {
  const accessToken = localStorage.getItem("token_access");
  const token = await fetch(`${APIHOST}catalog/track/favorite/all/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await token.json();
  if (!token.ok) {
    refreshToken(() => getFavoritesTrack());
    throw data;
  }
  return data;
};

export const setFavoritesTrack = async (id) => {
  const accessToken = localStorage.getItem("token_access");
  const token = await fetch(`${APIHOST}catalog/track/${id}/favorite/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await token.json();
  if (!token.ok) {
    refreshToken(() => setFavoritesTrack(id));
    return false;
  }
  return true;
};

export const delFavoritesTrack = async (id) => {
  const accessToken = localStorage.getItem("token_access");
  const token = await fetch(`${APIHOST}catalog/track/${id}/favorite/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
 const data = await token.json();
  if (!token.ok) {
    refreshToken(() => delFavoritesTrack(id));
  }
  useGetAllFavoriteQuery({
    pollingInterval: 3000,
keepUnusedDataFor: 120, 
refetchOnReconnect: true,
});

  return data; 
};
