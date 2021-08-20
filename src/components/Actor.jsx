import { FlexDiv, Card } from "./UI/Basic";

function Actor({ datos }) {
  if (datos.length !== 0) {
    return (
      <div>
        <FlexDiv className="movil">
          <div className="flex">
            <div className="poster">
              <img
                src={datos[0].person.image.original}
                alt="No hay imagen ..."
              ></img>
            </div>
            <Card id="card">
              <p>Nombre: {datos[0].person.name}</p>
              <br />
              <p>Fecha de nacimiento: {datos[0].person.birthday}</p>
              <br />
              <p>Fecha de fallecimiento: {datos[0].person.deathday}</p>
              <br />
              <p>Pais: {datos[0].person.country.name}</p>
              <br />
            </Card>
          </div>
        </FlexDiv>
      </div>
    );
  }
}

export default Actor;
