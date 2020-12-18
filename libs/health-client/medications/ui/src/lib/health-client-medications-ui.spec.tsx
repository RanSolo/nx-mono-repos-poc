import React from 'react';
import { render } from '@testing-library/react';

import HealthClientMedicationsUi from './health-client-medications-ui';

describe('HealthClientMedicationsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HealthClientMedicationsUi />);
    expect(baseElement).toBeTruthy();
  });
});
