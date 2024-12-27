import { Link } from "react-router-dom";

function Erro() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <p>Ops! Parece que você tentou acessar uma página que não existe.</p>
      <span>Você pode estar tentando encontrar: </span> <br />
      <Link to="/">Home</Link> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link> <br />
    </div>
  );
}

export default Erro;
