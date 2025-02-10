import styles from "@/app/page.module.css";

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

async function getData() {
  const data = await delayFetch(
    "https://api.github.com/users/leefell/repos",
    1000
  );

  return data;
}

// Essa requisição é feita no lado do servidor
export default async function Home() {
  const data: DataProps[] = await getData(); // Isso é possível pq to no server-side

  console.log(data);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Home</h1>
      <span className={styles.welcome}>Seja bem-vindo a home</span>
      <br />

      <h3 className={styles.subtitle}>Meus repositórios públicos</h3>
      <ul className={styles.repoList}>
        {data.map((repo) => {
          return (
            <div key={repo.id} className={styles.repoItem}>
              <strong>Repositório:</strong> <a>{repo.name}</a>, <br />{" "}
              <span>Link: <a href={repo.html_url} target="_blank">{repo.html_url}</a></span>
              <br />
              <br />
            </div>
          );
        })}
      </ul>
    </main>
  );
}
