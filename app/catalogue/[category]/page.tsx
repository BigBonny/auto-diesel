import Link from "next/link";
import { notFound } from "next/navigation";

import { findProducts } from "@/lib/catalog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const categories = {
  turbos: {
    title: "Turbos",
    description: "Explorez notre sélection de turbocompresseurs pour votre véhicule.",
  },
  injecteurs: {
    title: "Injecteurs",
    description: "Trouvez l'injecteur adapté à votre motorisation et à sa référence.",
  },
  "pompes-hp": {
    title: "Pompes HP à injection",
    description: "Découvrez nos pompes haute pression et pièces compatibles.",
  },
  "huiles-additifs": {
    title: "Huiles et additifs",
    description: "Sélectionnez les huiles et additifs conçus pour protéger votre moteur.",
  },
} as const;

type Category = keyof typeof categories;

export default async function CataloguePage({ params, searchParams }: { params: Promise<{ category: string }>; searchParams: Promise<{ page?: string }> }) {
  const { category } = await params;
  const { page: pageParam } = await searchParams;
  const page = Math.max(Number(pageParam ?? "1") || 1, 1);
  const content = categories[category as Category];

  if (!content) {
    notFound();
  }

  const { products, total, limit } = await findProducts({ category, limit: 24, page });
  const pageCount = Math.max(Math.ceil(total / limit), 1);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f6f8" }}>
      <Header />
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 24px 112px" }}>
        <p style={{ margin: "0 0 12px", color: "#93c572", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>Catalogue</p>
        <h1 style={{ margin: "0 0 18px", color: "#274554", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-heading)" }}>{content.title}</h1>
        <p style={{ maxWidth: 680, margin: 0, color: "#475569", fontSize: "1.1rem", lineHeight: 1.6 }}>{content.description}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 20, marginTop: 40 }}>
          {products.map((product) => (
            <Link key={product.id} href={`/produit/${product.id}`} style={{ background: "#fff", borderRadius: 12, padding: 20, color: "#274554", boxShadow: "0 4px 16px rgba(39,69,84,0.08)" }}>
              {product.image_url && <img src={product.image_url} alt="" style={{ width: "100%", height: 160, objectFit: "contain", marginBottom: 14 }} />}
              <p style={{ margin: "0 0 8px", color: "#93c572", fontSize: "0.82rem", fontWeight: 800 }}>{product.reference || "Référence"}</p>
              <h2 style={{ margin: 0, fontSize: "1rem", lineHeight: 1.4 }}>{product.name}</h2>
              <p style={{ margin: "16px 0 0", fontWeight: 800, fontSize: "1.2rem" }}>{Number(product.price).toFixed(2).replace(".", ",")} €</p>
            </Link>
          ))}
        </div>
        {!products.length && <p style={{ marginTop: 40, color: "#475569" }}>Aucun produit n'est disponible dans cette catégorie pour le moment.</p>}
        {products.length > 0 && <nav aria-label="Pagination" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36 }}>
          {page > 1 && <Link href={`/catalogue/${category}?page=${page - 1}`} style={{ color: "#274554", fontWeight: 800 }}>← Précédent</Link>}
          <span style={{ color: "#475569" }}>Page {page} sur {pageCount} · {total.toLocaleString("fr-FR")} produits</span>
          {page < pageCount && <Link href={`/catalogue/${category}?page=${page + 1}`} style={{ color: "#274554", fontWeight: 800 }}>Suivant →</Link>}
        </nav>}
        <Link href="/" style={{ display: "inline-block", marginTop: 32, borderRadius: 999, padding: "12px 22px", background: "#274554", color: "#fff", fontWeight: 700 }}>Retour à l'accueil</Link>
      </section>
      <Footer />
    </main>
  );
}
