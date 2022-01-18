import Reproductor from "./modules/reproductor.js";

// serie
let serie = new Reproductor(
  "series",
  "https://www.youtube.com/watch?v=x7Krla_UxRg"
);
serie.playMultimedia();

// peliculas
let pelicula = new Reproductor(
  "peliculas",
  "https://www.youtube.com/watch?v=YlGfFnSDq0Q"
);
pelicula.playMultimedia();
pelicula.setInicio(10);
// musica
let musica = new Reproductor(
  "musica",
  "https://www.youtube.com/watch?v=Cx1qHKE_y9Q"
);
musica.playMultimedia();
musica.setInicio(80);
