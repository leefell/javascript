import { useState, useEffect } from "react";

function App() {
  // Use-states
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar Riéct",
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }

    // Esse return seria executado quando o componente é desemontado, por exemplo
    // ir para uma rota diferente na url
    // return () => {

    // };
  }, []);

  // Toda vez que um componente é montado, essa função é executada
  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]); // Entre colchetes vai quem é o alvo da mudança

  function handleRegister(e) {
    e.preventDefault();

    if (input.length !== 0) {
      setTarefas([...tarefas, input]);
      setInput("");
      return;
    }
    alert("Coloca uma tarefa ai paizão");
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa: </label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
