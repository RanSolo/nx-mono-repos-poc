const express = require("express");
const router = express.Router();
const { Genre, validateGenre } = require("@neighborly/models");
const { handle400, handle404, getGenre } = require("@neighborly/utils");
const modelName = "genre";

router.get("/", async (req: any, res: any) => {
  const genres = await Genre.find().sort("name");

  res.send(genres);
});

router.get("/:id",
  async (req: any, res: any) => {
    console.log('req', getGenre)
    const genre = await getGenre(req.params.id, res);

    res.send(genre);
  }
);

router.post("/",
  async (req: any, res: any) => {
    const genre = new Genre({ name: req.body.name });
    const error = validateGenre(req.body);
    console.log('er', error.error);

    if (error.details) handle400(error, res);
    try {
      await genre.save();
      res.send(genre);
    } catch (error) {
      console.error("error: ", error.message);
    }
  }
);

router.put("/:id", (req: any, res: any) => {
  const _id = req.params.id;
  const { name } = req.body;
  const error = validateGenre(req.body);

  if (error) handle400(error, res);
  Genre.findOneAndUpdate({ _id }, { name }, { new: true }, function (
    error: any,
    genre: any,
  ) {
    if (!genre) handle404(modelName, _id, res);
    if (genre) res.send(genre);
    if (error) res.send('booty');
  });
});

router.delete("/:id", async (req: { params: { id: any; }; }, res: { send: (arg0: any) => void; }) => {
  Genre.findByIdAndRemove(req.params.id, function (err: any, genre: any) {
    if (err) console.error("ERROR: ", err);
    if (!genre) handle404(modelName, req.params.id, res);
    if (genre) res.send(genre);
  });
});

export default router
