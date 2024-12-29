import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: apiKey,
          language: "pt-BR",
          page: 1,
        },
      });
      console.log(response.data.results);
    }

    getMovies();
  }, []);

  return (
    <div>
      <h1>Bem vindo A Home</h1>
    </div>
  );
}

export default Home;
