"use client";

import { useState, useEffect } from "react";

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.65)",
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: -12,
            right: -12,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            color: "#333",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 2,
          }}
          aria-label="Fermer"
        >
          ×
        </button>

        {/* Popup image */}
        <img
          src="/assets/popup-image-69f1b10b4edcd0.56332886.png"
          alt="Popup"
          style={{
            maxWidth: "100%",
            maxHeight: "85vh",
            width: "auto",
            height: "auto",
            display: "block",
            borderRadius: 8,
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
          }}
        />
      </div>
    </div>
  );
}
