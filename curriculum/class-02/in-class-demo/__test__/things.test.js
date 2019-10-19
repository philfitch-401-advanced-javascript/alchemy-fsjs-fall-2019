const { 
  evaluateDriver, 
  evaluateDrivers, 
  ReallyBadDriverError,
  MissingCityError
} = require('../lib/things');

describe('evaluate drivers', () => {

  it('returns 10 for a Portland drivers', () => {
    const result = evaluateDriver({ city: 'Portland' });
    expect(result).toBe(10);
  });

  it('throws MissingCityError if no city provided', () => {
    expect(() => {
      evaluateDriver();
    }).toThrow(MissingCityError);
  });

  it('throws ReallyBadDriverError if city is in black list like Boston', () => {
    expect(() => {
      evaluateDriver({ city: 'Boston' });
    }).toThrow(ReallyBadDriverError);
  });

  it('returns bad drivers in list', () => {
    const driver1 = { city: 'Portland' };
    const driver2 = { name: 'Trumpet' };
    const driver3 = { city: 'Boston' };

    const badDrivers = evaluateDrivers([driver1, driver2, driver3]);

    expect(badDrivers).toEqual([
      { type: 'missing', name: 'Trumpet' },
      { type: 'really bad', city: 'Boston' },
    ]);

  });
});