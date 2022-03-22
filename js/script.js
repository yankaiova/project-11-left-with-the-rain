'use strict'

let numberOfFilms;
function start(){
    do {
        numberOfFilms = prompt('Сколько фильмов вы уже смотрели?', '');
   } while(isNaN(numberOfFilms) || numberOfFilms === null || !numberOfFilms.length);
}
start();

const personalMovieDB = {
    count:numberOfFilms,
    movies: {
        nameOfMovies:[],
        raitingMovies:[]
    },
    actors: {},
    genres: [],
    privat:false,
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i < 4; i++) {
        do {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i}`, '');
          }while (personalMovieDB.genres[i] == null || !personalMovieDB.genres[i].length || !isNaN(personalMovieDB.genres[i]));
        } 
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
      personalMovieDB.privat = !personalMovieDB.privat;
    },
    showMyDB: function(){
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
              do {
                  personalMovieDB.movies.nameOfMovies[i] = prompt('Один из последних просмотренных фильмов?', '');
              } while (!personalMovieDB.movies.nameOfMovies[i].length || personalMovieDB.movies.nameOfMovies[i].length > 50);
              do {
                  personalMovieDB.movies.raitingMovies[i] = prompt('На сколько оцените его?', '');
              } while (!personalMovieDB.movies.raitingMovies[i].length || isNaN(personalMovieDB.movies.raitingMovies[i]));
       }
    }
};

personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();






