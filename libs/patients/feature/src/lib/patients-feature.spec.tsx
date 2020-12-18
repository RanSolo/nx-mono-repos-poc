import React from 'react';
import { render } from '@testing-library/react';

import PatientsFeature from './patients-feature';

describe('PatientsFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PatientsFeature />);
    expect(baseElement).toBeTruthy();
  });
});
