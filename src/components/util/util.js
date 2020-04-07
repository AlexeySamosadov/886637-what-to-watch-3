import {genreType} from "../const/const";

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

const changeFirstLetterUppercase = (word) => word[0].toUpperCase() + word.slice(1);

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

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const filterFilms = (data, genres) => {
  console.log(`genres`, genres);
  let films = data;
  if (genres !== genreType.ALL) {
    films = data.filter((it)=>it.genre === genres);
  }
  return films;
};

const sliceArray = (array) => {
  let size = 3;
  let newArray = [];
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    newArray[i] = array.slice((i * size), (i * size) + size);
  }
  return newArray;
};

export {getRandomNumber, filterFilms, extend, getRandomArray, getRandomItem, transformDate, sliceArray, formatMovieDuration, changeFirstLetterUppercase, TRANSFORM_TYPES};


