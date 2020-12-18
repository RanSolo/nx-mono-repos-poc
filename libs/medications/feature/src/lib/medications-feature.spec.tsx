import React from 'react';
import { render } from '@testing-library/react';

import MedicationsFeature from './medications-feature';

describe('MedicationsFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MedicationsFeature />);
    expect(baseElement).toBeTruthy();
  });
});
