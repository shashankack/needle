import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  Chip,
  Breadcrumbs,
  Link,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ShoppingCart,
  Favorite,
  FavoriteBorder,
  Share,
  ExpandMore,
  LocalShipping,
  NavigateNext,
  Home,
  ShoppingBag,
  AssignmentReturn,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import productsData from "../assets/productsData.json";
import { toNumber } from "../lib/helpers";

const ProductDetailsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = productsData.find((p) => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);

      // Get related products (same category or random)
      const related = productsData
        .filter((p) => p.id !== parseInt(productId))
        .slice(0, 4);
      setRelatedProducts(related);
    } else {
      // Product not found, redirect to home
      navigate("/");
    }
  }, [productId, navigate]);

  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Loading product...</Typography>
      </Box>
    );
  }

  const mrp = toNumber(product.price?.mrp);
  const offer = toNumber(product.price?.offer_price);
  const hasDiscount = mrp != null && offer != null && mrp > 0 && offer < mrp;
  const discountPercent = hasDiscount
    ? Math.round(((mrp - offer) / mrp) * 100)
    : 0;

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Added to cart:", {
      product,
    });
  };

  const handleBuyNow = () => {
    // Buy now logic here
    console.log("Buy now:", {
      product,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, minHeight: "100vh" }}>
      {/* Breadcrumbs */}
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          sx={{ color: theme.palette.text.primary }}
        >
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.text.primary,
              textDecoration: "none",
              "&:hover": { color: theme.palette.primary.main },
            }}
          >
            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/shop")}
            sx={{
              color: theme.palette.text.primary,
              textDecoration: "none",
              "&:hover": { color: theme.palette.primary.main },
            }}
          >
            Shop
          </Link>
          <Typography color="text.primary" variant="body2">
            {product.title}
          </Typography>
        </Breadcrumbs>
      </Container>

      {/* Main Product Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
        <Grid container spacing={4}>
          {/* Product Images */}
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Box sx={{ position: "relative" }}>
              {/* Main Image Carousel */}
              <Swiper
                style={{
                  "--swiper-navigation-color": theme.palette.primary.main,
                  "--swiper-pagination-color": theme.palette.primary.main,
                }}
                spaceBetween={10}
                navigation={!isMobile}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Pagination, Thumbs]}
                className="product-main-swiper"
              >
                {/* Main product image */}
                <SwiperSlide>
                  <Box
                    component="img"
                    src={product.thumbnail}
                    alt={product.title}
                    sx={{
                      width: "100%",
                      height: { xs: "400px", md: "600px" },
                      objectFit: "cover",
                      borderRadius: 2,
                      boxShadow: 3,
                    }}
                  />
                </SwiperSlide>

                {/* Additional product images (you can add more) */}
                {[1, 2, 3].map((i) => (
                  <SwiperSlide key={i}>
                    <Box
                      component="img"
                      src={product.thumbnail}
                      alt={`${product.title} view ${i}`}
                      sx={{
                        width: "100%",
                        height: { xs: "400px", md: "600px" },
                        objectFit: "cover",
                        borderRadius: 2,
                        boxShadow: 3,
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Carousel */}
              <Box sx={{ mt: 2 }}>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  watchSlidesProgress={true}
                  modules={[Thumbs]}
                  className="product-thumbs-swiper"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <SwiperSlide key={i}>
                      <Box
                        component="img"
                        src={product.thumbnail}
                        alt={`Thumbnail ${i + 1}`}
                        sx={{
                          width: "100%",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: 1,
                          cursor: "pointer",
                          border: "2px solid transparent",
                          "&.swiper-slide-thumb-active": {
                            borderColor: theme.palette.primary.main,
                          },
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>

              {/* Discount Badge */}
              {hasDiscount && (
                <Chip
                  label={`-${discountPercent}%`}
                  sx={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    bgcolor: theme.palette.primary.main,
                    color: "#F8F4E7",
                    fontWeight: 700,
                    zIndex: 2,
                  }}
                />
              )}
            </Box>
          </Grid>

          {/* Product Information */}
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Stack spacing={3}>
              {/* Title */}
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 1,
                    lineHeight: 1.2,
                  }}
                >
                  {product.title}
                </Typography>
              </Box>

              {/* Price */}
              <Box>
                <Stack direction="row" alignItems="baseline" spacing={2}>
                  {hasDiscount && (
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.text.primary,
                        textDecoration: "line-through",
                        opacity: 0.7,
                      }}
                    >
                      {product.price.mrp}
                    </Typography>
                  )}
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.secondary.main,
                      fontSize: "2rem",
                    }}
                  >
                    {product.price.offer_price}
                  </Typography>
                </Stack>
                {hasDiscount && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      mt: 0.5,
                    }}
                  >
                    You save
                    {product.price.mrp.replace("₹", "") -
                      product.price.offer_price.replace("₹", "")}{" "}
                    ({discountPercent}%)
                  </Typography>
                )}
              </Box>

              {/* Action Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleAddToCart}
                  startIcon={<ShoppingCart />}
                  sx={{
                    flex: 1,
                    py: 1.5,
                    borderRadius: 2,
                    bgcolor: theme.palette.primary.main,
                    "&:hover": {
                      bgcolor: theme.palette.secondary.main,
                    },
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleBuyNow}
                  startIcon={<ShoppingBag />}
                  sx={{
                    flex: 1,
                    py: 1.5,
                    borderRadius: 2,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    "&:hover": {
                      bgcolor: theme.palette.primary.main,
                      color: "#F8F4E7",
                    },
                  }}
                >
                  Buy Now
                </Button>
              </Stack>

              {/* Action Icons */}
              <Stack direction="row" spacing={1} justifyContent="center">
                <IconButton
                  onClick={() => setIsFavorite(!isFavorite)}
                  sx={{
                    bgcolor: "#F8F4E7",
                    color: theme.palette.primary.main,
                    "&:hover": {
                      bgcolor: theme.palette.primary.main,
                      color: "#F8F4E7",
                    },
                  }}
                >
                  {isFavorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <IconButton
                  onClick={handleShare}
                  sx={{
                    bgcolor: "#F8F4E7",
                    color: theme.palette.primary.main,
                    "&:hover": {
                      bgcolor: theme.palette.primary.main,
                      color: "#F8F4E7",
                    },
                  }}
                >
                  <Share />
                </IconButton>
              </Stack>

              {/* Shipping Info */}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "#F8F4E7",
                  border: `1px solid ${theme.palette.primary.main}20`,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocalShipping sx={{ color: theme.palette.secondary.main }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Free Shipping
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.primary, opacity: 0.8 }}
                    >
                      Orders over ₹999 qualify for free shipping
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
              <Card
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: "#F8F4E7",
                  border: `1px solid ${theme.palette.primary.main}20`,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Why Choose Us?
                </Typography>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {/* <Verified sx={{ color: theme.palette.secondary.main }} /> */}
                    <Typography variant="body2">
                      100% Authentic Products
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <LocalShipping
                      sx={{ color: theme.palette.secondary.main }}
                    />
                    <Typography variant="body2">
                      Free Shipping on Orders ₹999+
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <AssignmentReturn
                      sx={{ color: theme.palette.secondary.main }}
                    />
                    <Typography variant="body2">
                      30-Day Return Policy
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Product Details Accordion */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid size={12}>
            <Stack spacing={2}>
              <Typography
                variant="h4"
                sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
              >
                Product Details
              </Typography>

              <Accordion
                defaultExpanded
                sx={{
                  bgcolor: theme.palette.background.default,
                  boxShadow: "none",
                  border: `1px solid ${theme.palette.primary.main}`,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore sx={{ color: theme.palette.primary.main }} />
                  }
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Description
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    {product.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  bgcolor: theme.palette.background.default,
                  boxShadow: "none",
                  border: `1px solid ${theme.palette.primary.main}`,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore sx={{ color: theme.palette.primary.main }} />
                  }
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Features & Specifications
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    {Object.entries(product.features).map(([key, value]) => (
                      <Grid
                        size={{
                          xs: 12,
                          sm: 6,
                        }}
                        key={key}
                      >
                        <Stack direction="row" justifyContent="space-between">
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              textTransform: "capitalize",
                            }}
                          >
                            {key.replace("_", " ")}:
                          </Typography>
                          <Typography variant="body2">{value}</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  bgcolor: theme.palette.background.default,
                  boxShadow: "none",
                  border: `1px solid ${theme.palette.primary.main}`,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore sx={{ color: theme.palette.primary.main }} />
                  }
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Care Instructions
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    • Dry clean only
                    <br />
                    • Do not bleach
                    <br />
                    • Iron on reverse side
                    <br />
                    • Store in a cool, dry place
                    <br />• Avoid direct sunlight
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Related Products */}
      <Box sx={{ py: 6, bgcolor: "#F8F4E7" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 4,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            You Might Also Like
          </Typography>

          <Grid container spacing={{ xs: 1, sm: 3 }}>
            {relatedProducts.map((relatedProduct, index) => (
              <Grid
                size={{
                  xs: 6,
                  sm: 3,
                }}
                md={3}
                key={index}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: `1px solid ${theme.palette.primary.main}20`,
                    borderRadius: 2,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                    },
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <Box
                    component="img"
                    src={relatedProduct.thumbnail}
                    alt={relatedProduct.title}
                    sx={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        mb: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {relatedProduct.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {relatedProduct.price.offer_price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
