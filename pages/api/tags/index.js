import { api } from "../_api";

export default async function handler(req, res) {
  api.tags
    .browse()
    .then((tags) => {
      res.status(200).json({ data: tags, meta: tags.meta });
    })
    .catch((err) => {
      res.status(401).send(err);
    });
}
