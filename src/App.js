import './App.css';
import React, { useEffect } from "react";
import { useState, Suspense } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Serie from "./components/Serie";
import Search from "./components/Search";
import Actor from "./components/Actor";
import Film from './components/Film';

const api = {
  key:"",
  serieBase: " https://api.tvmaze.com/singlesearch/",
  actorBase: " https://api.tvmaze.com/search/people?q=",
  keyFilm: "c49b5d8",
  filmBase: "https://www.omdbapi.com/?apikey=",
};


function App() {
 
  const [films, setFilms] = useState();
  const [serie, setSerie] = useState("ALF");
  const [actor, setActor] = useState("Demi Moore");
  const [datos, setDatos] = useState();
  const [datosAct, setDatosAct] = useState([" "]);
  const [datosFilm, setDatosFilm] = useState();
  
  const handleClick = (titulo) => {
    setSerie(titulo);
  }
  const handleClick2 = (actor) => {
    setActor(actor);
  }
  const handleClick3 = (films) => {
    setFilms(films);
  }


  useEffect(() => {
    async function buscar(serie) {
      const response = await fetch(`${api.serieBase}shows?q=${serie}`, { method: "GET" });
      const json = await response.json();
      console.log(json)
      setDatos(json);
    };
    buscar(serie);
  }, [serie]);

  
  useEffect (() => {
    axios.get(`${api.actorBase}${actor}`)
      .then((response) => {
        console.log(response);
        setDatosAct(response.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, [actor]);
  console.log(datosAct);
  
   useEffect (() => {
    axios.get(`${api.filmBase}${api.keyFilm}&t=${films}`)
      .then((response) => {
        console.log(response);
        setDatosFilm(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  },[films]);

  return (
      <BrowserRouter>
      <div className="App">
          <Switch>
              <Route path="/" exact>
                <Suspense fallback={<div>Cargando...</div>}>
              <Search onClick={handleClick} onClick2={handleClick2} onClick3={handleClick3}/>
                </Suspense>
              </Route>
              <Route path="/serie" exact>
                <Suspense fallback={<div>Cargando...</div>}>
                  <Serie datos={datos} />
                </Suspense>
              </Route>
              <Route path="/actor" exact>
                <Suspense fallback={<div>Cargando...</div>}>
                  <Actor datos={datosAct} />
                </Suspense>
              </Route>
              <Route path="/film" exact>
                <Suspense fallback={<div>Cargando...</div>}>
                  <Film datos={datosFilm} />
                </Suspense>
              </Route>
              <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
