export default async function getLocation() {
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();
  //console.log(data);
  return {
    latitude: data.latitude,
    longitude: data.longitude,
  };
}
