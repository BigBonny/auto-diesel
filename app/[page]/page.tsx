import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const pages = {
  fabricants: {
    title: "Fabricants",
    description: "Découvrez les fabricants et équipementiers disponibles dans notre catalogue.",
  },
  blog: {
    title: "Le blog Auto Diesel",
    description: "Conseils pratiques, guides techniques et actualités autour de la mécanique automobile.",
  },
  contact: {
    title: "Contactez Auto Diesel",
    description: "Notre équipe technique vous accompagne dans le choix de vos pièces auto.",
  },
} as const;

type Page = keyof typeof pages;

export default async function InformationPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const content = pages[page as Page];

  if (!content) {
    notFound();
  }

  return (
    <main style={{ minHeight: "100vh", background: "#f4f6f8" }}>
      <Header />
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 24px 112px" }}>
        <p style={{ margin: "0 0 12px", color: "#93c572", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>Auto Diesel</p>
        <h1 style={{ margin: "0 0 18px", color: "#274554", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-heading)" }}>{content.title}</h1>
        <p style={{ maxWidth: 680, margin: 0, color: "#475569", fontSize: "1.1rem", lineHeight: 1.6 }}>{content.description}</p>
        <Link href="/" style={{ display: "inline-block", marginTop: 32, borderRadius: 999, padding: "12px 22px", background: "#274554", color: "#fff", fontWeight: 700 }}>Retour à l'accueil</Link>
      </section>
      <Footer />
    </main>
  );
}
