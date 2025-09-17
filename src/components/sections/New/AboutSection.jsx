import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const AboutSection = () => {
  const theme = useTheme();
  const {
    red = "#BD3757",
    white = "#F8F4E7",
    beige = "#F4E6CD",
    green = "#2F6B50",
  } = theme.palette || {};
  const primaryFont = theme?.fonts?.primary || "Montserrat, sans-serif";

  return (
    <Box component="section" sx={{ bgcolor: white, py: { xs: 6, md: 20 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Text */}
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Stack spacing={2}>
              <Typography
                variant="overline"
                fontWeight={600}
                sx={{
                  letterSpacing: ".12em",
                  color: green,
                  fontFamily: primaryFont,
                }}
              >
                About Needle
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontFamily: primaryFont,
                  color: green,
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  lineHeight: 1.2,
                }}
              >
                Heritage in every thread, modernity in every silhouette.
              </Typography>

              <Typography sx={{ color: "#6b5842", lineHeight: 1.8 }}>
                Based in Bengaluru, <strong>Needle</strong> blends traditional
                Indian craftsmanship with modern Western design to create
                elegant, enduring pieces. From artisanal techniques to
                thoughtful tailoring, every garment is made to elevate your
                celebrations one thread at a time.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={1}>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/about-us"
                  sx={{
                    bgcolor: green,
                    color: white,
                    px: 3,
                    py: 1.25,
                    borderRadius: 2,
                    fontFamily: primaryFont,
                    textTransform: "none",
                    "&:hover": { bgcolor: green },
                  }}
                >
                  Learn more
                </Button>
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/lookbook"
                  sx={{
                    borderColor: red,
                    color: red,
                    px: 3,
                    py: 1.25,
                    borderRadius: 2,
                    fontFamily: primaryFont,
                    textTransform: "none",
                    "&:hover": { borderColor: red, bgcolor: white },
                  }}
                >
                  View lookbook
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Visual (placeholder—swap with an image if you have one) */}
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Box
              sx={{
                borderRadius: 2,
                height: { xs: 240, md: 360 },
                bgcolor: beige,
                border: `1px solid ${beige}`,
                boxShadow: 1,
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.03), rgba(0,0,0,0) 40%), radial-gradient(circle at 30% 20%, rgba(0,0,0,0.04), transparent 45%)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
