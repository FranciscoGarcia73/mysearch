import { FlexDiv, Card } from "./UI/Basic";

function Film({ datos }) {
  return (
    <div>
      <FlexDiv className="movil">
        <div className="flex">
          <div className="poster">
            <img src={datos.Poster} alt="No hay imagen ..."></img>
          </div>
          <Card id="card">
            <p>Estreno: {datos.Released}</p>

            <p>Director: {datos.Director}</p>

            <p>Actores: {datos.Actors}</p>

            <p>Duracion: {datos.Runtime}</p>

            <p>Genero: {datos.Genre}</p>

            <p>Premios: {datos.Awards}</p>

            <p>Pais: {datos.Country}</p>

            <p>Trama: {datos.Plot}</p>

            <p>Produccion: {datos.Production}</p>

            <p>Recaudacion: {datos.BoxOffice}</p>

            <p>Valoracion: {datos.imdbRating}</p>
          </Card>
        </div>
      </FlexDiv>
    </div>
  );
}

export default Film;
