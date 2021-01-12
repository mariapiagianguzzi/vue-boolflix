/* Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo
scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
film trovato:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto bf45f2aa9f37b275b9bc666d1480d632 */

$(document).ready(function () {
  let app = new Vue({
    el: "#app",
    data: {
      filmTv: [], //contenitore dove devo mettere le informazioni
      search: "",
    },
    methods: {
      searchFilm(search) {
        axios
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=bf45f2aa9f37b275b9bc666d1480d632&language=en-US&query=" +
              search
          ) //le informazioni le prendo in questo link che è un API ci permette di manipolare le informazioni
          .then((response) => {
            let tv = response.data.results; // è il mio contenitore che contiene response.data.results più precisamente il percorso dove io voglio andare a prendere le informazioni
            this.filmTv = tv;
            this.filmTv.forEach((element) => {
              let score = Math.ceil(element.vote_average / 2);
              element.vote_average = score;
            });
          });
      },
    },
  });
});
