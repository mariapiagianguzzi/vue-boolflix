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
      "ab",
      "aa",
      "af",
      "ak",
      "sq",
      "am",
      "ar",
      "an",
      "hy",
      "as",
      "av",
      "ae",
      "ay",
      "az",
      "bm",
      "ba",
      "eu",
      "be",
      "bn",
      "bh",
      "bi",
      "bs",
      "br",
      "bg",
      "my",
      "ca",
      "km",
      "ch",
      "ce",
      "ny",
      "zh",
      "cu",
      "cv",
      "kw",
      "co",
      "cr",
      "hr",
      "cs",
      "da",
      "dv",
      "nl",
      "dz",
      "en",
      "eo",
      "et",
      "ee",
      "fo",
      "fj",
      "fi",
      "fr",
      "ff",
      "gd",
      "gl",
      "lg",
      "ka",
      "de",
      "ki",
      "el",
      "kl",
      "gn",
      "gu",
      "ht",
      "ha",
      "he",
      "hz",
      "hi",
      "ho",
      "hu",
      "is",
      "io",
      "ig",
      "id",
      "ia",
      "ie",
      "iu",
      "ik",
      "ga",
      "it",
      "ja",
      "jv",
      "kn",
      "kr",
      "ks",
      "kk",
      "rw",
      "kv",
      "kg",
      "ko",
      "kj",
      "ku",
      "ky",
      "lo",
      "la",
      "lv",
      "lb",
      "li",
      "ln",
      "lt",
      "lu",
      "mk",
      "mg",
      "ms",
      "ml",
      "mt",
      "gv",
      "mi",
      "mr",
      "mh",
      "ro",
      "mn",
      "na",
      "nv",
      "nd",
      "ng",
      "ne",
      "se",
      "no",
      "nb",
      "nn",
      "ii",
      "oc",
      "oj",
      "or",
      "om",
      "os",
      "pi",
      "pa",
      "ps",
      "fa",
      "pl",
      "pt",
      "qu",
      "rm",
      "rn",
      "ru",
      "sm",
      "sg",
      "sa",
      "sc",
      "sr",
      "sn",
      "sd",
      "si",
      "sk",
      "sl",
      "so",
      "st",
      "nr",
      "es",
      "su",
      "sw",
      "ss",
      "sv",
      "tl",
      "ty",
      "tg",
      "ta",
      "tt",
      "te",
      "th",
      "bo",
      "ti",
      "to",
      "ts",
      "tn",
      "tr",
      "tk",
      "tw",
      "ug",
      "uk",
      "ur",
      "uz",
      "ve",
      "vi",
      "vo",
      "wa",
      "cy",
      "fy",
      "wo",
      "xh",
      "yi",
      "yo",
      "za",
      "zu",
      "gb",
      "cn",
    ],
  },
  methods: {
    searchFilm() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=bf45f2aa9f37b275b9bc666d1480d632&language=en-US&query=${this.search}`
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
          `https://api.themoviedb.org/3/search/tv?api_key=bf45f2aa9f37b275b9bc666d1480d632&language=en-US&query=${this.search}`
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
