import { dataArray } from "./components/data";

export async function getAllTrack() {
  const response = await fetch("http://localhost:3000/data.jsx");
  // const response = await fetch("https://painassasin.online/catalog/track/all/");
  const data = await response.json;
  return data;
}

export function getTokken() {
 // const responsed = fetch("./");
}
 export function getFavoritesTrack() {
    const responsed =  fetch(dataArray);
    const datas =  responsed.json;
    return datas; 
  }