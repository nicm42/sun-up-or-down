export default async function getSunTimes(latitude, longitude) {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
  );
  const data = await response.json();
  //console.log(data);
  return {
    sunrise: data.results.sunrise,
    sunset: data.results.sunset,
    twilight_start: data.results.nautical_twilight_begin,
    twilight_end: data.results.nautical_twilight_end,
  };
}
