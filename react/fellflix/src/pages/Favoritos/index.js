import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@fellflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  function excluirFilme(id) {
    let movieFilter = movies.filter((item) => {
      return item.id !== id;
    });

    setMovies(movieFilter);
    localStorage.setItem("@fellflix", JSON.stringify(movieFilter));
    toast.success("Filme removido com sucesso.");
  }

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      {movies.length === 0 && (
        <span>Você não possui nenhum filme salvo :( </span>
      )}

      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Remover</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
