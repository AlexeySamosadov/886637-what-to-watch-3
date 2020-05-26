import {extend} from "../../components/util/util.js";

const deleateOldKeys = (newFilm) => {
  delete newFilm.poster_image;
  delete newFilm.preview_image;
  delete newFilm.preview_video_link;
  delete newFilm.video_link;
  delete newFilm.starring;
  delete newFilm.director;
  delete newFilm.released;
  delete newFilm.run_time;
  delete newFilm.scores_count;
  delete newFilm.background_image;
  delete newFilm.background_color;
  return newFilm;
};

const addNewKeys = (film) => {
  const newFilm = extend(film, {
    srcPoster: film.poster_image,
    srcVideo: film.video_link,
    srcPreview: film.preview_image,
    srcPreviewVideo: film.preview_video_link,
    actors: film.starring,
    directors: film.director,
    date: film.released,
    duration: film.run_time,
    ratingCount: film.scores_count,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
  });
  return newFilm;
};

export const adaptFilmData = (film) => {
  const newFilm = addNewKeys(film);
  deleateOldKeys(newFilm);
  return newFilm;
};

export const adaptFilmsData = (data) => data.map((film)=> adaptFilmData(film));


