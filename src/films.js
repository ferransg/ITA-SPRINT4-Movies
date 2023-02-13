// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result = movies.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const result2 = movies.filter(element => element.director === director);
  console.log("EXERCICE 2 ->", result2);
  return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {

  const arrMoviesDirector = getMoviesFromDirector(movies, director);                  // Devuelve array de películas de un director
  const arrScores = arrMoviesDirector.map(element => element.score);                  // Devuelve array de sus puntuaciones
  const arrSumTotal = arrScores.reduce((acc, currentValue) => acc + currentValue);    // Devuelve la suma de todas las puntuaciones
  const result3 = Math.round((arrSumTotal / arrMoviesDirector.length) * 100) / 100;   // Devuelve puntuación media con 2 decimales (toFixed(2) devolvería string)

  console.log("EXERCICE 3 ->", result3);
  return result3;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

  const moviesTitle = movies.map(elem => elem.title);
  const result4 = moviesTitle.sort().slice(0, 20);

  console.log("EXERCICE 4 ->", result4);
  return result4;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  const titleYearMovies = movies.map(element => {               // .map() genera un nuevo array, sort() lo modifica
    return { title: element.title, year: element.year };
  });

  const result5 = titleYearMovies.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }                                                           // Si tienen mismo año (a.year === b.year) se ordena por title
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  console.log("EXERCICE 5 ->", result5);
  return result5;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {

  const genreMovies = movies.filter(elem => elem.genre.includes(genre));
  const scoresGenreMovies = genreMovies.map(element => element.score);
  const wOutScoreMovies = scoresGenreMovies.filter(element => element === "" || null);                    // Filtra movies sin puntuación
  const arrSumTotal = scoresGenreMovies.reduce((acc, currentValue) => Number(acc) + currentValue);        // Number() evita devolver string si hay movies sin puntuación
  const result6 = Math.round((arrSumTotal / (genreMovies.length - wOutScoreMovies.length) * 100)) / 100;

  console.log("EXERCICE 6 ->", result6);
  return result6;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  const arrHoursToMin = movies.map(element => Number(element.duration[0] * 60));   // Horas del string duration a minutos, devuelve number

  const REGEX_MIN = /[0-9]{1,}h\s([0-9]{1,})min/;
  const arrMinToMin = movies.map(elem => REGEX_MIN.exec(elem.duration));           // Minutos del string duration a minutos, devuelve number

  const sumTotalMins = arrHoursToMin.map((elem, i) => {
    if (arrMinToMin[i] === null) {
      return elem;
    };
    return elem + Number(arrMinToMin[i][1]);
  });

  const result7 = movies.map((el, i) => {
    return {
      title: el.title,
      year: el.year,
      director: el.director,
      duration: el.duration = sumTotalMins[i],
      genre: el.genre,
      // score: el.score                         
    };
  });

  console.log("EXERCICE 7 ->", result7);
  return result7;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
