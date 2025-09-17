import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Badge,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavbarNew = () => {
  const theme = useTheme();

  const navLinks = [
    [
      { name: "Home", path: "/" },
      { name: "Shop", path: "#", hasDropdown: true },
      { name: "About Us", path: "/about-us" },
      { name: "Contact", path: "#" },
      { name: "Gallery", path: "#" },
    ],
    [
      { name: "Search", path: "#", icon: <SearchIcon /> },
      { name: "Profile", path: "#", icon: <PersonOutlineIcon /> },
      { name: "Cart", path: "#", icon: <ShoppingCartOutlinedIcon />, badge: 0 },
    ],
  ];

  // State for Shop dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (e) => setAnchorEl(e.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  // Mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  const linkSx = {
    fontFamily: theme.fonts?.primary,
    color: theme.palette.red,
    textDecoration: "none",
    fontSize: { xs: "0.95rem", md: "1rem" },
    px: 1.5,
    py: 0.5,
    borderRadius: 1,
    transition: "background .2s ease, color .2s ease",
    "&:hover": {
      background: theme.palette.beige,
      color: theme.palette.red,
    },
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 0.5,
  };

  const iconBtnSx = {
    color: theme.palette.red,
    "&:hover": { background: theme.palette.beige },
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: theme.palette.beige,
        color: theme.palette.red,
        borderBottom: `1px solid ${theme.palette.beige}`,
        p: { xs: 0, md: 2 },
      }}
    >
      <Toolbar sx={{ minHeight: 72, px: { xs: 2, md: 14 } }}>
        <Box
          sx={{ display: "flex", alignItems: "center", minWidth: 0, flex: 1 }}
        >
          <Box sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }}>
            <IconButton
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: theme.palette.red }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {navLinks[0].map((item) =>
              item.hasDropdown ? (
                <Link
                  key={item.name}
                  sx={linkSx}
                  onClick={handleOpenMenu}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  {item.name}
                  <KeyboardArrowDownIcon fontSize="small" />
                </Link>
              ) : (
                <Link key={item.name} href={item.path} sx={linkSx}>
                  {item.name}
                </Link>
              )
            )}
          </Box>
        </Box>

        {/* CENTER: logo */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Link
            href="/"
            sx={{
              pointerEvents: "auto",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: 100, md: 280 },
                height: "auto",
                objectFit: "contain",
              }}
              src="/images/logo.png"
            />
          </Link>
        </Box>

        {/* RIGHT: icon links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0, sm: 0.5 },
          }}
        >
          {navLinks[1].map((item) => (
            <IconButton
              key={item.name}
              aria-label={item.name}
              sx={iconBtnSx}
              href={item.path}
            >
              {item.badge !== undefined ? (
                <Badge badgeContent={item.badge} color="error">
                  {item.icon}
                </Badge>
              ) : (
                item.icon
              )}
            </IconButton>
          ))}
        </Box>
      </Toolbar>

      {/* Shop dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        sx={{ "& .MuiPaper-root": { mt: 1 } }}
      >
        <MenuItem onClick={handleCloseMenu}>All Products</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Silk Sarees</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Banarasi</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Kanjivaram</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Linen / Cotton</MenuItem>
      </Menu>

      {/* Mobile drawer with primary links */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { bgcolor: theme.palette.beige },
        }}
      >
        <Box
          sx={{
            width: 280,
            bgcolor: theme.palette.beige,
            height: "100%",
            pt: 4,
          }}
        >
          <List sx={{ py: 1 }}>
            {navLinks[0].map((item) => (
              <React.Fragment key={item.name}>
                <ListItemButton
                  component="a"
                  href={item.path}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontFamily: theme.fonts?.primary,
                      color: theme.palette.red,
                    }}
                  />
                </ListItemButton>
                {item.hasDropdown && (
                  <>
                    <Divider />
                    {[
                      "All Products",
                      "Silk Sarees",
                      "Banarasi",
                      "Kanjivaram",
                      "Linen / Cotton",
                    ].map((sub) => (
                      <ListItemButton key={sub} sx={{ pl: 4 }}>
                        <ListItemText
                          primary={sub}
                          primaryTypographyProps={{
                            fontFamily: theme.fonts?.primary,
                          }}
                        />
                      </ListItemButton>
                    ))}
                    <Divider />
                  </>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavbarNew;
