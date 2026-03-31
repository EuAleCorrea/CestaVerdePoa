import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cesta Verde POA - Hortifruti Selecionado em Porto Alegre",
  description: "Frutas, legumes e verduras frescas e selecionadas entregues na sua casa em Porto Alegre. Conheça nossos produtos artesanais e hortifrutis de qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
