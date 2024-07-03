import convertTime from './convertTime';

export default function findSunStatus(
  sunrise,
  sunset,
  twilight_start,
  twilight_end
) {
  // sunrise and sunset times are in UTC.
  // new Date() will get the time in UTC
  const today = new Date();
  //const today = new Date('2004-07-01T12:24:00'); // sun should be up and light
  //const today = new Date('2004-07-01T23:24:00'); // sun should be down and dark
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
  const twilightStartTime = convertTime(twilight_start);
  const twilightEndTime = convertTime(twilight_end);

  const html = document.documentElement;
  const answer = document.querySelector('.answer');
  const darkness = document.querySelector('.darkness');

  if (currentTime >= sunriseTime && currentTime <= sunsetTime) {
    answer.innerText = 'Sun is up';
    html.classList.add('up');
  } else {
    answer.innerText = 'Sun is down';
    html.classList.add('down');
  }

  if (currentTime >= twilightStartTime && currentTime <= twilightEndTime) {
    darkness.innerText = "It's light";
    html.classList.add('light');
  } else {
    darkness.innerText = "It's dark";
    html.classList.add('dark');
  }
}
