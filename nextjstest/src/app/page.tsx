interface DataProps {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
  };
}

async function delayFetch(url: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const response = await fetch(url);
  return response.json();
}

// async function getData() {
//   const response = await fetch("https://api.github.com/users/leefell/repos");

//   return response.json();
// }

async function getData() {
  const data = await delayFetch(
    "https://api.github.com/users/leefell/repos",
    3500
  );

  return data;
}

// Essa requisição é feita no lado do servidor
export default async function Home() {
  const data: DataProps[] = await getData(); // Isso é possível pq to no server-side

  console.log(data);

  return (
    <main>
      <h1>Home</h1>
      <span>Seja bem-vindo a home</span>
      <br />

      <h3>Meus repositórios públicos</h3>
      <ul>
        {data.map((repo) => {
          return (
            <div key={repo.id}>
              <strong>Repositório:</strong> <a>{repo.name}</a>, <br />{" "}
              <span>Link: {repo.html_url} </span>
              <br />
              <br />
            </div>
          );
        })}
      </ul>
    </main>
  );
}
