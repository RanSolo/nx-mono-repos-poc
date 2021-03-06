const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const router = express.Router();
import { User } from '@neighborly/models';
import { handle400, handle404 } from '@neighborly/utils';
const msg = 'Invalid email or password';

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  let error = validate(req.body);
  if (error.details) return res.status(400).send(error.details[0].message);

  res.user = await User.findOne({ email });
  console.log(res.user);
  if (!res.user) return res.status(400).send(msg);

  bcrypt.compare(password, res.user.password, (err, bool) => {
    sessionRes(err, bool, res);
  });
});

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, {}, function (err, user) {
    if (err) console.error('ERROR: ', err);
    if (!user) handle404('user', req.params.id, res);
    if (user) res.send(user);
  });
});

const sessionRes = async (error, bool, res) => {
  if (!bool) return res.status(400).send(msg);
  if (error) return res.status(400).send(msg);

  res.write(jwt.sign({ _id: res.user._id }, config.get('jwtPrivateKey')));
  res.send();
};

const validate = (user) => {
  const schema = Joi.object({
    password: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
  });

  const result = schema.validate(user);
  if (!result.error) result.error = {};
  return result.error;
};

export default router;
