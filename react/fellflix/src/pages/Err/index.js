import { Link } from "react-router-dom";
import "./err.css";

function Err() {
  return (
    <div className="erro">
      <h1>404</h1>
      <p>Opa! Parece que você caiu na página errada.</p>
      <Link className="link-home" to="/">Veja todos os filmes aqui</Link>
    </div>
  );
}

export default Err;
