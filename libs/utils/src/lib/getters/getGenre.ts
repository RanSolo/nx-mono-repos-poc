const { Genre } = require('@neighborly/models');
import { handle404 } from '../errorHandlers/handle404';
import { handle400 } from '../errorHandlers/handle400';

export const getGenre = (genreId: any, res: any) => {
  console.log('gId', genreId);
  return Genre.findById(genreId, function (error, genre) {
    if (!genre) return handle404('genre', genreId, res);
    if (error) return handle400(error, res);
    if (error && genre) res.send(error);
  });
};
