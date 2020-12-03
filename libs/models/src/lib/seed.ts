const { connect, disconnect } = require('mongoose');
const { get } = require('config');
//const { Book } = require('./book/book')
//const { Genre } = require('libs/models/src/lib/genre/genre');
//const { models } = require('./models');

//console.log('sm', models)
const data = [
  {
    name: 'Terror',
    genres: [
      { title: 'Airplane', author: 'Mark Twain', price: 9.99 },
      { title: 'The Hangover', author: 'Mark Twain', price: 9.99 },
      {
        title: 'Wedding Crashers',
        author: 'Mark Twain',
        price: 9.99,
      },
    ],
  },
  {
    name: 'Action',
    books: [
      { title: 'Die Hard', author: 'Mark Twain', price: 9.99 },
      { title: 'Terminator', author: 'Mark Twain', price: 9.99 },
      { title: 'The Avengers', author: 'Mark Twain', price: 9.99 },
    ],
  },
  {
    name: 'Romance',
    books: [
      { title: 'The Notebook', author: 'Mark Twain', price: 9.99 },
      {
        title: 'When Harry Met Sally',
        author: 'Mark Twain',
        price: 9.992,
      },
      { title: 'Pretty Woman', author: 'Mark Twain', price: 9.99 },
    ],
  },
  {
    name: 'Thriller',
    books: [
      { title: 'The Sixth Sense', author: 'Mark Twain', price: 9.99 },
      { title: 'Gone Girl', author: 'Mark Twain', price: 9.99 },
      { title: 'The Others', author: 'Mark Twain', price: 9.99 },
    ],
  },
];

async function seed() {
  await connect(get('db'));
  console.log('dddbbb', get('db'))

  await Book.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const books = genre.books.map((book) => ({
      ...book,
      genre: { _id: genreId, name: genre.name },
    }));
    await Book.insertMany(books);
  }

  disconnect();

  console.info('Done!');
}

seed();
