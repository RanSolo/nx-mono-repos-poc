
import { Genre, Book } from '@neighborly/shared-models';
//const auth = require('../middleware/auth');
//const admin = require('../middleware/admin');
//const validateObjectId = require('../middleware/validateObjectId');
const moment = require('moment');

import * as express from 'express';
import { validateGenre } from 'libs/shared-models/src/lib/genre/genre';
import { IGenre } from 'libs/shared-models/src/lib/genre/IGenre';
const router = express.Router();

router.get('/', async (req: any, res: any) => {
  const books = await Book.find().select('-__v').sort('title');
  return res.send(books);
});

router.post('/', async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //const genre = await Genre.findById(req.body.genreId);
  const genre = { _id: 1, name: 'Terror' }
  if (!genre) return res.status(400).send('Invalid genre.');

  const book = new Book({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
    publishDate: moment().toJSON(),
  });
  await book.save();

  res.send(book);
});

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
