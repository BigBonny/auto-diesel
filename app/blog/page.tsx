"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Post = { id_leoblog_post: string | number; meta_title?: string; short_description?: string; image_url?: string; date_formatted?: string; read_time?: string };

function textPreview(value?: string) {
  return (value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160) + (value && value.length > 160 ? "…" : "");
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch("/api/blog?limit=12")
      .then(async (response) => {
        const data = await response.json() as { posts?: Post[]; error?: string };
        if (!response.ok) throw new Error(data.error);
        setPosts(data.posts ?? []);
      })
      .catch((reason) => setError(reason instanceof Error ? reason.message : "Le blog est indisponible."));
  }, []);

  const NAVY = "#274554";
  const ORANGE = "#93c572";
  const GRAY = "#475569";

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <Header />
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 96px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: ORANGE, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px" }}>AUTO DIESEL</p>
          <h1 style={{ color: NAVY, fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.2rem)", margin: 0, lineHeight: 1.15 }}>Le blog mécanique</h1>
          <p style={{ color: GRAY, maxWidth: 560, margin: "14px auto 0", fontSize: "1.05rem", lineHeight: 1.6 }}>Conseils, guides et astuces pour l'entretien de votre moteur diesel.</p>
        </div>

        {error && <p style={{ color: "#b91c1c", textAlign: "center", marginBottom: 24 }}>{error}</p>}

        {!error && !posts.length && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {[1,2,3].map((i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 8px rgba(39,69,84,0.06)", animation: "pulse 1.5s ease-in-out infinite" }}>
                <div style={{ width: "100%", height: 200, background: "#e2e8f0" }} />
                <div style={{ padding: 24 }}>
                  <div style={{ width: "40%", height: 12, background: "#e2e8f0", borderRadius: 6, marginBottom: 16 }} />
                  <div style={{ width: "75%", height: 18, background: "#e2e8f0", borderRadius: 6, marginBottom: 12 }} />
                  <div style={{ width: "100%", height: 60, background: "#e2e8f0", borderRadius: 6 }} />
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
          {posts.map((post) => {
            const id = post.id_leoblog_post;
            if (!id) return null;
            return (
              <article
                key={id}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(39,69,84,0.07)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(39,69,84,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(39,69,84,0.07)"; }}
              >
                <Link href={`/blog/${id}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                  <div style={{ position: "relative", width: "100%", height: 200, overflow: "hidden", background: "#edf2f7" }}>
                    {post.image_url ? (
                      <img src={post.image_url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }} onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }} />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#cbd5e1", fontWeight: 700, fontSize: "1.2rem" }}>AUTO DIESEL</div>
                    )}
                  </div>
                  <div style={{ padding: "24px 22px 28px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <span style={{ color: ORANGE, fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>{post.date_formatted}</span>
                      {post.read_time && <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>{post.read_time} de lecture</span>}
                    </div>
                    <h2 style={{ color: NAVY, fontSize: "1.18rem", margin: "0 0 10px", lineHeight: 1.35, fontWeight: 700 }}>{post.meta_title ?? "Article"}</h2>
                    <p style={{ color: GRAY, lineHeight: 1.6, fontSize: "0.95rem", margin: 0 }}>{textPreview(post.short_description)}</p>
                    <div style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8, color: NAVY, fontWeight: 800, fontSize: "0.92rem" }}>
                      Lire l'article
                      <span style={{ transition: "transform 0.2s ease" }}>→</span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
