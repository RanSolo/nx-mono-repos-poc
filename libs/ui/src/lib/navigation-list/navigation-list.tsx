import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavigationListProps {}

const StyledNavigationList = styled.div`
  color: pink;
`;

export function NavigationList(props: NavigationListProps) {
  return (
    <StyledNavigationList>
      <h1>Welcome to NavigationList!</h1>
    </StyledNavigationList>
  );
}

export default NavigationList;
