import React from 'react';
import { render } from '@testing-library/react';

import AilmentsFeature from './ailments-feature';

describe('AilmentsFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AilmentsFeature />);
    expect(baseElement).toBeTruthy();
  });
});
