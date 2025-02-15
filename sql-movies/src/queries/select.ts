import { 
  ACTORS,
  KEYWORDS,
  DIRECTORS,
  GENRES,
  PRODUCTION_COMPANIES,
  MOVIES
} from "../table-names";

export const selectActorByName = (fullName: string): string => {  
  return `select id, full_name from actors where full_name = 'fullName'`; 
};

export const selectKeyword = (keyword: string): string => {
  return `SELECT keyword FROM KEYWORDS`;
};

export const selectDirector = (director: string): string => {
  return `SELECT director FROM DIRECTORS`;
};

export const selectGenre = (genre: string): string => {
  return `SELECT genre FROM GENRES`;
};

export const selectProductionCompany = (company: string): string => {
  return `SELECT company FROM PRODUCTION_COMPANIES`;
};

export const selectMovieById = (id: number): string => {
  return `SELECT id FROM MOVIES`;
};

export const selectGenreById = (id: number): string => {
  return `SELECT genre FROM MOVIES WHERE id like 'id'`;
};

export const selectDirectorById = (id: number): string => {
  return `SELECT director FROM MOVIES WHERE id like 'id'`;
};

export const selectActorById = (id: number): string => {
  return `SELECT id FROM actors WHERE id like 'id'`;
};

export const selectKeywordById = (id: number): string => {
  return `SELECT keyword FROM MOVIES WHERE id like 'id'`;
};

export const selectProductionCompanyById = (id: number): string => {
  return `SELECT company FROM MOVIES WHERE id like 'id'`;
};

export const selectMovie = (imdbId: string): string => {
  return `SELECT original_title FROM MOVIES WHERE imdb_id like 'imdbId'`;
};

export const selectMovieId = (imdbId: string): string => {
  return `SELECT movie_id FROM MOVIES WHERE imdb_id like 'imdbId'`;
};

export const selectRatingsByUserID = (userId: number): string => {
  return `SELECT rating AS 'real' FROM MOVIES WHERE user_id like 'userId'`;
};

export const selectGenresByMovieId = (movieId: number): string => {
  return `select g.genre from movie_genres mg join genres g on g.id = mg.genre_id where mg.movie_id = ${movieId}`;
};

export const selectActorsByMovieId = (movieId: number): string => {
  return `select a.full_name from movie_actors ma join actors a on a.id = ma.actor_id where ma.movie_id = ${movieId}`;
};

export const selectDirectorsByMovieId = (movieId: number): string => {
  return `select d.full_name from movie_directors md join directors d on d.id = md.director_id where md.movie_id = ${movieId}`;
};

export const selectKeywordsByMovieId = (movieId: number): string => {
  return `select k.keyword from movie_keywords mk join keywords k on k.id = mk.keyword_id where mk.movie_id = ${movieId}`;
};

export const selectProductionCompaniesByMovieId = (movieId: number): string => {
  return `select pc.company_name from movie_production_companies mpc join production_companies pc on pc.id = mpc.company_id where mpc.movie_id = ${movieId}`;
};

/**
 * select count as c, because an object is returned and expected property name is c
 */
export const selectCount = (table: string): string => {
  return `SELECT count(*) AS 'c' FROM actors`;
};
