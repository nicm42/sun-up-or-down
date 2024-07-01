import './style.css';
import getLocation from './getLocation';
import getSunTimes from './getSunTimes';
import findSunStatus from './findSunStatus';

async function main() {
  const { latitude, longitude } = await getLocation();
  //console.log(latitude, longitude);
  const { sunrise, sunset, twilight_start, twilight_end } = await getSunTimes(
    latitude,
    longitude
  );
  //console.log(sunrise, sunset);
  findSunStatus(sunrise, sunset, twilight_start, twilight_end);
}

main();
