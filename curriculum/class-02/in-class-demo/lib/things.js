
class ReallyBadDriverError extends Error {
  constructor(city) {
    super(`drivers from ${city} are really bad`);
    this.city = city;
  }
}

class MissingCityError extends Error {
  constructor(name) {
    super(`driver ${name} is missing a city`);
    this.name = name;
  }
}

const evaluateDriver = (driver = {}) => {
  if(!driver.city) {
    throw new MissingCityError(driver.name);
  }
  else if(driver.city === 'Boston') {
    throw new ReallyBadDriverError(driver.city);
  }

  return 10;
};

const evaluateDrivers = (drivers) => {
  const badDrivers = [];

  drivers.forEach(driver => {
    try {
      evaluateDriver(driver);
    }
    catch(err) {
      if(err instanceof ReallyBadDriverError) {
        badDrivers.push({ type: 'really bad', city: driver.city });
      }
      else if(err instanceof MissingCityError) {
        badDrivers.push({ type: 'missing', name: driver.name });
      }
    }
  });

  return badDrivers;
  
  // if(badDrivers.length) {
  //   throw /*an error */
  // }
  // return /*something else*;
};

module.exports = {
  evaluateDriver,
  evaluateDrivers,
  ReallyBadDriverError,
  MissingCityError
};