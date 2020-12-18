import React from 'react';
import styled from 'styled-components';
import { Button } from '@neighborly/ui';
import { IPatient } from 'libs/models-health-client/src/lib/patient/IPatient';

export interface PatientProps {
  patient: IPatient;
  // New prop
  onAdd: (patient: any) => void;
  onSelect: (patient: any) => void;
}

const StyledPatient = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  > span {
    padding: 1rem 0.5rem;
    margin-right: 0.5rem;
  }
  .name {
    flex: 1;
  }
  .rating {
    color: #999;
  }
  .ailment {
    color: #478d3c;
  }
`;

export const Patient = ({ patient, onAdd, onSelect }: PatientProps) => {
  return (
    <StyledPatient key={patient._id}  className={patient.name} onClick={() => onSelect(patient)}>
      <span className="name">
        {patient.name}
      </span>
      <span>
        {patient.ailments.map((ailment: any) => {
        <h5 className="ailment">{ailment.name}</h5>
      })}</span>
      {/* Add button to UI */}
      <span>
        <Button id={`add-patient-${patient.name}`} onClick={() => onAdd(patient)}>
          Add patient
        </Button>
      </span>
    </StyledPatient>
  );
};

export default Patient;
