import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HealthClientAilmentsUiProps {}

const StyledHealthClientAilmentsUi = styled.div`
  color: pink;
`;

export function HealthClientAilmentsUi(props: HealthClientAilmentsUiProps) {
  return (
    <StyledHealthClientAilmentsUi>
      <h1>Welcome to health-client-ailments-ui!</h1>
    </StyledHealthClientAilmentsUi>
  );
}

export default HealthClientAilmentsUi;
