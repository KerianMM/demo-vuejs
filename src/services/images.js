import { myHeaders } from "./api";

export const getImages = race => {
  const url = new URL("https://api.thecatapi.com/v1/images/search");

  url.searchParams.set("size", "small");
  url.searchParams.set("limit", 20);
  url.searchParams.set("breed_id", race.id);

  return fetch(url, {
    headers: myHeaders,
    mode: "cors"
  });
};
