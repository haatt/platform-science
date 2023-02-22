import fs from "fs";

async function fileProcessor(fileRoute) {
  return await fs.promises.readFile(
    fileRoute,
    "utf-8",
    (fileError, fileContent) => {
      if (fileError) {
        throw fileError;
      }
      return fileContent;
    }
  );
}

async function processAddress(addressFile) {
  return (await fileProcessor(addressFile))
    .split("\n")
    .filter(driver => driver.length > 0);
}

async function processDrivers(driversFile) {
  return (await fileProcessor(driversFile))
    .split("\n")
    .filter(driver => driver.length > 0);
}

function stretNameLength(addressName) {
  const nameArray = addressName
    .split(",")[0]
    .split(" ");
  
  return `${nameArray[1]} ${nameArray[2]}`.length;
}

function getSuitabilityScore(driversName, addressName) {
  const wobelsLength = (
    driversName.split("").filter(leter => ["a", "e", "i", "o", "u"].includes(leter.toLowerCase()))
  ).length;
  let suitabilityScore;
  const stNameLength = stretNameLength(addressName);
  
  if (stNameLength%2 === 0) {
    suitabilityScore = wobelsLength;
  } else {
    suitabilityScore = (driversName.split("").filter(el => el !== " ").length - wobelsLength);
  }

  if (driversName.length === stNameLength) {
    suitabilityScore += (suitabilityScore * 0.5);
  }

  return suitabilityScore;
}

function findBestDriver(driversArray, address) {
  let bestDriver = { "ss": 0, "name": "" };
        
  driversArray.forEach(driver => {
    if (bestDriver.ss < getSuitabilityScore(driver, address)) {
      bestDriver.name = driver;
      bestDriver.ss = getSuitabilityScore(driver, address);
    }
  });

  return bestDriver;
}

export async function assignRoutes(driversRoute, addressRoute) {
  const driversArray = await processDrivers(driversRoute);
  const addressArray = await processAddress(addressRoute);

  let noBurnedDrivers = [...driversArray];
  let routeAdded = [];

  const routes = addressArray.reduce((routes, address) => {
    routes.push({
      address,
      "driver": null,
      "suitabilityScore": 0
    });
    return routes
  }, []);

  while (noBurnedDrivers.length !== 0) {
    routes.forEach(route => {
      const bestDriver = findBestDriver(noBurnedDrivers, route.address);
      const bRKey = bestDriver.name.replace(" ", "");

      if (route.suitabilityScore === 0 && !routeAdded[bRKey]) {
        route.driver = bestDriver.name;
        route.suitabilityScore = bestDriver.ss;

        routeAdded.push(bRKey);
        noBurnedDrivers.splice(noBurnedDrivers.indexOf(bestDriver.name), 1);
      }
    });
  }

  return routes;
}