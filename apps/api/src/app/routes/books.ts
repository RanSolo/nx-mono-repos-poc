//const auth = require('../middleware/auth');
//const admin = require('../middleware/admin');s
//const moment = require('moment');
import * as express from 'express';
import { Book, validateBook } from '@neighborly/models';
import { handle400, handle404, createBook, getBook, getGenre, updateBook } from '@neighborly/utils';
const router = express.Router();
const modelName = "book";

router.get('/', async (req: any, res: any) => {
  const books = await Book.find().select('-__v').sort('title');
  return res.send(books);
});

router.get("/:id", async (req, res) => {
  const book = await getBook(req.params.id, res);
  if (book) res.send(book);
});

router.post("/", async (req, res) => {
  const error = validateBook(req.body);

  if (error.details) handle400(error.details[0].message, res);

  try {
    const book = await createBook(req.body, res);

    await book.save();
    res.send(book);
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", async (req, res) => {
  const { title, genreId, price } = req.body;
  req.body._id = req.params.id

  const error = validateBook(req.body);
  if (error.details) handle400(error.details[0].message, res);

  const genre = await getGenre(genreId, res);
  updateBook(req.body, res)
});

//router.delete('/:id', [auth, admin], async (req, res) => {
//  const book = await Book.findByIdAndRemove(req.params.id);

//  if (!book)
//    return res.status(404).send('The book with the given ID was not found.');

//  res.send(book);
//});

//router.get('/:id', validateObjectId, async (req, res) => {
//  const book = await Book.findById(req.params.id).select('-__v');

//  if (!book)
//    return res.status(404).send('The book with the given ID was not found.');

//  res.send(book);
//});

export default router
