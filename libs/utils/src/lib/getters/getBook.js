import { Book } from '@neighborly/models';
import { handle404 } from '../errorHandlers/handle404';
import { getGenre } from '../getters/getGenre';

const getBook = (bookId, res) => {
  return Book.findById(bookId, async function (error, book) {
    if (!book) handle404('book', bookId, res);

    if (book.numberInStock === 0)
      return res.status(400).send(`${book} Not In Stock `);
    const genre = await getGenre(book.genre.id, res);

    if (!genre) {
      console.error('orphaned genre');
      res.send('orphaned genre');
    }
    book.genre = genre;

    if (error && book) res.send(error);
  });
};

const _getBook = getBook;
export { _getBook as getBook };
