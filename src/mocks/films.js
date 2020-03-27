import {getRandomNumber, getRandomArray, getRandomItem} from "../components/util/util";

const filmNames = [
  `Полет над гнездом кукушки`,
  `Гайвер`,
  `Назад в будущее`,
  `От заката до рассвета`,
  `Бэтмен`,
  `Мстители`,
  `Хитмен`,
  `Хенкок`,
  `Алладин`,
  `Матрица`,
  `Шрек`,
  `Тимон и Пумба`,
  `Угнать за 60 секунд`,
  `Терминатор`,
  `Американский пирог 2`,
];

const nameDetails = [
  `Интересноая комедия`,
  `Космическая Сага`,
  `Романтическая история ужасов`,
  `Фильм о хороших буднях`,
  `Фильм для воспитания терористов`,
];

const descriptionFilms = [
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

// const posters = [
//   `made-for-each-other.png`,
//   `popeye-meets-sinbad.png`,
//   `sagebrush-trail.jpg`,
//   `santa-claus-conquers-the-martians.jpg`,
//   `the-dance-of-life.jpg`,
//   `the-great-flamarion.jpg`,
//   `the-man-with-the-golden-arm.jpg`,
// ];

const countries = [
  `Russia`,
  `Inida`,
  `China`,
  `France`,
  `Italy`,
  `Germany`,
  `Tynise`,
  `Turkey`,
  `Great Britain`,
  `Argentina`,
  `Brazilia`,
];

const genres = [
  `history`,
  `feature film`,
  `short film`,
  `action`,
  `adventure`,
  `comedy`,
  `drama`,
  `crime`,
  `horror`,
  `fantasy`,
  `romance`,
  `thriller`,
  `animation`,
  `family`,
  `war`,
  `documentary`,
  `musical`,
  `biography`,
  `sci-fi`,
  `western`,
  `post-apocalyptic`,
];

const EMOJIESLINKS = [
  `smile.png`,
  `angry.png`,
  `puke.png`,
  `sleeping.png`,
];

const COMMENTS = [
  `stupid`,
  `nice`,
  `Я плакал`,
  `Хотел бы быть как главный герой`,
  `Почему он?`,
  `Нереальная концовка`,
  `Фильм хорош, чтобы уснуть`,
];

const COMMENTATOR_NAMES = [
  `Antonio`,
  `Hyan`,
  `Genry`,
  `Sergey Talizin`,
  `Mark`,
  `Fill`,
  `Chipolino`
];

const FILMS_LINKS = [
  `bohemian-rhapsody.jpg`,
  `macbeth.jpg`,
  `aviator.jpg`,
  `we-need-to-talk-about-kevin.jpg`,
  `what-we-do-in-the-shadows.jpg`,
  `revenant.jpg`,
  `johnny-english.jpg`,
  `shutter-island.jpg`,
  `pulp-fiction.jpg`,
  `no-country-for-old-men.jpg`,
  `moonrise-kingdom.jpg`,
  `seven-years-in-tibet.jpg`,
  `dardjeeling-limited.jpg`,
  `orlando.jpg`,
  `mindhunter.jpg`,
  `midnight-special.jpg`,
];

const DIRECTORS = [
  `Arnold Vicci`,
  `Van gog`,
  `Charli Chaplin`,
  `German French`,
  `Italian English`
];

const ACTORS = [
  `Toni Hawk`,
  `Arnold Vicci`,
  `Van gog`,
  `Charli Chaplin`,
  `German French`,
  `Italian English`
];

const getRandomRating = (minNumber, maxNumber) => {
  return (Math.random() * (maxNumber - minNumber) + minNumber).toFixed(2);
};

const getRandomFullDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  targetDate.setMinutes(targetDate.getMinutes() + sign * getRandomNumber(0, 9999999));
  return targetDate;
};

const generateComment = () => {
  return {
    commentId: `id` + String(getRandomNumber(1, 99999999)),
    commentText: getRandomItem(COMMENTS),
    commentatorName: getRandomItem(COMMENTATOR_NAMES),
    emojiLink: getRandomItem(EMOJIESLINKS),
    commentTime: getRandomFullDate(),
  };
};

const createComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateComment);
};

const RatingDescription = {
  satisfying: `Satisfying`,
  normal: `Normal`,
  well: `Well`,
  veryGood: `Very good`,
  mustSee: `Must-see`,
};

const getRatingLevel = (rating) => {
  if (rating < 3) {
    return RatingDescription.satisfying;
  } else if (rating < 5) {
    return RatingDescription.normal;
  } else if (rating < 7) {
    return RatingDescription.well;
  } else if (rating < 9) {
    return RatingDescription.veryGood;
  } else if (rating >= 9) {
    return RatingDescription.mustSee;
  }
  return true;
};

const generateFilmCardData = () => {
  const comments = createComments(getRandomNumber(1, 10));
  const link = getRandomItem(FILMS_LINKS);
  const rating = getRandomRating(1, 10);
  return {

    name: getRandomItem(filmNames),
    src: link,
    srcPoster: link,
    id: String(Math.random() + Math.random()),
    date: getRandomFullDate().getFullYear(),
    genre: getRandomItem(genres),
    rating,
    ratingCount: getRandomNumber(1, 300),
    ratingLevel: getRatingLevel(rating),
    description: getRandomArray(descriptionFilms, 3).join(` `),
    actors: getRandomArray(ACTORS, ACTORS.length),
    directors: getRandomItem(DIRECTORS),
    // posterSource: getRandomItem(posters),

    duration: getRandomNumber(70, 150),
    commentsQuantity: comments.length,
    titleDetails: getRandomItem(nameDetails),
    country: getRandomArray(countries, 3),
    isAddWatch: Math.random() > 0.5,
    isWatched: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    comments,
  };
};

const generateFilmCardsData = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilmCardData);
};

export {generateFilmCardData, generateFilmCardsData, genres, getRandomFullDate, RATING_DESCRIPTION};
