const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

export default function () {
  const db = config.get('db');
  mongoose
    .connect(db)
    .then((s) => console.log(`Connected to ${db}...`))
    .catch((e) => console.error('could not connect', e));
}
