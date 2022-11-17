export const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://zechman.design";
export const fetcher = (key) =>
  fetch(url + "/api/" + key).then((res) => res.json());
