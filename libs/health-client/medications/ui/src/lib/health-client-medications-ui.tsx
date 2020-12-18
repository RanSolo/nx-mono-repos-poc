import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HealthClientMedicationsUiProps {}

const StyledHealthClientMedicationsUi = styled.div`
  color: pink;
`;

export function HealthClientMedicationsUi(
  props: HealthClientMedicationsUiProps
) {
  return (
    <StyledHealthClientMedicationsUi>
      <h1>Welcome to health-client-medications-ui!</h1>
    </StyledHealthClientMedicationsUi>
  );
}

export default HealthClientMedicationsUi;
