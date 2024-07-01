export default function convertTime(time) {
  // The last two characters are AM or PM
  const timeAMPM = time.slice(-2);
  //let newTime;
  if (timeAMPM === 'AM') {
    const newTime = time.slice(0, time.length - 3);
    // if hours is only one character then it needs a 0 at the end
    let timeArray = newTime.split(':');
    if (timeArray[0].length === 1) {
      timeArray[0] = `0${timeArray[0]}`;
    }
    return timeArray.join(':');
  } else {
    const justTime = time.slice(0, time.length - 3);
    // Get just the time
    let timeArr = justTime.split(':');
    // Update the hours
    timeArr[0] = Number(timeArr[0]) + 12;
    return timeArr.join(':');
  }
}
