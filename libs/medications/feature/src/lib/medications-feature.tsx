import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MedicationsFeatureProps {}

const StyledMedicationsFeature = styled.div`
  color: pink;
`;

export function MedicationsFeature(props: MedicationsFeatureProps) {
  return (
    <StyledMedicationsFeature>
      <h1>Welcome to medications-feature!</h1>
    </StyledMedicationsFeature>
  );
}

export default MedicationsFeature;
