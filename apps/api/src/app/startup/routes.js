const express = require('express');
const genres = require('../routes/genres');
//const customers = require('../routes/customers');
const books = require('../routes/books');
//const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
//const returns = require('../routes/returns');
//const error = require('../middleware/error');

export default function (app) {
  app.use(express.json());
  app.use('/api/genres', genres.default);
  //app.use('/api/customers', customers);
  app.use('/api/books', books.default);
  //app.use('/api/rentals', rentals);
  app.use('/api/users', users.default);
  app.use('/api/auth', auth.default);
  //app.use('/api/returns', returns);
  //app.use(error);
}
