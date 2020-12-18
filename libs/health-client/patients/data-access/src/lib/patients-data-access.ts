import { IPatient } from 'libs/models-health-client/src/lib/patient/IPatient';
const fetch = require('node-fetch');

const url = "https://localhost:5001/api/Patients"

export async function getPatients(): Promise<IPatient[]> {
  return await fetch(url, {
    mode: 'cors',
    method: "GET",
    headers: {
      Accept: 'application/json',
    }
  })
    .then((res: any) => res.json()).then(res => {
      return res
    })
    .catch((e: any) => console.log('Response blocked by browser', e));
}