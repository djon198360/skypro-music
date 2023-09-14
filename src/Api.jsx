const APIHOST = "https://skypro-music-api.skyeng.tech/";

export async function getAllTrack() {
  const response = await fetch(`${APIHOST}catalog/track/all/`,{
    headers: {Authorization:``}
  });
  const data = await response.json();
  if (!response.ok) {
    
    throw new Error(`An error has occured: ${response.status}`);
  }

  return data;
}

export function getTokken() {
  // const responsed = fetch("./");
}
export function getFavoritesTrack() {
  const responsed = fetch(`${APIHOST}`);
  const datas = responsed.json;
  return datas;
}
