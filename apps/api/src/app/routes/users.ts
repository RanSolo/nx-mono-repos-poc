const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
import { User, validateUser } from '@neighborly/models';
import { isEmailUnique, handle400, handle404, updateUser, saveUser } from '@neighborly/utils';
const modelName = 'user';

router.get('/', async (req, res) => {
  const users = await User.find().sort('name');

  res.send(users);
});

router.get('/:id', async (req, res) => {
  User.findOne(req.params.id, (e, user) => {
    if (user) res.send(user);
    if (e && user) res.send(e);
    if (e) res.send(e);
  });
});

router.post('/', async (req, res) => {
  const { email, name, password } = req.body;
  let user = new User({ email, name, password });
  let error = validateUser(req.body);
  const isUnique = await isEmailUnique(email);
  const salt = await bcrypt.genSaltSync(10);

  user.password = await bcrypt.hashSync(user.password, salt);
  if (error.details) return res.status(400).send(error.details[0].message);
  if (!isUnique) return res.status(400).send(`Email: ${email} is not unique`);
  saveUser(user, res);
});

router.put('/:id', (req, res) => {
  const error = validateUser(req.body);
  req.body._id = req.params.id;
  if (error) handle400(error, res);
  updateUser(req.body, res);
});

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, {}, function (err, user) {
    if (err) console.error('ERROR: ', err);
    if (!user) handle404(modelName, req.params.id, res);
    if (user) res.send(user);
  });
});

export default router;
