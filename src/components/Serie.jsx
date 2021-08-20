import { FlexDiv, Card, Poster } from "../components/UI/Basic";

function Serie({ datos }) {
  if (datos != null) {
    return (
      <div>
        <FlexDiv className="movil">
          <div className="flex">
            <div className="poster">
              <Poster>
                <img src={datos.image.original} alt="No hay imagen ..."></img>
              </Poster>
            </div>
            <Card id="card">
              <p>Estreno: {datos.premiered}</p>

              <p>
                Genero:
                {datos.genres.map((genre) => {
                  return <span> {genre} </span>;
                })}
              </p>
              <p clasName="trama">Trama: {datos.summary}</p>
              <p>Pais: {datos.network.country.name}</p>
              <p>Produccion: {datos.network.name}</p>
              <p>Valoracion: {datos.rating.average}</p>
            </Card>
          </div>
        </FlexDiv>
      </div>
    );
  }
}

export default Serie;
