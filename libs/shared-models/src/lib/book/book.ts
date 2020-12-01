import { model, Schema } from 'mongoose';
const Joi = require('joi');
import { genreSchema } from '../genre/genre';
import { IBook } from './IBook';


const bookSchema: Schema = new Schema({
  id: String,
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255
  },
  genre: {
    type: genreSchema,
    required: true
  },
  author: {
    type: String,
    required: true,
    min: 0,
    max: 255
  },
  price: Number
});

function validateBook(book) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.string().required(),
    author: Joi.string().min(0).required(),
    price: Joi.number().min(0).required()
  };

  return Joi.validate(book, schema);
}

const Book = model<IBook>('Book', bookSchema);

export {
  Book, bookSchema, validateBook
}
