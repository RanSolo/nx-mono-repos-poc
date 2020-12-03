import { Genre, validateGenre, genreSchema } from './genre/genre';
import { Book, validateBook, bookSchema } from './book/book';

export {
  // Book Stuff
  Book,         // Mongoose Model
  bookSchema,   // Mongoose schema
  validateBook, // Joi validations
  // Genre Stuff
  Genre,         // Mongoose Model
  genreSchema,   // Mongoose schema
  validateGenre  // Joi validations
}
