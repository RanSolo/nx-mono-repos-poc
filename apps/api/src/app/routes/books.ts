//const auth = require('../middleware/auth');
//const admin = require('../middleware/admin');
const validateObjectId = require('../middleware/validateObjectId');
//const moment = require('moment');
import * as express from 'express';
const { Book, validateBook } = require('@neighborly/models');
import { handle400, getGenre } from '@neighborly/utils';
const router = express.Router();

router.get('/', async (req: any, res: any) => {
  const books = await Book.find().select('-__v').sort('title');
  return res.send(books);
});

router.post("/", async (req, res) => {
  const error = validateBook(req.body);

  if (error.details) handle400(error.details[0].message, res);

  try {
    const book = await createBook(req.body, res);
    console.log('preerr', book)
    console.log('preerr', req.body)
    await book.save();
    res.send(book);
  } catch (error) {
    console.error(error);
  }
});

//router.post('/', async (req, res) => {
//  const { error } = validate(req.body);
//  if (error) return res.status(400).send(error.details[0].message);

//  const genre = await Genre.findOne({ req.body.genreId });
//  if (!genre) return res.status(400).send('Invalid genre.');

//  const book = new Book({
//    title: req.body.title,
//    genre: {
//      _id: genre._id,
//      name: genre.name,
//    },
//    numberInStock: req.body.numberInStock,
//    dailyRentalRate: req.body.dailyRentalRate,
//    publishDate: moment().toJSON(),
//  });
//  await book.save();

//  res.send(book);
//});

const createBook = async (reqBody: any, res: any) => {
  console.log('gG')
  try {

    const genre = await getGenre(reqBody.genreId, res);
    reqBody.gName = genre?.name;

    return await newBook(reqBody,);
  } catch (e) {
    console.error("error: ", e.message);
  }
};

const newBook = (reqBody: any) => {
  const { title, genreId, price, author, gName } = reqBody;
  return new Book({
    title,
    genre: { genreId, name: gName },
    author,
    price,
  });
};

//router.put('/:id', [auth], async (req, res) => {
//  const { error } = validate(req.body);
//  if (error) return res.status(400).send(error.details[0].message);

//  const genre = await Genre.findById(req.body.genreId);
//  if (!genre) return res.status(400).send('Invalid genre.');

//  const book = await Book.findByIdAndUpdate(
//    req.params.id,
//    {
//      title: req.body.title,
//      genre: {
//        _id: genre._id,
//        name: genre.name,
//      },
//      numberInStock: req.body.numberInStock,
//      dailyRentalRate: req.body.dailyRentalRate,
//    },
//    { new: true }
//  );

//  if (!book)
//    return res.status(404).send('The book with the given ID was not found.');

//  res.send(book);
//});

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
