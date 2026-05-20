"use client";

import { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem,
  ListItemButton, ListItemText, Chip, Container, useScrollTrigger, Slide,
  Menu, MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const navLinks = [
  { name: "Turbos", href: "#products", items: ["Turbo Renault", "Turbo Peugeot", "Turbo Citroën", "Turbo Audi", "Turbo BMW", "Turbo VW"] },
  { name: "Injecteurs", href: "#products", items: ["Injecteur Renault", "Injecteur Peugeot", "Injecteur Ford", "Injecteur Toyota"] },
  { name: "Marques", href: "#brands" },
  { name: "Actualités", href: "#news" },
  { name: "Contact", href: "#footer" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEls, setAnchorEls] = useState<Record<string, HTMLElement | null>>({});
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  const openMenu = (e: React.MouseEvent<HTMLElement>, name: string) =>
    setAnchorEls((p) => ({ ...p, [name]: e.currentTarget }));
  const closeMenu = (name: string) =>
    setAnchorEls((p) => ({ ...p, [name]: null }));

  return (
    <>
      {/* Announcement bar */}
      <Box
        sx={{
          bgcolor: "#14532d", color: "white", py: 0.75, textAlign: "center",
          fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.02em",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
          <LocalShippingOutlinedIcon sx={{ fontSize: 14 }} />
          Livraison gratuite dès 200€
        </Box>
        <Box component="span" sx={{ opacity: 0.4 }}>|</Box>
        <span>Expédition 24-48h</span>
        <Box component="span" sx={{ opacity: 0.4 }}>|</Box>
        <span>Garantie 2 ans sur toutes les pièces</span>
      </Box>

      <AppBar
        position="sticky"
        elevation={trigger ? 2 : 0}
        sx={{
          bgcolor: "white",
          borderBottom: trigger ? "none" : "1px solid",
          borderColor: "grey.100",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: { xs: 68, md: 80 }, gap: 2 }}>

            {/* Logo */}
            <Box component="a" href="#" sx={{ display: "flex", alignItems: "center", mr: 3, flexShrink: 0 }}>
              <Box component="img" src="/logo.png" alt="Auto Diesels" sx={{ height: { xs: 52, md: 64 }, width: "auto" }} />
            </Box>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 0.5, flexGrow: 1 }}>
              {navLinks.map((link) =>
                link.items ? (
                  <Box key={link.name}>
                    <Button
                      onClick={(e) => openMenu(e, link.name)}
                      endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1rem !important", transition: "transform 0.2s", transform: anchorEls[link.name] ? "rotate(180deg)" : "none" }} />}
                      sx={{ color: "text.primary", fontWeight: 600, fontSize: "0.875rem", px: 1.5, "&:hover": { bgcolor: "grey.50", color: "primary.main" } }}
                    >
                      {link.name}
                    </Button>
                    <Menu
                      anchorEl={anchorEls[link.name]}
                      open={Boolean(anchorEls[link.name])}
                      onClose={() => closeMenu(link.name)}
                      slotProps={{ paper: { elevation: 8, sx: { borderRadius: 3, mt: 1, minWidth: 200, border: "1px solid", borderColor: "grey.100", "& .MuiMenuItem-root": { fontSize: "0.875rem", py: 1.25, "&:hover": { bgcolor: "#f0fdf4", color: "primary.main" } } } } }}
                    >
                      {link.items.map((item) => (
                        <MenuItem key={item} onClick={() => closeMenu(link.name)} component="a" href="#products">{item}</MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button key={link.name} href={link.href} sx={{ color: "text.primary", fontWeight: 600, fontSize: "0.875rem", px: 1.5, "&:hover": { bgcolor: "grey.50", color: "primary.main" } }}>
                    {link.name}
                  </Button>
                )
              )}
            </Box>

            {/* Right actions */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
              <IconButton sx={{ color: "text.secondary", display: { xs: "none", sm: "flex" } }}>
                <SearchIcon />
              </IconButton>

              <Button
                variant="contained"
                href="#products"
                sx={{
                  display: { xs: "none", md: "flex" },
                  bgcolor: "primary.main",
                  fontWeight: 700,
                  px: 2.5,
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Nos pièces
              </Button>

              <IconButton sx={{ position: "relative", color: "text.secondary" }}>
                <ShoppingCartOutlinedIcon />
                <Box sx={{ position: "absolute", top: 4, right: 4, width: 10, height: 10, bgcolor: "primary.main", borderRadius: "50%", border: "2px solid white" }} />
              </IconButton>

              <IconButton sx={{ display: { lg: "none" }, color: "text.primary" }} onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: 300, pt: 2 } } }}
      >
        <Box sx={{ px: 2, mb: 2 }}>
          <Box component="img" src="/logo.png" alt="Auto Diesels" sx={{ height: 48, width: "auto" }} />
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.name} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: 2, mx: 1, "&:hover": { bgcolor: "primary.50", color: "primary.main" } }}
              >
                <ListItemText primary={link.name} slotProps={{ primary: { sx: { fontWeight: 600 } } }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ px: 3, mt: 2 }}>
          <Button variant="contained" fullWidth href="#products" onClick={() => setDrawerOpen(false)} sx={{ fontWeight: 700 }}>
            Voir nos pièces
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
