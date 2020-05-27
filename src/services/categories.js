import { myHeaders } from "./api";

export const getCategories = () =>
  fetch("https://api.thecatapi.com/v1/categories", {
    headers: myHeaders,
    mode: "cors"
  });
