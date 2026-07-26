import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import StoreProvider from "@/components/StoreProvider";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"], variable: "--font-body", display: "swap",
  weight: ["400", "600", "700", "800"],
});
const montserrat = Montserrat({
  subsets: ["latin"], variable: "--font-heading", display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Turbo Pas Cher en Échange Standard | Achat/Vente de Turbocompresseur - Auto Diesel",
  description: "Le Meilleur du Turbo pour Votre Voiture est sur Auto Diesel ! Des Références de Turbocompresseur pour Toutes les Marques.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${openSans.variable} ${montserrat.variable}`}>
      <body className={openSans.className}>
        <ThemeRegistry><StoreProvider>{children}</StoreProvider></ThemeRegistry>
      </body>
    </html>
  );
}
