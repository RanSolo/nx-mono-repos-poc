import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

export interface IPatient extends Document {
  _id: any;
  name: string;
  medications: any;
  ailments: any;
}
