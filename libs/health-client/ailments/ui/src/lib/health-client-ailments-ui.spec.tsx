import React from 'react';
import { render } from '@testing-library/react';

import HealthClientAilmentsUi from './health-client-ailments-ui';

describe('HealthClientAilmentsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HealthClientAilmentsUi />);
    expect(baseElement).toBeTruthy();
  });
});
