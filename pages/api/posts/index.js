import { api } from "../_api";

export default async function handler(req, res) {
  api.posts
    .browse({
      filter: req.query?.filter ? "tag:" + req.query?.filter : "tag:Blog",
      include: ["tags", "authors"],
      limit: req.query?.limit || 15,
      page: req.query?.page || 1,
    })
    .then((posts) => {
      res.status(200).json({ data: posts, meta: posts.meta });
    })
    .catch((err) => {
      res.status(401).send(err);
    });
}
