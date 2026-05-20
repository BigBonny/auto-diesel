"use client";

import { motion } from "framer-motion";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const articles = [
  {
    title: "Comment choisir un turbo reconditionné de qualité ?",
    excerpt: "Tous les critères à vérifier avant d'acheter un turbo reconditionné : inspection, test banc, garantie...",
    date: "12 Mai 2025",
    readTime: "6 min",
    category: "Guide",
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80",
  },
  {
    title: "Symptômes d'un injecteur défaillant",
    excerpt: "Fumée noire, surconsommation, perte de puissance... comment détecter un injecteur HS à temps.",
    date: "4 Mai 2025",
    readTime: "4 min",
    category: "Technique",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80",
  },
  {
    title: "Entretien du système d'injection diesel",
    excerpt: "Les bons gestes pour prolonger la durée de vie de votre système d'injection et éviter les pannes coûteuses.",
    date: "28 Avr 2025",
    readTime: "5 min",
    category: "Entretien",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
];

export default function News() {
  return (
    <Box component="section" id="news" sx={{ bgcolor: "white", py: { xs: 12, md: 18 }, position: "relative" }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, alignItems: { lg: "flex-end" }, justifyContent: "space-between", mb: { xs: 8, md: 10 }, gap: 4 }}>
          <Box sx={{ maxWidth: 720 }}>
            <Stack direction="row" sx={{ alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 40, height: 1, bgcolor: "#16a34a" }} />
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#16a34a", letterSpacing: "0.15em", textTransform: "uppercase" }}>Journal</Typography>
            </Stack>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" }, fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#0f172a", mb: 2 }}>
              Conseils &{" "}
              <Box component="span" sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "#16a34a" }}>actualités</Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 540 }}>
              Guides techniques, conseils d'entretien et actualités sur l'injection diesel par nos experts.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              borderColor: "#0f172a", color: "#0f172a", borderWidth: 2,
              fontWeight: 700, px: 3, py: 1.5, borderRadius: 99,
              "&:hover": { borderWidth: 2, bgcolor: "#0f172a", color: "white" },
            }}
          >
            Tous les articles
          </Button>
        </Box>

        {/* Featured article (big) + 2 small */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.4fr 1fr" }, gap: 4 }}>
          {/* Big featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: 5,
                overflow: "hidden",
                aspectRatio: { xs: "4/3", lg: "5/6" },
                cursor: "pointer",
                "&:hover img": { transform: "scale(1.05)" },
                "&:hover .news-arrow": { transform: "translate(4px, -4px) rotate(0deg)" },
              }}
            >
              <Box
                component="img"
                src={articles[0].img}
                alt=""
                sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}
              />
              <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)" }} />

              {/* Top chip */}
              <Box sx={{ position: "absolute", top: 24, left: 24, bgcolor: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)", color: "white", fontSize: "0.72rem", fontWeight: 700, px: 1.75, py: 0.6, borderRadius: 99, letterSpacing: "0.05em" }}>
                {articles[0].category}
              </Box>

              {/* Bottom content */}
              <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: { xs: 4, md: 5 }, color: "white" }}>
                <Stack direction="row" sx={{ alignItems: "center", gap: 1.5, mb: 2, color: "rgba(255,255,255,0.7)" }}>
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: 600 }}>{articles[0].date}</Typography>
                  <Box sx={{ width: 3, height: 3, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.5)" }} />
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: 600 }}>{articles[0].readTime} de lecture</Typography>
                </Stack>
                <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: { xs: "1.8rem", md: "2.6rem" }, fontWeight: 400, lineHeight: 1.1, mb: 2, maxWidth: 500 }}>
                  {articles[0].title}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 480, mb: 3 }}>
                  {articles[0].excerpt}
                </Typography>
                <Stack direction="row" sx={{ alignItems: "center", gap: 1, fontWeight: 700, fontSize: "0.85rem" }}>
                  Lire l'article
                  <Box
                    className="news-arrow"
                    sx={{
                      width: 32, height: 32, borderRadius: "50%",
                      bgcolor: "#16a34a",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "transform 0.35s ease",
                    }}
                  >
                    <ArrowOutwardIcon sx={{ fontSize: 16 }} />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </motion.div>

          {/* Two small */}
          <Stack spacing={4}>
            {articles.slice(1).map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "200px 1fr" },
                    gap: 3,
                    cursor: "pointer",
                    p: 2,
                    borderRadius: 4,
                    transition: "all 0.3s",
                    "&:hover": { bgcolor: "#fafaf9" },
                    "&:hover img": { transform: "scale(1.05)" },
                  }}
                >
                  <Box sx={{ aspectRatio: "1", borderRadius: 3, overflow: "hidden" }}>
                    <Box component="img" src={a.img} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }} />
                  </Box>
                  <Box>
                    <Stack direction="row" sx={{ alignItems: "center", gap: 1.5, mb: 1.5 }}>
                      <Box sx={{ fontSize: "0.7rem", fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.1em" }}>{a.category}</Box>
                      <Box sx={{ width: 3, height: 3, borderRadius: "50%", bgcolor: "#cbd5e1" }} />
                      <Typography sx={{ fontSize: "0.72rem", color: "text.secondary", fontWeight: 600 }}>{a.readTime}</Typography>
                    </Stack>
                    <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: { xs: "1.25rem", md: "1.6rem" }, fontWeight: 400, lineHeight: 1.2, color: "#0f172a", mb: 1.5 }}>
                      {a.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.88rem", lineHeight: 1.6, mb: 2 }}>{a.excerpt}</Typography>
                    <Typography sx={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600 }}>{a.date}</Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
