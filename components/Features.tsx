"use client";

import { motion } from "framer-motion";
import { Box, Container, Stack, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import InventoryIcon from "@mui/icons-material/Inventory";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const features = [
  { icon: VerifiedIcon,        title: "Garantie 2 ans",       desc: "Sur toutes nos pièces reconditionnées, sans aucune condition." },
  { icon: LocalShippingIcon,   title: "Expédition 24h",       desc: "Livraison rapide en France et dans toute l'Europe." },
  { icon: WorkspacePremiumIcon,title: "Qualité certifiée",    desc: "Pièces testées sur banc de contrôle avant expédition." },
  { icon: CurrencyExchangeIcon,title: "Jusqu'à −60 %",        desc: "Économies importantes par rapport au prix des pièces neuves." },
  { icon: InventoryIcon,       title: "50 000+ références",   desc: "Stock permanent toutes marques, prêt à expédier." },
  { icon: HeadsetMicIcon,      title: "Support expert",       desc: "Conseils techniques par nos spécialistes diesel." },
];

const stats = [
  { value: 50000, suffix: "+", label: "Pièces en stock" },
  { value: 30000, suffix: "+", label: "Clients satisfaits" },
  { value: 15,    suffix: "+", label: "Années d'expertise" },
  { value: 98,    suffix: "%", label: "Taux de satisfaction" },
];

export default function Features() {
  return (
    <Box component="section" sx={{ position: "relative", bgcolor: "#0f172a", color: "white", py: { xs: 12, md: 18 }, overflow: "hidden" }}>
      {/* Decorative background */}
      <Box sx={{
        position: "absolute", inset: 0, opacity: 0.4,
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)",
        pointerEvents: "none",
      }} />
      <Box sx={{ position: "absolute", top: "30%", left: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.18), transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "-20%", right: "-10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.12), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <Container maxWidth="xl" sx={{ position: "relative" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 }, maxWidth: 900, mx: "auto" }}>
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center", gap: 1.5, mb: 3 }}>
            <Box sx={{ width: 40, height: 1, bgcolor: "#4ade80" }} />
            <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#4ade80", letterSpacing: "0.15em", textTransform: "uppercase" }}>Pourquoi nous</Typography>
            <Box sx={{ width: 40, height: 1, bgcolor: "#4ade80" }} />
          </Stack>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" }, fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", mb: 3 }}>
            L'expertise diesel,{" "}
            <Box component="span" sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, background: "linear-gradient(135deg, #4ade80, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              redéfinie
            </Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: { xs: "1rem", md: "1.15rem" }, lineHeight: 1.7 }}>
            15 ans d'expérience, des milliers de pièces testées, un service qui a fait ses preuves.
          </Typography>
        </Box>

        {/* Animated stats */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: { xs: 4, md: 6 },
            mb: { xs: 10, md: 14 },
            py: { xs: 6, md: 8 },
            borderTop: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", background: "linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </Typography>
                <Typography sx={{ mt: 1.5, fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {s.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Feature cards */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: 0 }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRight: { sm: i % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none", lg: i % 3 !== 2 ? "1px solid rgba(255,255,255,0.08)" : "none" },
                  borderBottom: i < features.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  position: "relative",
                  cursor: "default",
                  transition: "all 0.3s",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.02)" },
                  "&:hover .feature-icon": { transform: "scale(1.1) rotate(-5deg)", bgcolor: "#16a34a", color: "white" },
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    width: 56, height: 56, borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    mb: 3,
                    color: "#4ade80",
                    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <f.icon sx={{ fontSize: 26 }} />
                </Box>
                <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: 800, mb: 1.5, color: "white" }}>
                  {f.title}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {f.desc}
                </Typography>
                <Typography sx={{ position: "absolute", top: 24, right: 24, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(74,222,128,0.4)" }}>
                  0{i + 1}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
