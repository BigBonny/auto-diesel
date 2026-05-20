"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box, Button, Card, CardContent, CardMedia, Chip, Container,
  Typography, Stack, IconButton
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import VerifiedIcon from "@mui/icons-material/Verified";

const products = [
  { id: 1, name: "Turbo 1.6 HDI 110 CV",     ref: "753420-5006S", price: 210, original: 450, brand: "Peugeot", discount: 53, cat: "turbos",     stock: true,  img: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&q=80", featured: true },
  { id: 2, name: "Turbo 1.9 DCI 120 CV",      ref: "708639-5010S", price: 200, original: 420, brand: "Renault", discount: 52, cat: "turbos",     stock: true,  img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id: 3, name: "Turbo 2.0 TDI 140 CV",      ref: "724930-5009S", price: 210, original: 480, brand: "Audi",    discount: 56, cat: "turbos",     stock: true,  img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80" },
  { id: 4, name: "Turbo 320d 163 CV",          ref: "49135-05671",  price: 320, original: 680, brand: "BMW",     discount: 53, cat: "turbos",     stock: true,  img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80" },
  { id: 5, name: "Turbo 2.0 TDI 136 CV",      ref: "724930-5010S", price: 210, original: 450, brand: "VW",      discount: 53, cat: "turbos",     stock: false, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80" },
  { id: 6, name: "Turbo 1.6 HDi 90 CV",       ref: "49173-07508",  price: 185, original: 420, brand: "Peugeot", discount: 56, cat: "turbos",     stock: true,  img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80" },
  { id: 7, name: "Injecteur HDi 136 CV",       ref: "756047-5005S", price: 230, original: 490, brand: "Peugeot", discount: 53, cat: "injecteurs", stock: true,  img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80" },
  { id: 8, name: "Injecteur Panamera",        ref: "49389-01310",  price: 2106,original:3500, brand: "Porsche", discount: 40, cat: "injecteurs", stock: true,  img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80" },
];

const cats = [
  { id: "all",        label: "Tout" },
  { id: "turbos",     label: "Turbos" },
  { id: "injecteurs", label: "Injecteurs" },
];

export default function Products() {
  const [active, setActive] = useState("all");
  const filtered = products.filter((p) => active === "all" || p.cat === active);

  return (
    <Box component="section" id="products" sx={{ bgcolor: "white", py: { xs: 10, md: 16 }, position: "relative", overflow: "hidden" }}>
      {/* Decorative bg */}
      <Box sx={{ position: "absolute", top: "10%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)", pointerEvents: "none" }} />

      <Container maxWidth="xl" sx={{ position: "relative" }}>
        {/* Header */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, alignItems: { lg: "flex-end" }, justifyContent: "space-between", gap: 4, mb: { xs: 6, md: 10 } }}>
          <Box sx={{ maxWidth: 720 }}>
            <Stack direction="row" sx={{ alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 40, height: 1, bgcolor: "#16a34a" }} />
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#16a34a", letterSpacing: "0.15em", textTransform: "uppercase" }}>Catalogue</Typography>
            </Stack>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" }, fontWeight: 900, lineHeight: 1.0, color: "#0f172a", letterSpacing: "-0.03em", mb: 2 }}>
              Nos pièces les plus{" "}
              <Box component="span" sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "#16a34a" }}>
                demandées
              </Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 540 }}>
              Sélection des best-sellers de notre catalogue de 50 000+ références.
              Toutes nos pièces sont testées sur banc et garanties 2 ans.
            </Typography>
          </Box>

          {/* Category pills */}
          <Stack direction="row" spacing={1} sx={{ bgcolor: "#f8fafc", borderRadius: 99, p: 0.75, border: "1px solid #e2e8f0" }}>
            {cats.map((c) => (
              <Box
                key={c.id}
                onClick={() => setActive(c.id)}
                sx={{
                  px: 2.5, py: 1.25, borderRadius: 99,
                  fontSize: "0.85rem", fontWeight: 700, cursor: "pointer", userSelect: "none",
                  color: active === c.id ? "white" : "#475569",
                  bgcolor: active === c.id ? "#0f172a" : "transparent",
                  transition: "all 0.25s",
                  "&:hover": { color: active === c.id ? "white" : "#0f172a" },
                }}
              >
                {c.label}
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Product grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }, gap: 3 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%", borderRadius: 4, overflow: "hidden",
                    bgcolor: "#fafaf9", border: "1px solid transparent",
                    transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "#dcfce7",
                      boxShadow: "0 24px 60px rgba(20,83,45,0.12)",
                      transform: "translateY(-6px)",
                      bgcolor: "white",
                    },
                    "&:hover .product-img": { transform: "scale(1.08) rotate(-2deg)" },
                    "&:hover .product-cta": { bgcolor: "#16a34a" },
                  }}
                >
                  {/* Image area */}
                  <Box sx={{ position: "relative", aspectRatio: "1", overflow: "hidden", bgcolor: "#f1f5f9" }}>
                    <CardMedia
                      component="img"
                      image={p.img}
                      alt={p.name}
                      className="product-img"
                      sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    />
                    {/* Top chips row */}
                    <Stack direction="row" sx={{ position: "absolute", top: 12, left: 12, right: 12, justifyContent: "space-between" }}>
                      <Chip
                        label={`−${p.discount}%`}
                        size="small"
                        icon={<LocalOfferIcon sx={{ fontSize: "0.85rem !important" }} />}
                        sx={{ bgcolor: "#0f172a", color: "white", fontWeight: 900, fontSize: "0.72rem", height: 26 }}
                      />
                      <IconButton size="small" sx={{ bgcolor: "white", width: 32, height: 32, "&:hover": { bgcolor: "white", color: "#ef4444" } }}>
                        <FavoriteBorderIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    </Stack>
                    {!p.stock && (
                      <Chip label="Sur commande" size="small" sx={{ position: "absolute", bottom: 12, left: 12, bgcolor: "rgba(245,158,11,0.95)", color: "white", fontWeight: 700, fontSize: "0.68rem", height: 22 }} />
                    )}
                  </Box>

                  <CardContent sx={{ p: 2.5 }}>
                    <Stack direction="row" sx={{ alignItems: "center", gap: 1, mb: 1 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: p.stock ? "#16a34a" : "#f59e0b" }} />
                      <Typography sx={{ fontSize: "0.7rem", color: "#475569", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.brand}</Typography>
                      <Typography sx={{ fontSize: "0.7rem", color: "#cbd5e1" }}>•</Typography>
                      <Typography sx={{ fontSize: "0.7rem", fontFamily: "monospace", color: "#94a3b8" }}>{p.ref}</Typography>
                    </Stack>

                    <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", color: "#0f172a", lineHeight: 1.2, mb: 1.5, fontWeight: 400 }}>
                      {p.name}
                    </Typography>

                    <Stack direction="row" sx={{ alignItems: "baseline", justifyContent: "space-between", mb: 2 }}>
                      <Stack direction="row" sx={{ alignItems: "baseline", gap: 1 }}>
                        <Typography sx={{ fontSize: "1.5rem", fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>{p.price} €</Typography>
                        <Typography sx={{ fontSize: "0.8rem", color: "#94a3b8", textDecoration: "line-through" }}>{p.original} €</Typography>
                      </Stack>
                      <Stack direction="row" sx={{ alignItems: "center", gap: 0.5, color: "#16a34a" }}>
                        <VerifiedIcon sx={{ fontSize: 13 }} />
                        <Typography sx={{ fontSize: "0.68rem", fontWeight: 700 }}>2 ans</Typography>
                      </Stack>
                    </Stack>

                    <Button
                      className="product-cta"
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowOutwardIcon sx={{ fontSize: "1rem !important" }} />}
                      sx={{
                        bgcolor: "#0f172a", color: "white",
                        fontWeight: 700, fontSize: "0.8rem", borderRadius: 99, py: 1.25,
                        transition: "background-color 0.25s",
                      }}
                    >
                      Voir le produit
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: "center", mt: { xs: 6, md: 10 } }}>
          <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: { xs: "1.5rem", md: "2.25rem" }, color: "#0f172a", mb: 2 }}>
            Plus de 50 000 références dans notre catalogue
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              bgcolor: "#0f172a", color: "white",
              fontWeight: 800, px: 4.5, py: 2, borderRadius: 99, fontSize: "0.95rem",
              boxShadow: "0 12px 28px rgba(15,23,42,0.25)",
              "&:hover": { bgcolor: "#16a34a", transform: "translateY(-2px)", boxShadow: "0 16px 40px rgba(22,163,74,0.4)" },
              transition: "all 0.3s",
            }}
          >
            Explorer le catalogue complet
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
