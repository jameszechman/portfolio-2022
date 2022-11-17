import { api } from "../_api";

export default async function handler(req, res) {
  api.pages
    .browse({
      include: ["tags", "authors"],
      limit: "all",
    })
    .then((pages) => {
      res.status(200).json({ data: pages, meta: pages.meta });
    })
    .catch((err) => {
      res.status(401).send(err);
    });
}
