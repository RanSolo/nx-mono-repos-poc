import { Document } from 'mongoose';

export interface IGenre extends Document {
  _id: any;
  name: string;
}
