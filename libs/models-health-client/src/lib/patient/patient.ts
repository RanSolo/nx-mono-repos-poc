import { model, Schema, } from 'mongoose';
const Joi = require('joi');

import { ailmentSchema } from '../ailment/ailment';
import { medicationSchema } from '../medication/medication';
import { IPatient } from './IPatient';

const patientSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255
  },
  ailment: {
    type: ailmentSchema,
  },
  medication: {
    type: medicationSchema,
  },
  price: Number
});

function validatePatient(patient: IPatient) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    ailments: Joi.Array(),
    medications: Joi.Array(),
  })
  const validated = schema.validate(patient)
  console.log('val', validated.value);

  return schema.validate(patient);
}

const Patient = model<IPatient>('Patient', patientSchema);

export {
  Patient, patientSchema, validatePatient
}
