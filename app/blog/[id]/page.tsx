"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Post = { meta_title?: string; short_description?: string; content?: string; image_url?: string; date_formatted?: string; read_time?: string };

export default function BlogArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    params.then(({ id }) =>
      fetch(`/api/blog/${id}`)
        .then(async (response) => {
          const data = await response.json() as { post?: Post; posts?: Post[]; error?: string } & Post;
          if (!response.ok) throw new Error(data.error);
          setPost(data.post ?? data.posts?.[0] ?? data);
        })
        .catch((reason) => setError(reason instanceof Error ? reason.message : "Article introuvable."))
    );
  }, [params]);

  const content = post?.content || post?.short_description || "";
  const NAVY = "#274554";
  const ORANGE = "#93c572";

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <Header />
      <article style={{ maxWidth: 920, margin: "0 auto", padding: "32px 24px 96px" }}>
        {error && <p style={{ color: "#b91c1c", marginTop: 24 }}>{error}</p>}
        {!post && !error && (
          <div style={{ marginTop: 48 }}>
            <div style={{ width: "60%", height: 28, background: "#e2e8f0", borderRadius: 8, marginBottom: 20 }} />
            <div style={{ width: "100%", height: 320, background: "#e2e8f0", borderRadius: 14, marginBottom: 32 }} />
            <div style={{ width: "100%", height: 16, background: "#e2e8f0", borderRadius: 6, marginBottom: 12 }} />
            <div style={{ width: "92%", height: 16, background: "#e2e8f0", borderRadius: 6, marginBottom: 12 }} />
            <div style={{ width: "85%", height: 16, background: "#e2e8f0", borderRadius: 6 }} />
          </div>
        )}

        {post && (
          <>
            <nav style={{ marginBottom: 28 }}>
              <Link href="/blog" style={{ color: NAVY, fontWeight: 800, fontSize: "0.9rem", textDecoration: "none" }}>
                ← Tous les articles
              </Link>
            </nav>

            <div style={{ marginBottom: 18 }}>
              <span style={{ color: ORANGE, fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>{post.date_formatted}</span>
              {post.read_time && <span style={{ color: "#94a3b8", fontSize: "0.8rem", marginLeft: 12 }}>{post.read_time} de lecture</span>}
            </div>

            <h1 style={{ color: NAVY, fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.15, margin: "0 0 28px" }}>
              {post.meta_title ?? "Article"}
            </h1>

            {post.image_url && (
              <div style={{ width: "100%", borderRadius: 16, overflow: "hidden", marginBottom: 40, background: "#edf2f7" }}>
                <img src={post.image_url} alt="" style={{ width: "100%", maxHeight: 480, objectFit: "cover", display: "block" }} />
              </div>
            )}

            <div
              className="blog-content"
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "clamp(24px, 5vw, 56px)",
                color: "#334155",
                lineHeight: 1.75,
                fontSize: "1.05rem",
                boxShadow: "0 2px 12px rgba(39,69,84,0.06)",
              }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </>
        )}
      </article>
      <Footer />
    </main>
  );
}
