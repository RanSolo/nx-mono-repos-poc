import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AilmentsFeatureProps {}

const StyledAilmentsFeature = styled.div`
  color: pink;
`;

export function AilmentsFeature(props: AilmentsFeatureProps) {
  return (
    <StyledAilmentsFeature>
      <h1>Welcome to ailments-feature!</h1>
    </StyledAilmentsFeature>
  );
}

export default AilmentsFeature;
