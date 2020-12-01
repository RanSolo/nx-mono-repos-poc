import { model, Schema, Model, Document } from 'mongoose';

//import Joi = require('joi');
//const {genreSchema} = require('./genre');

export interface IBook extends Document {
  id: string;
  title: string;
  author: string;
  //rating: number;
  price: number;
}

export const BookSchema: Schema = new Schema({
  id: String,
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255
  },
  //genre: {
  //  type: genreSchema,
  //  required: true
  //},
  author: {
    type: String,
    required: true,
    min: 0,
    max: 255
  },
  price: Number
});

//export function validateMovie(movie) {
//  const schema = {
//    title: Joi.string().min(5).max(50).required(),
//    genreId: Joi.objectId().required(),
//    numberInStock: Joi.number().min(0).required(),
//    dailyRentalRate: Joi.number().min(0).required()
//  };

//  return Joi.validate(movie, schema);
//}



export const Book = model<IBook>('Book', BookSchema);

