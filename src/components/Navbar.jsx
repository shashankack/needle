import { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Drawer,
  Divider,
} from "@mui/material";

import redLogo from "../assets/images/red_logo.png";
import beigeLogo from "../assets/images/beige_logo.png";

import {
  FaBagShopping,
  FaCartShopping,
  FaUser,
  FaHouse,
  FaMagnifyingGlass,
} from "react-icons/fa6";

import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollLimitReached, setIsScrollLimitReached] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > prevScrollY.current;

      // Update scroll limit flag
      setIsScrollLimitReached(currentScrollY > 900);

      // Handle isScrolled correctly at all ranges
      if (currentScrollY > 1000 && isScrollingDown) {
        setIsScrolled(true);
      } else if (currentScrollY > 1000 && !isScrollingDown) {
        setIsScrolled(false);
      } else if (currentScrollY <= 1000) {
        setIsScrolled(false); // Always reset when under threshold
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "Home",
      icon: <FaHouse />,
      redirect: "/",
    },
    {
      label: "Shop",
      icon: <FaBagShopping />,
      redirect: "/shop",
    },
    {
      label: "Cart",
      icon: <FaCartShopping />,
      redirect: "/cart",
    },
    {
      label: "Profile",
      icon: <FaUser />,
      redirect: "/profile",
    },
  ];

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        background: isScrollLimitReached ? theme.palette.red : "transparent",
        gap: 10,
        py: 2,
        px: isMobile ? 2 : 4,
        transform: isScrolled ? "translateY(-100%)" : "translateY(0)",
        transition: "all 0.5s ease",
      }}
    >
      <Box width={isMobile ? "25vw" : 140} zIndex={20}>
        <Box component="img" src={isScrollLimitReached ? beigeLogo : redLogo} />
      </Box>
      {isMobile ? (
        <>
          {/* Mobile Toggle Button */}
          <Box>
            <IconButton
              sx={{
                color: theme.palette.beige,
              }}
              onClick={() => setMenuOpen(true)}
            >
              <IoMenu size={40} />
            </IconButton>
          </Box>

          {/* Drawer Menu */}
          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: theme.palette.red,
                color: theme.palette.beige,
                width: "80vw",
                padding: 2,
              },
            }}
          >
            <Box display="flex" justifyContent="flex-end">
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{ color: theme.palette.beige }}
              >
                <IoClose size={40} />
              </IconButton>
            </Box>

            <Box display="flex" flexDirection="column" gap={2} mt={2}>
              {navLinks.map((link) => (
                <Box
                  key={link.label}
                  onClick={() => {
                    window.location.href = link.redirect;
                    setMenuOpen(false);
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    fontWeight: 600,
                    fontSize: 24,
                    color: theme.palette.beige,
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: theme.palette.red,
                    },
                  }}
                >
                  {link.icon}
                  {link.label}
                </Box>
              ))}
            </Box>
          </Drawer>
        </>
      ) : (
        <>
          {/* Search */}

          <Box flex={1}>
            <TextField
              placeholder="Search"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: isScrollLimitReached
                    ? "#F4E6CD"
                    : "#F4E6CD10",
                  borderRadius: 6,
                  paddingLeft: 1,
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: isScrollLimitReached
                      ? "#F4E6CDdd"
                      : "#F4E6CD10",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: isScrollLimitReached
                      ? theme.palette.beige
                      : "transparent",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: isScrollLimitReached
                      ? theme.palette.beige
                      : "transparent",
                  },
                },
                input: {
                  color: isScrollLimitReached
                    ? theme.palette.red
                    : theme.palette.beige,
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaMagnifyingGlass
                        style={{
                          color: isScrollLimitReached
                            ? theme.palette.red
                            : theme.palette.red,
                          marginInline: 8,
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Box gap={6} display="flex" alignItems="center">
            {navLinks.map((link) => (
              <IconButton
                key={link.label}
                sx={{
                  color: !isScrolled ? theme.palette.beige : theme.palette.red,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: !isScrolled
                      ? theme.palette.red
                      : theme.palette.beige,
                    transform: "scale(1.1)",
                  },
                }}
                onClick={() => {
                  window.location.href = link.redirect;
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </>
      )}
    </AppBar>
  );
};

export default Navbar;
