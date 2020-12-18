import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IPatient } from 'libs/models-health-client/src/lib/patient/IPatient';
import { getPatients } from '@neighborly/health-client/patients/data-access';
import { Patients, Patient } from '@neighborly/health-client/patients/ui';
import { on } from 'process';

export const PatientsFeature = () => {
  const [patients, setPatients] = useState([] as IPatient[]);
  const [selectedPatient, setSelectedPatient] = useState({} as IPatient);

  const onAdd = (patient) => {
    alert(`Added ${patient.name}`);
  };

  const onSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  useEffect(
    () => {
      let mounted = true;
      getPatients()
        .then((response) => {
          console.log('res',response)
          if (mounted) setPatients(response);
          
        })
        .catch((e) => console.log('e', e));
      return () => (mounted = false);
    },
    [
      // This effect runs only once on first component render
      // so we declare it as having no dependent state.
    ]
  );

  return (
    <>
      {selectedPatient.name && (
        <>
          <h4>selected patient</h4>
          <Patient patient={selectedPatient} onSelect={onSelectPatient} onAdd={onAdd} />
        </>
      )}

      <h2>Patients</h2>
      <Patients patients={patients} onSelect={onSelectPatient} onAdd={onAdd} />
    </>
  );
};
export default PatientsFeature;
