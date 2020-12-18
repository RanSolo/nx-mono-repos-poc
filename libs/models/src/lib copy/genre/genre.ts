const Joi = require('joi');
import { model, Schema } from 'mongoose';
import { IGenre } from 'libs/models/src/lib/genre/IGenre'

const genreSchema = new Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50,
  },
});

function validateGenre(genre: IGenre) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50),
  });
  return schema.validate(genre);
}

const Genre = model<IGenre>('Genre', genreSchema);

export { genreSchema, Genre, validateGenre }
