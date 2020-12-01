import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fafafa;
  border-radius: 4px;
  &:hover {
    background-color: #80a8e2;
    border-color: #0e2147;
  }
`;
describe('Books', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyledButton />);
    expect(baseElement).toBeTruthy();
  });
});
