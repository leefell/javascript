import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadAPI() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((result) => result.json())
        .then((resultJson) => {
          setNutri(resultJson);
        });
    }

    loadAPI();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>Riécti Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img className="capa" src={item.capa} alt={item.titulo} />
            <p className="subtitulo">{item.subtitulo}</p>
            <h3>Categoria: {item.categoria}</h3>
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
