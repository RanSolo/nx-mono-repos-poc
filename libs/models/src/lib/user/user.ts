import { model, Schema } from 'mongoose';
const Joi = require("joi");
import { IUser } from 'libs/models/src/lib/user/IUser'
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
})

const User = model<IUser>('User', userSchema);


const validateUser = (user: IUser) => {
  const schema = Joi.object({
    password: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    name: Joi.string().min(5).required(),
  });
  const result = schema.validate(user);

  if (!result.error) result.error = {};
  return result.error;
};

export {
  userSchema, User, validateUser,
}
