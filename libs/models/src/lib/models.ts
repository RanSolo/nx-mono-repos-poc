import { Genre, validateGenre, genreSchema } from './genre/genre';
import { Book, validateBook, bookSchema } from './book/book';
import { User, validateUser, userSchema } from './user/user';

export {
  // Book Stuff
  Book,         // Mongoose Model
  bookSchema,   // Mongoose schema
  validateBook, // Joi validations
  // Genre Stuff
  Genre,         // Mongoose Model
  genreSchema,   // Mongoose schema
  validateGenre, // Joi validations
  // User Stuff
  User,         // Mongoose Model
  userSchema,   // Mongoose schema
  validateUser  // Joi validations
}
