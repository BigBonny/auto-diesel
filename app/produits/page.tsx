import { Suspense } from "react";

import ProduitsContent from "./ProduitsContent";

export const dynamic = "force-dynamic";

export default function ProduitsPage() {
  return (
    <Suspense fallback={
      <main style={{ minHeight: "100vh", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "56px 24px 96px" }}>
          <div style={{ width: "40%", height: 36, background: "#e2e8f0", borderRadius: 8, marginBottom: 20 }} />
          <div style={{ width: "100%", height: 60, background: "#e2e8f0", borderRadius: 8, marginBottom: 32 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 18 }}>
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} style={{ background: "#fff", padding: 18, borderRadius: 12, height: 280 }}>
                <div style={{ width: "100%", height: 150, background: "#e2e8f0", borderRadius: 8, marginBottom: 12 }} />
                <div style={{ width: "60%", height: 16, background: "#e2e8f0", borderRadius: 6, marginBottom: 8 }} />
                <div style={{ width: "90%", height: 14, background: "#e2e8f0", borderRadius: 6 }} />
              </div>
            ))}
          </div>
        </div>
      </main>
    }>
      <ProduitsContent />
    </Suspense>
  );
}
