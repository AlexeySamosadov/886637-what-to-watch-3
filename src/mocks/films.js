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

// const EMOJIESLINKS = [
//   `smile.png`,
//   `angry.png`,
//   `puke.png`,
//   `sleeping.png`,
// ];

const COMMENTS = [
  `stupid`,
  `nice`,
  `Я плакал`,
  `Хотел бы быть как главный герой`,
  `Почему он?`,
  `Нереальная концовка`,
  `Фильм хорош, чтобы уснуть`,
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\`'\`s funniest and most exquisitely designed movies in years.`,
  `Anderson\`'\`s films are too precious for some, but for those of us willing to lose ourselves in them, they\`'\`re a delight. \`'\`The Grand Budapest Hotel\`'\` is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  `I didn\`'\`t find it amusing, and while I can appreciate the creativity, it\`'\`s an hour and 40 minutes I wish I could take back.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
];

const COMMENTATOR_NAMES = [
  `Antonio Muir`,
  `Hyan Greever`,
  `Genry Goodykoontz`,
  `Amanda Lickona`,
  `Mark  Fleri-Soler`,
  `Fill Espozito`,
  `Paula Fleri-Soler`,
  `Canning Tattum`,
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

const VIDEO_LINKS = [
  // `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  // `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  `img/GameOfThrones.mkv`,
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
  `Italian English`,
  `Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`,
  `Saoirse Ronan`,
  `Tony Revoloru`,
  `Tilda Swinton`,
  `Tom Wilkinson`,
  `Owen Wilkinson`,
  `Adrien Brody`,
  `Ralph Fiennes`,
  `Jeff Goldblum`
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
    commentTime: getRandomFullDate(),
    commentRating: getRandomRating(1, 10),
  };
};

const createComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateComment);
};

// const RatingDescription = {
//   satisfying: `Satisfying`,
//   normal: `Normal`,
//   well: `Well`,
//   veryGood: `Very good`,
//   mustSee: `Must-see`,
// };

// const getRatingLevel = (rating) => {
//   if (rating < 3) {
//     return RatingDescription.satisfying;
//   } else if (rating < 5) {
//     return RatingDescription.normal;
//   } else if (rating < 7) {
//     return RatingDescription.well;
//   } else if (rating < 9) {
//     return RatingDescription.veryGood;
//   } else if (rating >= 9) {
//     return RatingDescription.mustSee;
//   }
//   return true;
// };

const generateFilmCardData = () => {
  const comments = createComments(getRandomNumber(5, 7));
  const link = getRandomItem(FILMS_LINKS);
  const videoLink = getRandomItem(VIDEO_LINKS);
  const rating = getRandomRating(1, 10);
  return {

    name: getRandomItem(filmNames),
    srcPoster: link,
    srcPreview: link,
    id: String(Math.random() + Math.random()),
    date: getRandomFullDate().getFullYear(),
    genre: getRandomItem(genres),
    rating,
    ratingCount: getRandomNumber(1, 300),
    // ratingLevel: getRatingLevel(rating),
    description: getRandomArray(descriptionFilms, 3).join(` `),
    actors: getRandomArray(ACTORS, ACTORS.length),
    directors: getRandomItem(DIRECTORS),
    srcVideo: videoLink,
    srcPreviewVideo: videoLink,
    comments,
    duration: getRandomNumber(70, 150),


    // posterSource: getRandomItem(posters),


    commentsQuantity: comments.length,
    titleDetails: getRandomItem(nameDetails),
    country: getRandomArray(countries, 3),
    isAddWatch: Math.random() > 0.5,
    isWatched: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
  };
};

const generateFilmCardsData = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilmCardData);
};

export {generateFilmCardData, generateFilmCardsData, genres, getRandomFullDate};
