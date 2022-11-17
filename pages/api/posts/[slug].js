import { api } from "../_api";

export default async function handler(req, res) {
  api.posts
    .read({ slug: req.query.slug }, { include: ["tags", "authors"] })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
}
