import { myHeaders } from "./api";

export const getRaces = () =>
  fetch("https://api.thecatapi.com/v1/breeds", {
    headers: myHeaders,
    mode: "cors"
  });
