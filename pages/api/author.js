import { api } from "./_api";

export default async function handler(req, res) {
  api.authors
    .read({ id: "1" })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
}
