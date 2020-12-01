import { Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  genreId: string;
  author: string;
  //rating: number;
  price: number;
}
