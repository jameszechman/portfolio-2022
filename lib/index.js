export const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://portfolio-2022.zechman.dev";
export const fetcher = (key) =>
  fetch(url + "/api/" + key).then((res) => res.json());

export const ssrfetch = async (key) => {
  return fetch(url + "/api" + key).then((res) => res.json());
};
