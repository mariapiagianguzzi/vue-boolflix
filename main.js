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

let app = new Vue({
  el: "#app",
  data: {
    filmTv: [], //contenitore dove devo mettere le informazioni
    serieTv: [],
    search: "",
    flag: [
      "ar",
      "au",
      "be",
      "br",
      "ca",
      "ch",
      "cl",
      "cn",
      "co",
      "cz",
      "de",
      "dk",
      "eg",
      "en",
      "es",
      "eu",
      "fi",
      "fr",
      "gr",
      "hk",
      "id",
      "ie",
      "il",
      "in",
      "it",
      "jp",
      "kr",
      "ma",
      "mx",
      "nl",
      "no",
      "pe",
      "ph",
      "pl",
      "pt",
      "ru",
      "sa",
      "se",
      "sg",
      "th",
      "tr",
      "tw",
      "ua",
      "us",
      "ve",
      "vn",
      "za",
    ],
  },
  methods: {
    searchFilm() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=bf45f2aa9f37b275b9bc666d1480d632&language=it-IT&query=${this.search}`
        ) //le informazioni le prendo in questo link che è un API ci permette di manipolare le informazioni
        .then((response) => {
          this.filmTv = response.data.results;
          this.search = "";

          this.filmTv.forEach((element) => {
            let score = Math.ceil(element.vote_average / 2);
            element.vote_average = score;
          });
        });
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=bf45f2aa9f37b275b9bc666d1480d632&language=it-IT&query=${this.search}`
        )
        .then((response) => {
          // è il mio contenitore che contiene response.data.results più precisamente il percorso dove io voglio andare a prendere le informazioni
          this.serieTv = response.data.results;
          this.search = "";

          this.serieTv.forEach((element) => {
            let score = Math.ceil(element.vote_average / 2);
            element.vote_average = score;
            /* if (element.original_language == "en") {
              element.original_language = "gb";
            } else if (element.original_language == "zh") {
              element.original_language = "cn";
            } else if (element.original_language == "ko") {
              element.original_language = "kr";
            } else if (element.original_language == "vi") {
              element.original_language = "vn";
            } else if (element.original_language == "hu" || "et") {
              element.original_language = "eu";
            } else if (element.original_language == "ja") {
              element.original_language = "jp";
            } else if (element.original_language == "da") {
              element.original_language = "dk";
            } */
          });
        });
    },
  },
  mounted() {
    this.search = "a";
    this.searchFilm();
  },
});
