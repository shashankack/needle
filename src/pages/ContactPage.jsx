import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Card,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Facebook,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";

import ContactSection from "../components/sections/ContactSection";
import contactOverlay from "../assets/images/vectors/contactOverlay.png";
import crest from "../assets/images/vectors/crest.png";

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const contactInfo = [
    {
      icon: <Phone />,
      title: "Phone",
      details: ["+91 80 2345 6789", "+91 98765 43210"],
    },
    {
      icon: <Email />,
      title: "Email",
      details: ["info@needle.in", "hello@needle.in"],
    },
    {
      icon: <LocationOn />,
      title: "Address",
      details: [
        "123 Fashion Street",
        "Koramangala, Bengaluru",
        "Karnataka 560034",
      ],
    },
    {
      icon: <AccessTime />,
      title: "Store Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: 11:00 AM - 6:00 PM"],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "75vh" },
          background: `linear-gradient(135deg, rgba(189, 55, 87, 0.95) 0%, rgba(47, 107, 80, 0.85) 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="0.5" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="1.5" fill="white" opacity="0.05"/><circle cx="90" cy="90" r="1" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.8" fill="white" opacity="0.08"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')`,
            zIndex: 1,
          },
        }}
      >
        {/* Background Pattern */}
        <Box
          component="img"
          src={contactOverlay}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-5deg)",
            width: { xs: "140%", md: "100%" },
            height: "auto",
            opacity: 0.15,
            zIndex: 2,
            filter: `brightness(1.2) contrast(1.1)`,
          }}
        />

        {/* Hero Content */}
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 3 }}>
          <Stack alignItems="center" spacing={4}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={crest}
                sx={{
                  width: { xs: 80, md: 120 },
                  height: "auto",
                  filter: 'brightness(0) invert(1)',
                  animation: "float 3s ease-in-out infinite",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 100, md: 150 },
                  height: { xs: 100, md: 150 },
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                  animation: "pulse 2s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { transform: "scale(1)", opacity: 0.3 },
                    "50%": { transform: "scale(1.1)", opacity: 0.1 },
                  },
                }}
              />
            </Box>

            <Stack alignItems="center" spacing={2}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "5rem" },
                  fontWeight: 800,
                  color: "#F8F4E7",
                  textAlign: "center",
                  fontFamily: theme.typography.fontFamily,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  lineHeight: 0.9,
                }}
              >
                Get In
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "5rem" },
                  fontWeight: 300,
                  color: "#F8F4E7",
                  textAlign: "center",
                  fontFamily: theme.typography.fontFamily,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  fontStyle: "italic",
                  lineHeight: 0.9,
                }}
              >
                Touch
              </Typography>
            </Stack>

            <Box
              sx={{
                width: { xs: 60, md: 100 },
                height: 2,
                background: "linear-gradient(90deg, transparent 0%, #F8F4E7 50%, transparent 100%)",
                borderRadius: 1,
                opacity: 0.8,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: "#F8F4E7",
                textAlign: "center",
                maxWidth: "700px",
                opacity: 0.95,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 300,
                lineHeight: 1.6,
                textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                px: 2,
              }}
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              {[1, 2, 3].map((dot) => (
                <Box
                  key={dot}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#F8F4E7",
                    opacity: 0.6,
                    animation: `dotPulse 1.5s ease-in-out infinite ${dot * 0.2}s`,
                    "@keyframes dotPulse": {
                      "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
                      "50%": { opacity: 0.8, transform: "scale(1.2)" },
                    },
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Title Section */}
      <Box
        sx={{ py: { xs: 4, md: 6 }, bgcolor: theme.palette.background.default }}
      >
        <Container maxWidth="xl">
          <Stack alignItems="center" spacing={2}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                color: theme.palette.primary.main,
                textAlign: "center",
                fontFamily: theme.typography.fontFamily,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 3,
                bgcolor: theme.palette.primary.main,
                borderRadius: 2,
              }}
            />
          </Stack>
        </Container>
      </Box>

      {/* Contact Information Cards */}
      <Box
        sx={{ py: { xs: 4, md: 6 }, bgcolor: theme.palette.background.default }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
                }}
                key={index}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    bgcolor: theme.palette.background.default,
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: `0 10px 30px rgba(189, 55, 87, 0.2)`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        bgcolor: theme.palette.primary.main,
                        color: '#F8F4E7',
                        mb: 2,
                      }}
                    >
                      {React.cloneElement(info.icon, { fontSize: "large" })}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        mb: 1,
                        fontFamily: theme.typography.fontFamily,
                      }}
                    >
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          lineHeight: 1.6,
                          fontSize: "0.9rem",
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Contact Section (Form + Map) */}
      <ContactSection />

      {/* Social Media & Additional Info */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: '#F8F4E7' }}>
        <Container maxWidth="xl">
          <Stack spacing={4} alignItems="center">
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                textAlign: "center",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Connect With Us
            </Typography>

            <Stack direction="row" spacing={2}>
              <IconButton
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: '#F8F4E7',
                  width: 50,
                  height: 50,
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: '#F8F4E7',
                  width: 50,
                  height: 50,
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: '#F8F4E7',
                  width: 50,
                  height: 50,
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <WhatsApp />
              </IconButton>
            </Stack>

            <Box sx={{ textAlign: "center", maxWidth: 600 }}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                Visit our showroom to experience our curated collection in
                person. Our team of styling experts is here to help you find the
                perfect pieces that reflect your unique style.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.secondary.main,
                  fontStyle: "italic",
                }}
              >
                "Fashion is about expressing who you are without having to
                speak"
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;
