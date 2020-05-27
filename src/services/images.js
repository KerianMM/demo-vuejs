import { myHeaders } from "./api";

export const getImages = params => {
  const url = new URL("https://api.thecatapi.com/v1/images/search");

  url.searchParams.set("size", "thumb");
  url.searchParams.set("limit", 5);

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const value = params[key];

      url.searchParams.set(key, value);
    }
  }

  return fetch(url, {
    headers: myHeaders,
    mode: "cors"
  });
};

export const getImagesByRace = race =>
  getImages({
    breed_id: race.id
  });
export const getImagesByCategory = category =>
  getImages({
    category_ids: [category.id]
  });
