import React from 'react';
import styled from 'styled-components';
import { Patient } from './patient';
import { IPatient } from 'libs/models-health-client/src/lib/patient/IPatient';

export interface PatientsProps {
  patients: IPatient[];
  onAdd: (patient: IPatient) => void;
  onSelect: (patient: IPatient) => void;
}

const StyledPatients = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Patients = ({ patients, onAdd, onSelect }: PatientsProps) => {
  return (
    <StyledPatients>
      {patients?.map((patient) => (
        // Pass down new callback prop
        <Patient key={patient.name} patient={patient} onSelect={onSelect} onAdd={onAdd} />
      ))}
    </StyledPatients>
  );
};

export default Patients;
