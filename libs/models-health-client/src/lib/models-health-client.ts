import { Patient, validatePatient, patientSchema } from './patient/patient';
import { Ailment, validateAilment, ailmentSchema } from './ailment/ailment';
import { Medication, validateMedication, medicationSchema } from './medication/medication';

export {
  // Ailment Stuff
  Ailment,         // Mongoose Model
  ailmentSchema,   // Mongoose schema
  validateAilment, // Joi validations
  // Patient Stuff
  Patient,         // Mongoose Model
  patientSchema,   // Mongoose schema
  validatePatient, // Joi validations
  // Medication Stuff
  Medication,         // Mongoose Model
  medicationSchema,   // Mongoose schema
  validateMedication  // Joi validations
}
