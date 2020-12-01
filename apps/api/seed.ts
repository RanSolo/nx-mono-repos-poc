//const { Genre } = require('./models/genre');
//const { Book } = require('./models/book');
//const mongoose = require('mongoose');
//const config = require('config');
//const books: IBook[] = [
//  {
//    id: 1,
//    title: 'The Picture of Dorian Gray ',
//    author: 'Oscar Wilde',
//    rating: 5,
//    price: 9.99,
//  },
//  {
//    id: 2,
//    title: 'Frankenstein',
//    author: 'Mary Wollstonecraft Shelley',
//    rating: 4,
//    price: 7.95,
//  },
//  {
//    id: 3,
//    title: 'Jane Eyre',
//    author: 'Charlotte Brontë',
//    rating: 4.5,
//    price: 10.95,
//  },
//  {
//    id: 4,
//    title: 'Dracula',
//    author: 'Bram Stoker',
//    rating: 4,
//    price: 14.99,
//  },
//  {
//    id: 5,
//    title: 'Pride and Prejudice',
//    author: 'Jane Austen',
//    rating: 4.5,
//    price: 12.85,
//  },
//];
//const data = [
//  {
//    name: 'Comedy',
//    books: [
//      { title: 'Airplane', author: "Mark Twain", dailyRentalRate: 2 },
//      { title: 'The Hangover', author: "Mark Twain", dailyRentalRate: 2 },
//      {
//        title: 'Wedding Crashers',
//        author: "Mark Twain",
//        dailyRentalRate: 2,
//      },
//    ],
//  },
//  {
//    name: 'Action',
//    books: [
//      { title: 'Die Hard', author: "Mark Twain", dailyRentalRate: 2 },
//      { title: 'Terminator', author: "Mark Twain", dailyRentalRate: 2 },
//      { title: 'The Avengers', author: "Mark Twain", dailyRentalRate: 2 },
//    ],
//  },
//  {
//    name: 'Romance',
//    books: [
//      { title: 'The Notebook', author: "Mark Twain", dailyRentalRate: 2 },
//      {
//        title: 'When Harry Met Sally',
//        author: "Mark Twain",
//        dailyRentalRate: 2,
//      },
//      { title: 'Pretty Woman', author: "Mark Twain", dailyRentalRate: 2 },
//    ],
//  },
//  {
//    name: 'Thriller',
//    books: [
//      { title: 'The Sixth Sense', author: "Mark Twain", dailyRentalRate: 2 },
//      { title: 'Gone Girl', author: "Mark Twain", dailyRentalRate: 2 },
//      { title: 'The Others', author: "Mark Twain", dailyRentalRate: 2 },
//    ],
//  },
//];

//async function seed() {
//  await mongoose.connect(config.get('db'));

//  await Book.deleteMany({});
//  await Genre.deleteMany({});

//  for (let genre of data) {
//    const { _id: genreId } = await new Genre({ name: genre.name }).save();
//    const books = genre.books.map((book) => ({
//      ...book,
//      genre: { _id: genreId, name: genre.name },
//    }));
//    await Book.insertMany(books);
//  }

//  mongoose.disconnect();

//  console.info('Done!');
//}

//seed();
