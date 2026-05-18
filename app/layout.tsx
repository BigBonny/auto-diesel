import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUTO DIESELS - Turbos & Injecteurs de Confiance",
  description: "Spécialiste en turbos et injecteurs pour véhicules toutes marques. Qualité, fiabilité et performance pour votre moteur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
