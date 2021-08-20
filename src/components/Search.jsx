import { useState } from "react";
import { NavLink } from "react-router-dom";

function Search({ onClick, onClick2, onClick3 }) {
  const [serie, setSerie] = useState();
  const [actor, setActor] = useState();
  const [pelicula, setPelicula] = useState();

  return (
    <div className="App">
      <div className="container">
        <div className="encabezado">
          <h2>Buscador de series, actores y peliculas</h2>
        </div>
        <div className="box-search">
          <div className="serie">
            <div>
              <input
                type="text"
                name="titulo"
                className="search-film"
                placeholder="Introduce serie.."
                required
                onChange={(e) => setSerie(e.target.value)}
                value={serie}
              />
            </div>
            <button className="boton" onClick={() => onClick(serie)}>
              <NavLink className="ref" to="/serie">
                Buscar Serie
              </NavLink>
            </button>
          </div>
          <div className="actor">
            <div>
              <input
                type="text"
                name="nombre"
                className="search-film"
                placeholder="Introduce actor.."
                required
                onChange={(e) => setActor(e.target.value)}
                value={actor}
              />
            </div>
            <button className="boton" onClick={() => onClick2(actor)}>
              <NavLink className="ref" to="/actor">
                Buscar Actor
              </NavLink>
            </button>
          </div>
          <div className="pelicula">
            <div>
              <input
                type="text"
                name="films"
                className="search-film"
                placeholder="Introduce pelicula.."
                required
                onChange={(e) => setPelicula(e.target.value)}
                value={pelicula}
              />
            </div>
            <button className="boton" onClick={() => onClick3(pelicula)}>
              <NavLink className="ref" to="/film">
                Buscar Pelicula
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
