import React from "react";
import {
  Stack,
  Typography,
  Chip,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { toNumber } from "../../lib/helpers";
import productsData from "../../assets/productsData.json";

// Format price safely
const formatINR = (v) => v?.toString?.() ?? v;

const BestSellersSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    borderRadius: 4,
    boxShadow: 3,
    background: theme.palette.background.default,
    overflow: "hidden",
    transition: "box-shadow .3s, transform .3s",
    fontFamily: theme.typography.fontFamily,
    position: "relative",
    border: `1.5px solid ${"primary.main"}10`,
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: `0 12px 40px rgba(189, 55, 87, 0.25)`,
    },
  };

  const imageWrapperStyles = {
    position: "relative",
    width: "100%",
    aspectRatio: "3/4",
    overflow: "hidden",
    background: theme.palette.secondary.main + "10",
    borderBottom: `2px solid ${"primary.main"}22`,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "all .3s ease",
    },
    "&:hover img": {
      transform: "scale(1.07)",
      filter: "brightness(0.92)",
      cursor: "pointer",
    },
  };

  const titleStyles = {
    fontSize: { xs: "1.05rem", sm: "1.15rem" },
    textAlign: "start",
    color: "primary.main",
    fontWeight: 700,
    letterSpacing: 0.2,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    minHeight: { xs: 48, sm: 52 },
    fontFamily: theme.typography.fontFamily,
  };

  return (
    <Stack spacing={2} mt={10} mb={20} alignItems="center">
      {/* Section heading */}
      <Typography
        variant="h1"
        textAlign="center"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem" },
        }}
      >
        Our Best Sellers
      </Typography>

      {/* Product carousel */}
      <Box width="95%" mx="auto">
        <Swiper
          style={{
            "--swiper-navigation-color": "#f4e6cd",
            "--swiper-pagination-color": "#BD3757",
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
          {productsData.map((p, i) => {
            const mrp = toNumber(p.price?.mrp);
            const offer = toNumber(p.price?.offer_price);

            const hasDiscount =
              mrp != null && offer != null && mrp > 0 && offer < mrp;

            const discountPercent = hasDiscount
              ? Math.round(((mrp - offer) / mrp) * 100)
              : 0;

            return (
              <SwiperSlide key={i} style={{ height: "auto", display: "flex" }}>
                <Card
                  sx={cardStyles}
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  {hasDiscount && (
                    <Chip
                      label={`-${discountPercent}%`}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        px: 0.5,
                        py: 2,
                        borderRadius: "8px",
                        boxShadow: 2,
                        backgroundColor: "primary.main",
                        color: "background.default",
                        zIndex: 2,
                      }}
                    />
                  )}

                  {/* Image */}
                  <Box sx={imageWrapperStyles}>
                    <Box component="img" src={p.thumbnail} alt={p.title} />
                  </Box>

                  {/* Content */}
                  <CardContent /* ... */>
                    <Typography variant="subtitle1" sx={titleStyles}>
                      {p.title}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      alignItems="baseline"
                      mt={0.5}
                      mb={1}
                    >
                      {hasDiscount && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: "primary.main",
                            textDecoration: "line-through",
                            opacity: 0.7,
                            fontWeight: 500,
                          }}
                        >
                          {formatINR(mrp)}
                        </Typography>
                      )}
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.secondary.main,
                          fontSize: "1.1rem",
                        }}
                      >
                        {formatINR(offer ?? p.price?.offer_price)}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>

      {/* View all CTA */}
      <Box textAlign="center" mt={2}>
        <Button
          variant="contained"
          sx={{
            px: 3,
            py: 1,
            borderRadius: 2,
            textTransform: "none",
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
