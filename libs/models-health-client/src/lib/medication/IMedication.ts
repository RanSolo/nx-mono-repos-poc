import { Document } from 'mongoose';

export interface IMedication extends Document {
  _id: any;
  name: string;
}
