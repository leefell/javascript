interface PageDetailProps {
    params: {
      id: string;
    };
  }
  
  async function getData(id: string) {
    console.log(id);
    const response = await fetch("https://api.github.com/users/leefell/repos");
    return response.json();
  }
  
  export default async function RepositorioId({ params: { id } }: PageDetailProps) {
    const data = await getData(id);
  
    return (
      <div>
        <h1>Página detalhes do repositório para testar rotas dinâmicas {id}</h1>
      </div>
    );
  }
  