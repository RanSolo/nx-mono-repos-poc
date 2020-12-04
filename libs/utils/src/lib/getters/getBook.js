import { Book } from '@neighborly/models';
import { handle404 } from '../errorHandlers/handle404';

const getBook = (bookId, res) => {
  return Book.findById(bookId, async function (error, book) {
    if (!book) handle404('book', bookId, res);

    if (book.numberInStock === 0)
      return res.status(400).send(`${book} Not In Stock `);
  });
};

const _getBook = getBook;
export { _getBook as getBook };
