//

import { api } from "../_api";

export default async function handler(req, res) {
  api.tags
    .read({ slug: req.query.slug }, { include: "authors" })
    .then((tags) => {
      res.status(200).json(tags);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
}
