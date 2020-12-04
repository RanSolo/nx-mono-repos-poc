import { Book } from '@neighborly/models'
import { handle404 } from '../errorHandlers/'
import { getGenre } from '../getters/getGenre'

const createBook = async (reqBody: any, res: any) => {
  try {
    const genre = await getGenre(reqBody.genreId, res);
    reqBody.gName = genre?.name;

    return await newBook(reqBody);
  } catch (e) {
    console.error('error: ', e.message);
  }
};

const newBook = (reqBody: any) => {
  const { title, genreId, price, author, gName } = reqBody;
  return new Book({
    title,
    genre: { genreId, name: gName },
    author,
    price,
  });
};

const updateBook = (reqBody: any, res: any) => {
  const { _id, title, genreId, price } = reqBody;

  Book.findOneAndUpdate(
    { _id },
    { title, genreId, price }, {},
    function (error: any, book: any) {
      if (!book) handle404('book', _id, res);
      if (book) res.send(book);
      if (book && error) res.send(error);
    },
  );
}

export {
  createBook,
  newBook,
  updateBook
}
