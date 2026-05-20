"use client";

import { Box, Button, Container, Divider, IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const linkGroups = {
  "Produits":     ["Turbos reconditionnés", "Injecteurs diesel", "Pièces détachées", "Pièces neuves"],
  "Services":     ["Reconditionnement", "Diagnostic", "Garantie & SAV", "Livraison express"],
  "Entreprise":   ["À propos", "Blog", "FAQ", "Conditions générales"],
};

export default function Footer() {
  return (
    <Box component="footer" id="footer" sx={{ bgcolor: "#0f172a", color: "rgba(255,255,255,0.7)", position: "relative", overflow: "hidden" }}>
      {/* Decorative aurora */}
      <Box sx={{ position: "absolute", top: "-20%", right: "-10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.18), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      {/* Newsletter CTA banner */}
      <Container maxWidth="xl" sx={{ position: "relative", pt: { xs: 10, md: 14 } }}>
        <Paper
          elevation={0}
          sx={{
            position: "relative",
            bgcolor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            borderRadius: 5,
            p: { xs: 4, md: 6 },
            overflow: "hidden",
            mb: { xs: 8, md: 12 },
          }}
        >
          <Box sx={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(34,197,94,0.15), transparent 50%)", pointerEvents: "none" }} />
          <Box sx={{ position: "relative", display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.5fr 1fr" }, gap: 4, alignItems: "center" }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.75rem" }, fontWeight: 900, color: "white", lineHeight: 1.1, mb: 1.5, letterSpacing: "-0.02em" }}>
                Restez{" "}
                <Box component="span" sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "#4ade80" }}>
                  connecté
                </Box>
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.6 }}>
                Recevez nos nouveautés produits, guides techniques et offres exclusives.
                <br />
                Aucun spam, désinscription en 1 clic.
              </Typography>
            </Box>
            <Box>
              <Paper
                elevation={0}
                sx={{
                  display: "flex", alignItems: "center",
                  bgcolor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 99,
                  pl: 3, pr: 1, py: 0.5,
                }}
              >
                <InputBase
                  fullWidth
                  placeholder="Votre adresse e-mail"
                  sx={{ color: "white", fontSize: "0.95rem", "& input::placeholder": { color: "rgba(255,255,255,0.4)", opacity: 1 } }}
                />
                <Button
                  variant="contained"
                  endIcon={<ArrowOutwardIcon sx={{ fontSize: "1rem !important" }} />}
                  sx={{
                    bgcolor: "#16a34a", color: "white",
                    fontWeight: 800, px: 3, py: 1.25,
                    borderRadius: 99,
                    "&:hover": { bgcolor: "#15803d" },
                  }}
                >
                  S'inscrire
                </Button>
              </Paper>
              <Typography sx={{ mt: 1.5, fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
                Rejoignez <Box component="b" sx={{ color: "#4ade80" }}>30 000+</Box> mécaniciens
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Footer body */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "2fr 1fr 1fr 1fr 1.2fr" }, gap: { xs: 6, lg: 6 }, mb: 8 }}>
          {/* Brand */}
          <Box>
            <Box component="img" src="/logo.png" alt="Auto Diesels" sx={{ height: 64, width: "auto", mb: 3 }} />
            <Typography sx={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", color: "white", lineHeight: 1.3, mb: 2 }}>
              "L'excellence du diesel,<br />à prix juste."
            </Typography>
            <Typography sx={{ fontSize: "0.88rem", lineHeight: 1.7, color: "rgba(255,255,255,0.55)", mb: 3, maxWidth: 320 }}>
              Spécialiste en turbos et injecteurs reconditionnés depuis plus de 15 ans.
            </Typography>
            <Stack direction="row" sx={{ gap: 1 }}>
              {[FacebookIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.7)",
                    borderRadius: 2,
                    width: 40, height: 40,
                    "&:hover": { bgcolor: "#16a34a", color: "white", transform: "translateY(-2px)" },
                    transition: "all 0.2s",
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Link columns */}
          {Object.entries(linkGroups).map(([title, items]) => (
            <Box key={title}>
              <Typography sx={{ color: "white", fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", mb: 3 }}>{title}</Typography>
              <Stack spacing={1.75}>
                {items.map((item) => (
                  <Box
                    key={item}
                    component="a"
                    href="#"
                    sx={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      transition: "all 0.2s",
                      "&:hover": { color: "#4ade80", gap: 1.25 },
                    }}
                  >
                    {item}
                    <Box component="span" sx={{ opacity: 0, transition: "opacity 0.2s", "a:hover &": { opacity: 1 } }}>→</Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}

          {/* Contact */}
          <Box>
            <Typography sx={{ color: "white", fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", mb: 3 }}>Contact</Typography>
            <Stack spacing={2.5}>
              {[
                { icon: LocationOnIcon, text: "France & Europe" },
                { icon: EmailIcon,      text: "info@auto-diesels.com", href: "mailto:info@auto-diesels.com" },
                { icon: PhoneIcon,      text: "+33 (0)1 23 45 67 89" },
              ].map(({ icon: Icon, text, href }) => (
                <Box
                  key={text}
                  component={href ? "a" : "div"}
                  href={href}
                  sx={{
                    display: "flex", alignItems: "flex-start", gap: 1.5,
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.88rem",
                    textDecoration: "none",
                    "&:hover": href ? { color: "#4ade80" } : {},
                    transition: "color 0.2s",
                  }}
                >
                  <Box sx={{ width: 32, height: 32, borderRadius: 2, bgcolor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon sx={{ fontSize: 14, color: "#4ade80" }} />
                  </Box>
                  <Box sx={{ pt: 0.5 }}>{text}</Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

        {/* Bottom bar */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-between", gap: 2, py: 4 }}>
          <Typography sx={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Auto Diesels — Euro Système Injection.  Tous droits réservés.
          </Typography>
          <Stack direction="row" sx={{ gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
            {["Mentions légales", "Confidentialité", "CGV"].map((t) => (
              <Box key={t} component="a" href="#" sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", textDecoration: "none", "&:hover": { color: "rgba(255,255,255,0.8)" }, transition: "color 0.2s" }}>
                {t}
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
