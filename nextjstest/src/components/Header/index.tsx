import Link from "next/link";
import styles from "@/components/Header/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Meu site</h1>
      <Link href="/">Home</Link> <br />
      <Link href="/contatos">Contatos</Link> <br />
      <Link href="/repositorios">Repositorios</Link> <br />
      <br />
      <br />
      <hr />
    </header>
  );
}
