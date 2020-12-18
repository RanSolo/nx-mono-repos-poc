import { model, Schema } from 'mongoose';
const Joi = require("joi");
import { IMedication } from './IMedication'
const medicationSchema = new Schema({
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

const Medication = model < IMedication.ionSchema);


const validateMedication = (medication: .const schema = Joi.object({
  password: Joi.string().min(5).max(255).required(),
  email: Joi.string().min(5).max(255).required().email(),
  name: Joi.string().min(5).required(),
});
const result = schema.validate(medication);

if (!result.error) result.error = {};
return result.error;
};

export {
  medicationSchema, Medication, .dication,
}
