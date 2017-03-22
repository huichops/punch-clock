const textToTime = (text = '') => {
  const [hours, minutes] = text.split(':');

  if (!hours.length || !minutes.length) return null;
  return {hours: Number(hours), minutes: Number(minutes), text};
};

const numberPadding = (number, pad = 2) => {
  const stringNumber = number.toString();
  if (stringNumber.length < pad) return `0${stringNumber}`;
  return stringNumber;
};

const subtractTime = (exitTime, entranceTime) => {
  const defaultTime = '00:00';
  const entrance = textToTime(entranceTime);
  const exit = textToTime(exitTime);

  if (!entrance || !exit) return defaultTime;

  const entranceMinutes = entrance.hours * 60 + entrance.minutes;
  const exitMinutes = exit.hours * 60 + exit.minutes;
  const totalMinutes = exitMinutes - entranceMinutes;

  if (totalMinutes < 0) return defaultTime;

  return `${numberPadding(Math.floor(totalMinutes / 60))}:${numberPadding(totalMinutes % 60)}`;
};

const sumTime = (exitTime, entranceTime) => {
  const entrance = textToTime(entranceTime);
  const exit = textToTime(exitTime);

  const entranceMinutes = entrance.hours * 60 + entrance.minutes;
  const exitMinutes = exit.hours * 60 + exit.minutes;
  const totalMinutes = exitMinutes + entranceMinutes;

  return `${numberPadding(Math.floor(totalMinutes / 60))}:${numberPadding(totalMinutes % 60)}`;
};

export {
  subtractTime,
  sumTime
}
