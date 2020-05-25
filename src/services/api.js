export const api_key = "efa7812b-a15c-4566-8b22-588866a87c1e";

export const myHeaders = () => {
  const h = new Headers();

  h.set("x-api-key", api_key);

  return h;
};
