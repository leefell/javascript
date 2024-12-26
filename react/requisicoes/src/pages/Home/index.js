import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem-Vindo a Home</h1>
      <span>Leefell</span> <br /> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Home;
