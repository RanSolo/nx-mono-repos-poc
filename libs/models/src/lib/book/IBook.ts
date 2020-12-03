import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  genreId: ObjectId;
  author: string;
  //rating: number;
  price: number;
}
