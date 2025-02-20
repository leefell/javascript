// Metadata serve para definir o título e descrição da página
// Esse layout é apenas para rotas dentro de /dashboard

export const metadata = {
  title: "painel do site",
  description: "esse é painel do site",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h3>Header do dashboard</h3>
      <br />
      {children}
    </>
  );
}
