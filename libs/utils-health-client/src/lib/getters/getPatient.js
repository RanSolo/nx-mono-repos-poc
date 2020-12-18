import { Patient } from '@neighborly/models-health-client';
import { handle404 } from '@neighborly/utils/errorHandlers/handle404';

const getPatient = (patientId, res) => {
  return Patient.findById(patientId, async function (error, patient) {
    if (!patient) handle404('patient', patientId, res);

    if (patient.numberInStock === 0)
      return res.status(400).send(`${patient} Not In Stock `);
  });
};

const _getPatient = getPatient;
export { _getPatient as getPatient };
