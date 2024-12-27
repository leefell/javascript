import { useParams } from "react-router-dom";

function Produto() {
  const { id } = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <p>Página exemplo pra estudar parametros na url</p>
      <span>Produto: {id}</span>
    </div>
  );
}

export default Produto;
