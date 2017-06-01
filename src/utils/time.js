const textToTime = (text = '') => {
  if (!text.length) return { hours: 0, minutes: 0 };
  const [hours, minutes] = text.split(':');

  if (!hours.length || !minutes.length) return null;
  return { hours: Number(hours), minutes: Number(minutes), text };
};

const numberPadding = (number, pad = 2) => {
  const stringNumber = number.toString();
  if (stringNumber.length < pad) return `0${stringNumber}`;
  return stringNumber;
};

const timeToText = (minutes) => {
  return `${numberPadding(Math.floor(minutes / 60))}:${numberPadding(minutes % 60)}`
};

export { timeToText, textToTime, numberPadding };
