import {
  Stack,
  Box,
  useMediaQuery,
  useTheme,
  Link,
  Typography,
  List,
  ListItem,
  Collapse,
  Divider,
} from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

import beigeLogo from "../assets/images/beige_logo.png";
import redLogo from "../assets/images/red_logo.png";
import { useState } from "react";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [policiesOpen, setPoliciesOpen] = useState(false);

  const navLinkStyles = {
    width: "fit-content",
    color: theme.palette.beige,
    textTransform: "uppercase",
    fontSize: isMobile ? "4vw" : "1.2vw",
    fontWeight: "500",
    textDecoration: "none",
    margin: isMobile ? "0 auto" : "",
    transition: "all 0.3s ease",
    position: "relative",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "3px",
      backgroundColor: theme.palette.white,
      bottom: "-5px",
      left: "0",
      transition: "width 0.3s ease",
    },

    "&:hover:before": {
      width: "90%",
    },

    "&:hover": {
      color: theme.palette.white,
      transform: "scale(1.05)",
    },
  };

  const navLinks = {
    socialLinks: [
      {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com",
        label: "Facebook",
      },
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com",
        label: "Instagram",
      },
      {
        icon: <FaWhatsapp />,
        url: "https://www.whatsapp.com",
        label: "WhatsApp",
      },
      {
        icon: <FaTwitter />,
        url: "https://www.twitter.com",
        label: "Twitter",
      },
    ],
    siteLinks: [
      { label: "New Arrivals", url: "#" },
      { label: "our collection", url: "#" },
      { label: "categories", url: "#" },
      { label: "our gallery", url: "#" },
    ],
    contactLinks: [
      { label: "Terms of Service", url: "#" },
      { label: "Return policy", url: "#" },
      { label: "Privacy Policy", url: "#" },
      { label: "FAQ", url: "#" },
    ],
  };

  return isMobile ? (
    <Stack
      bgcolor={theme.palette.beige}
      py={2}
      px={4}
      justifyContent="center"
      alignItems="center"
    >
      <Box width="60vw">
        <Box component="img" src={redLogo} />
      </Box>

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        {/* Site Links */}
        {navLinks.siteLinks.map((link, index) => (
          <ListItem key={index} disablePadding>
            <Link
              href={link.url}
              target="_blank"
              sx={{
                textTransform: "uppercase",
                fontSize: "4vw",
                fontWeight: "600",
                textDecoration: "none",
                textAlign: "center",
                color: theme.palette.red,
              }}
            >
              {link.label}
              <Divider
                sx={{
                  border: 1,
                  borderColor: theme.palette.red,
                  width: 200,
                  margin: "10px 0",
                }}
              />
            </Link>
          </ListItem>
        ))}

        {/* Toggle POLICIES */}
        <ListItem disablePadding>
          <Box
            onClick={() => setPoliciesOpen(!policiesOpen)}
            sx={{
              textTransform: "uppercase",
              fontSize: "4vw",
              fontWeight: "600",
              textDecoration: "none",
              textAlign: "center",
              color: theme.palette.red,
            }}
          >
            POLICIES
            <Divider
              sx={{
                border: 1,
                borderColor: theme.palette.red,
                width: 200,
                margin: "10px auto",
              }}
            />
          </Box>
        </ListItem>

        {/* Collapsible Policy Links */}
        <Collapse in={policiesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {navLinks.contactLinks.map((link, index) => (
              <ListItem key={index} disablePadding>
                <Link
                  href={link.url}
                  target="_blank"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "4vw",
                    fontWeight: "500",
                    textDecoration: "none",
                    textAlign: "center",
                    color: theme.palette.red,
                  }}
                >
                  {link.label}
                  <Divider
                    sx={{
                      border: 1,
                      borderColor: theme.palette.red,
                      width: 200,
                      margin: "10px auto",
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>

      <Stack
        direction="row"
        width="100%"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        {navLinks.socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            sx={{
              color: theme.palette.red,
              fontSize: "5vw",
              transition: "all 0.3s ease",
              "&:hover": {
                color: theme.palette.white,
                transform: "scale(1.1)",
              },
            }}
          >
            {link.icon}
          </Link>
        ))}
      </Stack>
      <Typography
        color={theme.palette.red}
        fontSize="3vw"
        textAlign="center"
        mt={2}
      >
        @2025needle. All rights reserved
      </Typography>
    </Stack>
  ) : (
    <Stack
      height="40vh"
      width="100%"
      bgcolor={theme.palette.red}
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={isMobile ? 4 : 10}
    >
      <Stack height="100%" gap={2} justifyContent="space-between">
        <Box component="img" src={beigeLogo} width="20vw" />
        <Stack direction="row" gap={2}>
          {navLinks.socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              sx={{
                color: theme.palette.beige,
                margin: "0 10px",
                fontSize: "2vw",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: theme.palette.white,
                  transform: "scale(1.1)",
                },
              }}
            >
              {link.icon}
            </Link>
          ))}
        </Stack>
        <Typography color={theme.palette.beige} fontSize="1.2vw">
          @2025needle. All rights reserved
        </Typography>
      </Stack>

      <Stack height="70%" gap={2} justifyContent="space-between">
        {navLinks.siteLinks.map((link, index) => (
          <Link key={index} href={link.url} sx={navLinkStyles}>
            {link.label}
          </Link>
        ))}
      </Stack>

      <Stack height="70%" gap={2} justifyContent="space-between">
        {navLinks.contactLinks.map((link, index) => (
          <Link key={index} href={link.url} sx={navLinkStyles}>
            {link.label}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
