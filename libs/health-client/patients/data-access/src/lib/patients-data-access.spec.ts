import { healthClientPatientsDataAccess } from './health-client-patients-data-access';

describe('healthClientPatientsDataAccess', () => {
  it('should work', () => {
    expect(healthClientPatientsDataAccess()).toEqual(
      'health-client-patients-data-access'
    );
  });
});
