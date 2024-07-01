import convertTime from './convertTime';

export default function findSunStatus(sunrise, sunset) {
  // sunrise and sunset times are in UTC.
  // new Date() will get the time in UTC
  const today = new Date();
  //const today = new Date('2004-07-01T12:24:00'); // sun should be up
  //const today = new Date('2004-07-01T23:24:00'); // sun should be down
  // Get just the time
  const [hour, minutes, seconds] = [
    today.getUTCHours(),
    today.getUTCMinutes(),
    today.getUTCSeconds(),
  ];
  const currentTime = `${hour}:${minutes}:${seconds}`;

  // Also sunrise and sunset times are in 12 hour clock
  // but the current time is in 24 hour clock
  // so we need to convert sunrise and sunset to 24 hour clock
  // and then convert them to a date object to compare with today's date and time
  const sunriseTime = convertTime(sunrise);
  const sunsetTime = convertTime(sunset);

  if (currentTime >= sunriseTime && currentTime <= sunsetTime) {
    console.log('Sun is up');
  } else {
    console.log('Sun is down');
  }
}
