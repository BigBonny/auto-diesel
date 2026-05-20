"use client";

import { useState } from "react";
import {
  Box, Button, Container, Stack, Typography, InputBase, Select,
  MenuItem, FormControl, Paper, Avatar, AvatarGroup
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedIcon from "@mui/icons-material/Verified";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Marquee from "@/components/ui/Marquee";

const brands = ["Marque", "Renault", "Peugeot", "Citroën", "Audi", "BMW", "Volkswagen", "Toyota", "Porsche"];
const models = ["Modèle", "Clio", "Mégane", "308", "A3", "A4", "Golf", "3 Series"];
const motorizations = ["Motorisation", "1.5 DCI", "1.6 HDI", "1.9 DCI", "2.0 TDI", "2.0 HDi"];

const carBrands = ["Renault", "Peugeot", "Citroën", "Audi", "BMW", "Volkswagen", "Toyota", "Ford", "Porsche", "Volvo", "Opel"];

const reviews = [
  { name: "Thomas L.", car: "Peugeot 308", rating: 5, text: "Turbo livré en 24h, installation parfaite." },
  { name: "Marie D.",  car: "Renault Mégane", rating: 5, text: "Excellent service, équipe à l'écoute." },
  { name: "Karim B.",  car: "BMW 320d", rating: 5, text: "Qualité au rendez-vous, prix imbattable." },
  { name: "Sophie M.", car: "Audi A4", rating: 5, text: "Économie de 60% vs neuf, je recommande." },
];

export default function Hero() {
  const [tab, setTab] = useState<"vehicle" | "ref">("vehicle");
  const [brand, setBrand] = useState("Marque");
  const [model, setModel] = useState("Modèle");
  const [moto, setMoto]   = useState("Motorisation");

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#fafaf9",
        pt: { xs: 6, lg: 7 },
        pb: { xs: 8, lg: 10 },
      }}
    >
      {/* ─── Animated background grid + spotlight ─── */}
      <Box
        sx={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />
      {/* Aurora blobs */}
      <Box sx={{ position: "absolute", top: "-20%", right: "-10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.22), transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "-30%", left: "-15%", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(132,204,22,0.15), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* ─── Top eyebrow with animated marquee of brands ─── */}
        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center", mb: { xs: 5, lg: 6 }, gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, bgcolor: "white", border: "1px solid #e5e7eb", borderRadius: 10, pl: 0.5, pr: 2, py: 0.5, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <Box sx={{ width: 26, height: 26, borderRadius: "50%", bgcolor: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#16a34a", boxShadow: "0 0 0 4px rgba(22,163,74,0.2)", animation: "pulse 1.8s infinite" }} />
            </Box>
            <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#0f172a" }}>
              <Box component="span" sx={{ color: "#16a34a" }}>●</Box> 23 commandes en direct
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "0.78rem", color: "text.secondary", display: { xs: "none", md: "block" } }}>
            Plus de <Box component="b" sx={{ color: "text.primary" }}>30 000 mécaniciens</Box> nous font confiance
          </Typography>
        </Stack>

        {/* ─── Massive headline ─── */}
        <Box sx={{ textAlign: "center", maxWidth: 1100, mx: "auto", mb: { xs: 6, lg: 8 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4.5rem", md: "6rem", lg: "8rem", xl: "9rem" },
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#0f172a",
            }}
          >
            Votre turbo,{" "}
            <Box
              component="span"
              sx={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #14532d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              reconditionné
            </Box>
            <br />
            par les{" "}
            <Box
              component="span"
              sx={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#0f172a",
                position: "relative",
                display: "inline-block",
              }}
            >
              experts
              {/* Underline accent */}
              <Box
                component="svg"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                sx={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 12, overflow: "visible" }}
              >
                <path d="M2 8 Q50 2 100 6 Q150 10 198 4" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
              </Box>
            </Box>
            .
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, color: "text.secondary", maxWidth: 620, mx: "auto", mt: 4, lineHeight: 1.7 }}>
            Spécialiste de l'injection diesel depuis 15 ans. Pièces testées sur banc,
            garanties 2 ans, expédiées en 24h dans toute l'Europe.
          </Typography>

          {/* Dual CTAs */}
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center", mt: 5, flexWrap: "wrap", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              href="#products"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                bgcolor: "#0f172a",
                color: "white",
                fontWeight: 800,
                fontSize: "0.95rem",
                px: 4, py: 1.85,
                borderRadius: 99,
                boxShadow: "0 12px 28px rgba(15,23,42,0.25)",
                "&:hover": { bgcolor: "#16a34a", transform: "translateY(-2px)", boxShadow: "0 16px 40px rgba(22,163,74,0.4)" },
                transition: "all 0.3s",
              }}
            >
              Découvrir le catalogue
            </Button>
            <Button
              variant="text"
              size="large"
              href="#about"
              sx={{
                color: "#0f172a",
                fontWeight: 700,
                fontSize: "0.95rem",
                px: 3, py: 1.85,
                borderRadius: 99,
                "&:hover": { bgcolor: "rgba(15,23,42,0.04)" },
              }}
            >
              Comment ça marche →
            </Button>
          </Stack>
        </Box>

        {/* ─── BENTO GRID ─── */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2, md: 2.5 },
            gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
            gridAutoRows: { md: "minmax(120px, auto)" },
          }}
        >
          {/* PRODUCT SHOWCASE — big tile */}
          <Paper
            elevation={0}
            sx={{
              gridColumn: { md: "span 7" },
              gridRow: { md: "span 3" },
              position: "relative",
              borderRadius: 5,
              overflow: "hidden",
              minHeight: { xs: 360, md: 480 },
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)",
              border: "1px solid rgba(22,163,74,0.15)",
              boxShadow: "0 30px 60px rgba(20,83,45,0.12)",
            }}
          >
            {/* Background turbo image */}
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=90"
              alt=""
              sx={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                mixBlendMode: "multiply",
                opacity: 0.95,
              }}
            />

            {/* Decorative ring */}
            <Box sx={{ position: "absolute", top: -100, right: -100, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(22,163,74,0.15)" }} />
            <Box sx={{ position: "absolute", top: -160, right: -160, width: 440, height: 440, borderRadius: "50%", border: "1px solid rgba(22,163,74,0.1)" }} />

            {/* Top label */}
            <Box sx={{ position: "absolute", top: 24, left: 24, display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                <EngineeringIcon sx={{ fontSize: 20, color: "#16a34a" }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "0.7rem", color: "#475569", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Best-seller</Typography>
                <Typography sx={{ fontSize: "0.95rem", color: "#0f172a", fontWeight: 800 }}>Turbo 1.6 HDi</Typography>
              </Box>
            </Box>

            {/* Bottom info */}
            <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: { xs: 3, md: 4 }, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.95) 60%)" }}>
              <Stack direction="row" sx={{ alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
                <Box>
                  <Typography sx={{ fontSize: "0.75rem", color: "#475569", fontWeight: 600, mb: 0.5 }}>Référence 753420-5006S</Typography>
                  <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: { xs: "1.6rem", md: "2.25rem" }, color: "#0f172a", lineHeight: 1, mb: 0.75 }}>
                    Performance certifiée
                  </Typography>
                  <Stack direction="row" sx={{ alignItems: "baseline", gap: 1.5 }}>
                    <Typography sx={{ fontSize: "0.8rem", color: "#94a3b8", textDecoration: "line-through" }}>520 €</Typography>
                    <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>210 €</Typography>
                    <Box sx={{ bgcolor: "#16a34a", color: "white", fontWeight: 900, fontSize: "0.75rem", px: 1.25, py: 0.4, borderRadius: 1.5 }}>−60%</Box>
                  </Stack>
                </Box>
                <Button
                  variant="contained"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{ bgcolor: "#0f172a", color: "white", fontWeight: 800, px: 3, py: 1.5, borderRadius: 99, "&:hover": { bgcolor: "#16a34a" } }}
                >
                  Acheter
                </Button>
              </Stack>
            </Box>
          </Paper>

          {/* SEARCH CARD — top right */}
          <Paper
            elevation={0}
            sx={{
              gridColumn: { md: "span 5" },
              gridRow: { md: "span 3" },
              borderRadius: 5,
              overflow: "hidden",
              bgcolor: "white",
              border: "1px solid #e5e7eb",
              boxShadow: "0 24px 60px rgba(15,23,42,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                px: 3, py: 2.5,
                position: "relative", overflow: "hidden",
              }}
            >
              <Box sx={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.08)" }} />
              <Box sx={{ position: "relative", display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }}>
                  <SearchIcon sx={{ color: "white" }} />
                </Box>
                <Box>
                  <Typography sx={{ color: "white", fontWeight: 900, fontSize: "1.1rem" }}>Trouvez votre pièce</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: "0.78rem" }}>Véhicule ou référence OEM</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", bgcolor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
              {(["vehicle", "ref"] as const).map((t) => (
                <Box
                  key={t}
                  onClick={() => setTab(t)}
                  sx={{
                    flex: 1, py: 1.5, textAlign: "center",
                    fontSize: "0.82rem", fontWeight: 700,
                    cursor: "pointer", userSelect: "none",
                    color: tab === t ? "#16a34a" : "#94a3b8",
                    bgcolor: tab === t ? "white" : "transparent",
                    borderBottom: "2.5px solid",
                    borderColor: tab === t ? "#16a34a" : "transparent",
                    transition: "all 0.2s",
                  }}
                >
                  {t === "vehicle" ? "🚗  Par véhicule" : "🔍  Par référence"}
                </Box>
              ))}
            </Box>

            <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {tab === "vehicle" ? (
                <Stack spacing={1.25}>
                  {[
                    { value: brand, set: setBrand, options: brands },
                    { value: model, set: setModel, options: models },
                    { value: moto,  set: setMoto,  options: motorizations },
                  ].map(({ value, set, options }, i) => (
                    <FormControl key={i} fullWidth size="small">
                      <Select
                        value={value}
                        onChange={(e) => set(e.target.value)}
                        sx={{
                          bgcolor: "#f8fafc",
                          borderRadius: 2.5,
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e2e8f0", borderWidth: 1.5 },
                          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#cbd5e1" },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#16a34a", borderWidth: 2 },
                        }}
                      >
                        {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
                      </Select>
                    </FormControl>
                  ))}
                </Stack>
              ) : (
                <Paper variant="outlined" sx={{ display: "flex", alignItems: "center", px: 2, borderRadius: 2.5, borderColor: "#e2e8f0", bgcolor: "#f8fafc" }}>
                  <SearchIcon sx={{ color: "text.disabled", mr: 1, fontSize: 20 }} />
                  <InputBase fullWidth placeholder="Ex: 753420-5006S" sx={{ py: 1.25, fontSize: "0.875rem", fontWeight: 500 }} />
                </Paper>
              )}

              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<SearchIcon />}
                sx={{
                  mt: 2, py: 1.6, fontWeight: 800, fontSize: "0.92rem", borderRadius: 2.5,
                  bgcolor: "#0f172a",
                  boxShadow: "0 8px 20px rgba(15,23,42,0.25)",
                  "&:hover": { bgcolor: "#16a34a", transform: "translateY(-1px)" },
                  transition: "all 0.2s",
                }}
              >
                Rechercher ma pièce
              </Button>
            </Box>
          </Paper>

          {/* STATS TILE */}
          <Paper
            elevation={0}
            sx={{
              gridColumn: { md: "span 4" },
              gridRow: { md: "span 2" },
              p: { xs: 3, md: 3.5 },
              borderRadius: 5,
              bgcolor: "#0f172a",
              color: "white",
              position: "relative",
              overflow: "hidden",
              minHeight: 180,
            }}
          >
            <Box sx={{ position: "absolute", inset: 0, opacity: 0.12, backgroundImage: "radial-gradient(circle at 20% 80%, #16a34a, transparent 50%)" }} />
            <Stack sx={{ position: "relative", height: "100%", justifyContent: "space-between" }} spacing={2}>
              <Box>
                <Typography sx={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", mb: 1 }}>Stock disponible</Typography>
                <Typography sx={{ fontSize: { xs: "2.75rem", md: "3.5rem" }, fontWeight: 900, lineHeight: 1, color: "white" }}>
                  <AnimatedCounter value={50000} suffix="+" />
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", mt: 0.5 }}>références prêtes à expédier</Typography>
              </Box>
              <Stack direction="row" sx={{ alignItems: "center", gap: 1.5 }}>
                <TrendingUpIcon sx={{ color: "#4ade80", fontSize: 18 }} />
                <Typography sx={{ fontSize: "0.78rem", color: "#bbf7d0", fontWeight: 600 }}>+34% ce trimestre</Typography>
              </Stack>
            </Stack>
          </Paper>

          {/* REVIEWS TILE */}
          <Paper
            elevation={0}
            sx={{
              gridColumn: { md: "span 4" },
              gridRow: { md: "span 2" },
              p: { xs: 3, md: 3.5 },
              borderRadius: 5,
              bgcolor: "white",
              border: "1px solid #e5e7eb",
              minHeight: 180,
            }}
          >
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
              <Box>
                <Stack direction="row" sx={{ alignItems: "center", gap: 0.5, mb: 0.5 }}>
                  {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ fontSize: 18, color: "#facc15" }} />)}
                </Stack>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "text.secondary" }}>
                  <Box component="span" sx={{ color: "#0f172a", fontWeight: 900, fontSize: "1.1rem" }}>4.9/5</Box> · <AnimatedCounter value={2400} suffix="+" /> avis vérifiés
                </Typography>
              </Box>
              <AvatarGroup max={4} sx={{ "& .MuiAvatar-root": { width: 32, height: 32, fontSize: "0.75rem", border: "2px solid white" } }}>
                {["TL", "MD", "KB", "SM", "+"].map((n, i) => (
                  <Avatar key={i} sx={{ bgcolor: ["#16a34a", "#0ea5e9", "#a855f7", "#f59e0b", "#64748b"][i] }}>{n}</Avatar>
                ))}
              </AvatarGroup>
            </Stack>
            <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "#0f172a", lineHeight: 1.45, mb: 1.5 }}>
              "Turbo livré en 24h, installation parfaite. Service au top."
            </Typography>
            <Typography sx={{ fontSize: "0.78rem", color: "text.secondary", fontWeight: 600 }}>— Thomas L., Peugeot 308</Typography>
          </Paper>

          {/* SHIPPING TILE */}
          <Paper
            elevation={0}
            sx={{
              gridColumn: { md: "span 4" },
              gridRow: { md: "span 2" },
              p: { xs: 3, md: 3.5 },
              borderRadius: 5,
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              color: "white",
              position: "relative",
              overflow: "hidden",
              minHeight: 180,
            }}
          >
            <Box sx={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.1)" }} />
            <Box sx={{ position: "absolute", bottom: -60, right: 40, width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)" }} />
            <Stack sx={{ position: "relative", height: "100%", justifyContent: "space-between" }} spacing={2}>
              <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }}>
                <LocalShippingIcon />
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.6rem", lineHeight: 1.1, mb: 0.5 }}>
                  Expédition 24h
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)" }}>
                  Gratuite dès 200€ · France & Europe
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* ─── Brand marquee bottom ─── */}
        <Box sx={{ mt: { xs: 6, lg: 8 } }}>
          <Typography sx={{ textAlign: "center", fontSize: "0.72rem", fontWeight: 700, color: "text.disabled", textTransform: "uppercase", letterSpacing: "0.18em", mb: 3 }}>
            Compatibles avec toutes les grandes marques
          </Typography>
          <Marquee speed={50} gap={56}>
            {carBrands.map((b) => (
              <Typography
                key={b}
                sx={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: { xs: "1.6rem", md: "2.25rem" },
                  fontWeight: 400,
                  color: "#94a3b8",
                  whiteSpace: "nowrap",
                  transition: "color 0.3s",
                  "&:hover": { color: "#0f172a" },
                }}
              >
                {b}
              </Typography>
            ))}
          </Marquee>
        </Box>
      </Container>
    </Box>
  );
}
