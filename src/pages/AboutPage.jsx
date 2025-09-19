import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CompostIcon from "@mui/icons-material/Compost";

const Section = ({ children, bg, id, py = { xs: 6, md: 10 } }) => (
  <Box component="section" id={id} sx={{ bgcolor: bg, py }}>
    <Container maxWidth="lg">{children}</Container>
  </Box>
);

const ValueCard = ({ icon, title, desc, accent }) => {
  const theme = useTheme();
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 2,
        border: `1px solid ${theme.palette.primary.main}`,
        bgcolor: theme.palette.background.default,
        transition: "transform .2s ease, box-shadow .2s ease",
        "&:hover": { transform: "translateY(-2px)", boxShadow: 1 },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            mb: 2,
            bgcolor: theme.palette.primary.main + "18",
            color: theme.palette.primary.main,
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h6"
          sx={{ mb: 1, color: theme.palette.primary.main, fontWeight: 700 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.primary, lineHeight: 1.7 }}
          textAlign={"justify"}
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

const AboutPage = () => {
  const theme = useTheme();

  const values = [
    {
      icon: <CheckroomIcon />,
      title: "Elegance & Craftsmanship",
      desc: "Impeccable construction, intricate detailing, and finishes that last each piece is made to be worn and re-worn.",
    },
    {
      icon: <AutoAwesomeIcon />,
      title: "Modern Tradition",
      desc: "Classic Indian techniques meet modern Western tailoring to create silhouettes that feel timeless yet current.",
    },
    {
      icon: <PersonOutlineIcon />,
      title: "Personalized Style",
      desc: "Clothing that reflects your taste and cultural roots, designed to move with your life and your celebrations.",
    },
    {
      icon: <CompostIcon />,
      title: "Sustainability",
      desc: "Ethical practices, small-batch production, and eco-friendly materials responsibility woven into every step.",
    },
  ];

  return (
    <>
      {/* Optional SEO */}
      {/* <Helmet>
        <title>About Needle | Indo-Western Boutique in Bengaluru</title>
        <meta
          name="description"
          content="Needle blends traditional Indian craftsmanship with modern Western design. Discover our story, values, and bespoke design services crafted in Bengaluru."
        />
      </Helmet> */}

      {/* HERO */}
      <Box
        component="header"
        sx={{
          bgcolor: theme.palette.background.default,
          borderBottom: `1px solid ${theme.palette.primary.main}22`,
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h1"
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "2rem", md: "3rem" },
                color: theme.palette.primary.main,
                lineHeight: 1.2,
              }}
            >
              Heritage in Every Thread. Modernity in Every Silhouette.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                maxWidth: 800,
                color: theme.palette.text.primary,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Needle is an upscale Bengaluru boutique blending traditional
              Indian craftsmanship with modern Western design - elevating every
              celebration, one thread at a time.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* STORY */}
      <Section id="story" bg={theme.palette.background.default}>
        <Grid container spacing={4} alignItems="center">
          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: theme.typography.fontFamily,
                mb: 2,
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", lineHeight: 1.9 }}
              textAlign={"justify"}
            >
              Born from a love for heritage and a passion for design, Needle is
              where handwork meets modern tailoring. We partner closely with
              artisan clusters and independent ateliers, ensuring fair wages,
              safe working conditions, and room to grow. Small batch production,
              careful sourcing, and low-impact dyeing help us honor the craft
              and the planet.
              <br />
              <br />
              From handwoven silks and breathable cottons to heirloom-worthy
              embroideries, each Needle piece carries the soul of its origin
              techniques passed down through generations, reimagined with
              contemporary ease.
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            {/* <Box
              sx={{
                borderRadius: 2,
                height: { xs: 240, md: 320 },
                bgcolor: theme.palette.beige,
                border: `1px solid ${theme.palette.beige}`,
                boxShadow: 1,
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.03), rgba(0,0,0,0) 40%), radial-gradient(circle at 30% 20%, rgba(0,0,0,0.04), transparent 45%)",
              }}
            /> */}
            <Box
              component="img"
              src="/images/temp.jpg"
              sx={{
                borderRadius: 2,
                height: { xs: 240, md: 360 },
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Section>

      {/* VALUES */}
      <Section
        id="values"
        bg={theme.palette.background.default}
        py={{ xs: 4, md: 6 }}
      >
        <Divider
          sx={{
            mb: { xs: 4, md: 6 },
            borderColor: theme.palette.primary.main + "22",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.primary.main,
            textAlign: "center",
            mb: 3,
          }}
        >
          Our Values
        </Typography>

        <Grid container spacing={3}>
          {values.map((v, i) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
              key={v.title}
            >
              <ValueCard
                icon={v.icon}
                title={v.title}
                desc={v.desc}
                accent={theme.palette.red}
              />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* CRAFT & PROCESS */}
      <Section id="process" bg={theme.palette.background.default}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Box
              sx={{
                borderRadius: 2,
                height: { xs: 220, md: 320 },
                bgcolor: theme.palette.background.default,
                border: `1px dashed ${theme.palette.primary.main}22`,
                boxShadow: "none",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{ p: 2, height: "100%" }}
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 2,
                    bgcolor: theme.palette.primary.main + "18",
                    border: `1px solid ${theme.palette.primary.main}22`,
                  }}
                />
                <Box
                  sx={{
                    width: 120,
                    height: 160,
                    borderRadius: 2,
                    bgcolor: theme.palette.primary.main + "18",
                    border: `1px solid ${theme.palette.primary.main}22`,
                  }}
                />
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 2,
                    bgcolor: theme.palette.primary.main + "18",
                    border: `1px solid ${theme.palette.primary.main}22`,
                  }}
                />
              </Stack>
            </Box>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.primary.main,
                mb: 2,
              }}
            >
              Craft & Process
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.primary, lineHeight: 1.9 }}
            >
              We build thoughtfully: from responsible sourcing to meticulous
              finishing. By working directly with skilled makers, we protect
              both the craft and the craftsperson. Every Needle garment is
              designed for longevity—timeless construction, refined fit, and
              versatile styling that outlives trends.
            </Typography>
          </Grid>
        </Grid>
      </Section>

      {/* BESPOKE CTA */}
      <Box
        sx={{
          bgcolor: theme.palette.background.default,
          py: { xs: 6, md: 8 },
          borderTop: `1px solid ${theme.palette.primary.main}22`,
          borderBottom: `1px solid ${theme.palette.primary.main}22`,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h4"
              sx={{
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.primary.main,
              }}
            >
              Bespoke & Personal
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 800,
                color: theme.palette.text.primary,
                lineHeight: 1.9,
              }}
            >
              Weddings, festive moments, or a one-of-a-kind idea—co-create with
              our design team. Choose fabrics, silhouettes, and embellishments
              for a piece that feels uniquely yours.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 1 }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.background.default,
                  px: 3,
                  py: 1.25,
                  borderRadius: 2,
                  fontFamily: theme.typography.fontFamily,
                  textTransform: "none",
                  "&:hover": { bgcolor: theme.palette.secondary.main },
                }}
                href="/custom"
              >
                Start a Custom Order
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  px: 3,
                  py: 1.25,
                  borderRadius: 2,
                  fontFamily: theme.typography.fontFamily,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: theme.palette.secondary.main,
                    bgcolor: theme.palette.background.default,
                  },
                }}
                href="/lookbook"
              >
                View Lookbook
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* CONTACT / VISIT */}
      <Section
        id="visit"
        bg={theme.palette.background.default}
        py={{ xs: 6, md: 8 }}
      >
        <Stack spacing={1.5} alignItems="center" textAlign="center">
          <Typography
            variant="h5"
            sx={{
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.primary.main,
            }}
          >
            Crafted in Bengaluru. Made to be worn anywhere.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.primary }}
          >
            Visit our studio or write to us for appointments and custom
            consultations.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 1 }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                px: 2.5,
                borderRadius: 2,
                fontFamily: theme.typography.fontFamily,
                textTransform: "none",
                "&:hover": { borderColor: theme.palette.secondary.main },
              }}
              href="/contact"
            >
              Contact Us
            </Button>
            <Button
              variant="text"
              sx={{
                color: theme.palette.secondary.main,
                fontFamily: theme.typography.fontFamily,
                textTransform: "none",
              }}
              href="https://maps.app.goo.gl/1vBfUN5QvMSE75YN6"
            >
              Find Us in Bengaluru →
            </Button>
          </Stack>
        </Stack>
      </Section>
    </>
  );
};

export default AboutPage;
