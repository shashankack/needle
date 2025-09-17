import React from "react";
import {
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import productsData from "../../../assets/productsData.json";

// Format price safely
const formatINR = (v) => v?.toString?.() ?? v;

const BestSellersSection = () => {
  const theme = useTheme();

  // ✅ Reusable styles
  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    borderRadius: 2,
    boxShadow: 2,
    bgcolor: theme.palette.white,
    overflow: "hidden",
    transition: "box-shadow .3s ease",
    "&:hover": { boxShadow: 4 },
  };

  const imageWrapperStyles = {
    position: "relative",
    width: "100%",
    aspectRatio: "3/4",
    overflow: "hidden",
    background: theme.palette.beige,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "all .3s ease",
    },
    "&:hover img": {
      transform: "scale(1.05)",
      filter: "brightness(0.8)",
      cursor: "pointer",
    },
  };

  const titleStyles = {
    fontFamily: theme.fonts?.primary,
    fontSize: { xs: "0.95rem", sm: "1rem" },
    color: "#6b5842",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    minHeight: { xs: 48, sm: 52 }, // keeps rows aligned
  };

  return (
    <Stack spacing={2} mt={10} mb={20} alignItems="center">
      {/* Section heading */}
      <Typography
        variant="h1"
        textAlign="center"
        sx={{
          fontFamily: theme.fonts?.primary,
          fontSize: { xs: "2rem", sm: "2.5rem" },
          color: theme.palette.green,
        }}
      >
        Our Best Sellers
      </Typography>

      {/* Product carousel */}
      <Box width="95%" mx="auto">
        <Swiper
          style={{
            "--swiper-navigation-color": theme.palette.red,
            "--swiper-pagination-color": theme.palette.red,
            padding: "2px",
          }}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1536: { slidesPerView: 5 },
          }}
        >
          {productsData.map((p, i) => (
            <SwiperSlide key={i} style={{ height: "auto", display: "flex" }}>
              <Card sx={cardStyles}>
                {/* Image */}
                <Box sx={imageWrapperStyles}>
                  <Box component="img" src={p.thumbnail} alt={p.title} />
                </Box>

                {/* Content */}
                <CardContent sx={{ textAlign: "center", p: 2 }}>
                  <Typography variant="subtitle1" sx={titleStyles}>
                    {p.title}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    alignItems="baseline"
                    mt={0.5}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        textDecoration: "line-through",
                        opacity: 0.7,
                      }}
                    >
                      {formatINR(p.price?.mrp)}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.red, fontWeight: 700 }}
                    >
                      {formatINR(p.price?.offer_price)}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* View all CTA */}
      <Box textAlign="center" mt={2}>
        <Button
          variant="contained"
          sx={{
            bgcolor: theme.palette.green,
            color: theme.palette.white,
            px: 3,
            py: 1,
            borderRadius: 2,
            fontFamily: theme.fonts?.primary,
            textTransform: "none",
            "&:hover": { bgcolor: theme.palette.green },
          }}
          href="/shop"
        >
          View all
        </Button>
      </Box>
    </Stack>
  );
};

export default BestSellersSection;
