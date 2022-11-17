import { api } from "../_api";

export default async function handler(req, res) {
  api.pages
    .read({ slug: req.query.slug }, { include: ["tags", "authors"] })
    .then((pages) => {
      res.status(200).json(pages);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
}
