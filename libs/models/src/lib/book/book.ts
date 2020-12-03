import { model, Schema, } from 'mongoose';
const Joi = require('joi');
import { genreSchema } from '../genre/genre';
import { IBook } from './IBook';

const bookSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255
  },
  genre: {
    type: genreSchema,
  },
  author: {
    type: String,
    required: true,
    min: 0,
    max: 255
  },
  price: Number
});

function validateBook(book: IBook) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    author: Joi.string().min(5).max(50).required(),
    genreId: Joi.objectId().required(),
    price: Joi.number().min(0).required()
  })
  const validated = schema.validate(book)
  console.log('val', validated.value);

  return schema.validate(book);
}

const Book = model<IBook>('Book', bookSchema);

export {
  Book, bookSchema, validateBook
}
