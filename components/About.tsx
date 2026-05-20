"use client";

import { motion } from "framer-motion";
import { Box, Button, Container, Stack, Typography, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const strengths = [
  { title: "Reconditionnement professionnel",  desc: "Chaque pièce démontée, nettoyée, remplacée et testée par nos techniciens." },
  { title: "Tests sur banc de contrôle",       desc: "Calibration et validation des performances avant emballage." },
  { title: "Garantie 2 ans toutes marques",    desc: "Couverture totale sans conditions, échange ou remboursement." },
  { title: "Expédition sécurisée 24h",         desc: "Emballage anti-choc, suivi en temps réel France & Europe." },
];

export default function About() {
  return (
    <Box component="section" id="about" sx={{ bgcolor: "#fafaf9", py: { xs: 12, md: 18 }, position: "relative", overflow: "hidden" }}>
      {/* Decorative bg */}
      <Box sx={{ position: "absolute", top: "20%", right: "-15%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)", pointerEvents: "none" }} />

      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 8, lg: 12 }, alignItems: "center" }}>

          {/* LEFT: image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Box sx={{ position: "relative" }}>
              {/* Main image */}
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  borderRadius: 5,
                  overflow: "hidden",
                  aspectRatio: "4/5",
                  boxShadow: "0 30px 60px rgba(15,23,42,0.12)",
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=900&q=90"
                  alt="Atelier"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.6) 100%)" }} />
                {/* Quote overlay */}
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 4, color: "white" }}>
                  <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: { xs: "1.4rem", md: "1.8rem" }, lineHeight: 1.3, mb: 2 }}>
                    "Chaque pièce qui sort de notre atelier est testée comme si nous allions la monter sur notre propre voiture."
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                    — L'équipe Euro Système Injection
                  </Typography>
                </Box>
              </Paper>

              {/* Floating badge top-left */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  top: -24, left: -24,
                  bgcolor: "#0f172a",
                  color: "white",
                  borderRadius: 4,
                  px: 3, py: 2.5,
                  boxShadow: "0 20px 40px rgba(15,23,42,0.25)",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Typography sx={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Depuis</Typography>
                <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "3rem", fontWeight: 400, color: "#4ade80", lineHeight: 1, my: 0.5 }}>2010</Typography>
                <Typography sx={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)" }}>15 ans d'expertise</Typography>
              </Paper>

              {/* Floating badge bottom-right */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  bottom: -28, right: -28,
                  bgcolor: "white",
                  borderRadius: 4,
                  px: 3, py: 2.5,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
                  display: { xs: "none", sm: "block" },
                  minWidth: 200,
                }}
              >
                <Stack direction="row" sx={{ alignItems: "center", gap: 1.5, mb: 1 }}>
                  <Box sx={{ display: "flex", gap: 0.25 }}>
                    {[...Array(5)].map((_, i) => (
                      <Box key={i} sx={{ width: 16, height: 16, bgcolor: "#facc15", clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
                    ))}
                  </Box>
                  <Typography sx={{ fontWeight: 900, fontSize: "0.95rem", color: "#0f172a" }}>4.9/5</Typography>
                </Stack>
                <Typography sx={{ fontSize: "0.78rem", color: "text.secondary" }}>2 400+ avis vérifiés</Typography>
              </Paper>
            </Box>
          </motion.div>

          {/* RIGHT: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Stack direction="row" sx={{ alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 40, height: 1, bgcolor: "#16a34a" }} />
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#16a34a", letterSpacing: "0.15em", textTransform: "uppercase" }}>À propos</Typography>
            </Stack>

            <Typography variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" }, fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#0f172a", mb: 4 }}>
              L'art du{" "}
              <Box component="span" sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "#16a34a" }}>
                reconditionnement
              </Box>{" "}
              diesel.
            </Typography>

            <Typography sx={{ color: "text.secondary", fontSize: "1.1rem", lineHeight: 1.8, mb: 5 }}>
              Depuis 2010, nous donnons une seconde vie à des milliers de turbos et injecteurs.
              Chaque pièce passe entre les mains de nos techniciens spécialisés et subit une batterie
              de tests rigoureux avant de rejoindre votre véhicule.
            </Typography>

            {/* Strengths grid */}
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3, mb: 5 }}>
              {strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ width: 32, height: 32, borderRadius: 2, bgcolor: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckCircleIcon sx={{ fontSize: 18, color: "#16a34a" }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 800, fontSize: "1rem", color: "#0f172a", mb: 0.5 }}>{s.title}</Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: "text.secondary", lineHeight: 1.6 }}>{s.desc}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>

            <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }} spacing={0}>
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailOutlinedIcon />}
                endIcon={<ArrowOutwardIcon />}
                href="mailto:info@www.auto-diesels.com"
                sx={{
                  bgcolor: "#0f172a", color: "white",
                  fontWeight: 800, px: 3.5, py: 1.85, borderRadius: 99,
                  boxShadow: "0 12px 28px rgba(15,23,42,0.25)",
                  "&:hover": { bgcolor: "#16a34a", transform: "translateY(-2px)" },
                  transition: "all 0.3s",
                }}
              >
                Nous contacter
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  borderColor: "#0f172a",
                  color: "#0f172a",
                  borderWidth: 2,
                  fontWeight: 700,
                  px: 3.5, py: 1.85, borderRadius: 99,
                  "&:hover": { borderWidth: 2, bgcolor: "rgba(15,23,42,0.04)" },
                }}
              >
                Appeler
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
