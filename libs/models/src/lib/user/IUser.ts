import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: any;
  email: string;
  password: string;
  name: string;
}
