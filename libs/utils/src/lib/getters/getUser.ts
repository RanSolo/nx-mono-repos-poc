const { User } = require('@neighborly/models');
import { handle404 } from '../errorHandlers/handle404';
import { handle400 } from '../errorHandlers/handle400';

export const getUser = (userId: any, res: any) => {
  return User.findById(userId, function (error: any, user: any) {
    if (!user) return handle404('user', userId, res);
    if (error) return handle400(error, res);
    if (error && user) res.send(error);
  });
};
