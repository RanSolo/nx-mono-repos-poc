import { User, validateUser } from "@neighborly/models"
import { IUser } from 'libs/models/src/lib/user/IUser'
import * as config from 'config';
import * as jwt from 'jsonwebtoken';
import { handle404 } from "../errorHandlers"

const updateUser = (reqBody: any, res: any) => {
  const { _id, name, email, password } = reqBody;

  User.findOneAndUpdate(
    { _id },
    { _id, name, email, password }, {},
    function (error: any, user: IUser) {
      if (!user) handle404('user', _id, res);
      if (user) res.send(user);
      if (user && error) res.send(error);
    },
  );
}

const handleUpdateRes = async (error: any, user: IUser, res: any) => {
  if (!user) handle404('user', 'not found', res);
  if (user) res.send(user);
  if (error) res.send(error);
};

const saveUser = async (user: IUser, res: any) => {
  user.save((e: any, user: any) => {
    console.log('user', jwt.TokenExpiredError);
    console.log('jwt', jwt);

    if (e && !e.details) { return res.status(400).send(e.details[0].message) };
    if (user) {
      res
        .header(
          'x-auth-token',
          jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'))
        )
        .send(user);
    }
    res.send();
  });
};

export { updateUser, saveUser, handleUpdateRes }
