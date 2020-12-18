import { render } from '@testing-library/react';
import React from 'react';
import { getPatients } from '@neighborly/health-client/patients/data-access';
import { Patients, PatientsProps } from './patients';
//import {PatientProps } from './patient';
let patients: any[];

beforeEach(async () => {
  patients = await getPatients();
});

describe('Patients', () => {
  console.log('patients', patients);
  it('should render successfully', () => {
    const { baseElement } = render(
      <Patients
        patients={patients}
        onAdd={(patient) => alert(`${patient} added`)}
        onSelect={(patient) => alert(`${patient} added`)}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});

