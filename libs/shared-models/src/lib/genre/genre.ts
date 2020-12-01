const Joi = require('joi');
import { model, Schema } from 'mongoose';
import { IGenre } from 'libs/shared-models/src/lib/genre/IGenre'

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

function validateGenre(genre: IGenre) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(genre, schema);
}

const Genre = model<IGenre>('Genre', genreSchema);

export { genreSchema, Genre, validateGenre }
