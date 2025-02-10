import "./globals.css";
import { Header } from "@/components/Header";
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'meu site para aprender nextjs',
  description: "site para praticar nextjs"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
