import { useEffect, useState } from "react";
import { useParams, useNavigate, useNavigation } from "react-router-dom";
import "./filme.css";

import api from "../../services/api";

function Filme() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: apiKey,
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme nao encontrado");
          // se o filme nao existe, redireciona pra home
          navigate("/", { replace: true });
          return;
        });
    }

    loadMovie();

    return () => {
      console.log("Componente foi desmontado");
    };
  }, [navigate, id, apiKey]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average} / 10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${movie.title}+trailer`}
            target="blank"
            rel="external"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
