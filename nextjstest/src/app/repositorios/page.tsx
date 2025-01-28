"use client";
import { useState, useEffect } from "react";

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

export default function Repositorios() {
  const [repos, setRepos] = useState<DataProps[]>([]);

  useEffect(() => {
    function getData() {
      fetch("https://api.github.com/users/leefell/repos")
        .then((res) => res.json())
        .then((data: DataProps[]) => {
          setTimeout(() => {
            setRepos(data);
          }, 1000);
        });
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Página repositórios (mostrando o clientSide)</h1>
      <ul>
        {repos.map((repo) => {
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
    </div>
  );
}
