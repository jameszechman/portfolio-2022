import { api } from "./_api";

export default async function handler(req, res) {
  api.settings
    .browse()
    .then((settings) => {
      res.status(200).json(settings);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
}
