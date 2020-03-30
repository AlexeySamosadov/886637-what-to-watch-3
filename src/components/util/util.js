const getRandomNumber = function (minNumber, maxNumber) {
  return arguments.length === 2 ? Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber) : Math.round(Math.random() * minNumber);
};

const getRandomArray = (array, maxLength) => {
  const maxTimes = getRandomNumber(1, maxLength);
  let newArray = [];
  for (let i = 0; i < maxTimes; i++) {
    newArray.push(array[getRandomNumber(0, array.length - 1)]);
  }
  return newArray;
};

const getRandomItem = (array) => {
  const index = getRandomNumber(0, array.length - 1);
  return array[index];
};

const TRANSFORM_TYPES = {
  TO_COMMENT_DATE: `TO_COMMENT_DATE`,
  TO_COMMENT_ATTRIBUTE: `TO_COMMENT_ATTRIBUTE`,
};

const MONTH_BY_NUMBERS = {
  '1': `January`,
  '2': `February`,
  '3': `March`,
  '4': `April`,
  '5': `May`,
  '6': `June`,
  '7': `July`,
  '8': `August`,
  '9': `September`,
  '10': `October`,
  '11': `November`,
  '12': `December`,
};

const addZero = (number) => number < 10 ? `0${number}` : `${number}`;
const getMonthByString = (monthNumber) => {
  return MONTH_BY_NUMBERS[monthNumber];
};

const formatMovieDuration = (movieDuration) => {
  return `${(movieDuration / 60).toFixed(0)}h ${movieDuration % 60}min`;
};

const transformDate = (fullDate, transformType) => {
  const month = (fullDate.getMonth() + 1).toString();
  const monthByString = getMonthByString(month);

  switch (transformType) {
    case TRANSFORM_TYPES.TO_COMMENT_ATTRIBUTE:
      return `${fullDate.getFullYear()}-${addZero(month)}-${addZero(fullDate.getDate())}`;
    case TRANSFORM_TYPES.TO_COMMENT_DATE:
      return `${monthByString} ${addZero(fullDate.getDate())}, ${fullDate.getFullYear()}`;
  }
  return true;
};

export {getRandomNumber, getRandomArray, getRandomItem, transformDate, formatMovieDuration, TRANSFORM_TYPES};


