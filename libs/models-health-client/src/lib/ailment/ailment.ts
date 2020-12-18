const Joi = require('joi');
import { model, Schema } from 'mongoose';
import { IAilment } from 'libs/models-health-client/src/lib/ailment/IAilment'

const ailmentSchema = new Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50,
  },
});

function validateAilment(ailment: IAilment) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50),
  });
  return schema.validate(ailment);
}

const Ailment = model<IAilment>('Ailment', ailmentSchema);

export { ailmentSchema, Ailment, validateAilment }
