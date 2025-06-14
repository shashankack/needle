import {
  Box,
  Stack,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import titleComponent from "../TitleComponent";
import { newArrivals } from "../../assets/data";

import { useState } from "react";

import crest from "../../assets/images/vectors/crest.png";

const Catalogue = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={2}
      gap={isMobile ? 0 : 16}
    >
      {/* New Arrivals */}
      <Stack
        width="100%"
        py={10}
        justifyContent="start"
        alignItems="center"
        gap={isMobile ? 0 : 4}
      >
        <Box component="img" src={crest} width={isMobile ? "20vw" : "10vw"} />
        {titleComponent("new arrivals")}

        {!isMobile && (
          <Grid container width="90%" spacing={4}>
            {newArrivals.slice(0, 3).map((item, index) => {
              return (
                <Grid size={4} height="100%" key={index}>
                  <Stack gap={2}>
                    <Box height="auto" width="100%">
                      <Box
                        component="img"
                        src={item.image}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography
                        bgcolor={theme.palette.red}
                        color={theme.palette.white}
                        width="100%"
                        height="100%"
                        textAlign="center"
                        p={2}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        )}

        {isMobile && (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{ width: "90%", height: "auto", marginTop: "20px" }}
          >
            {newArrivals.slice(0, 3).map((item, index) => (
              <SwiperSlide key={index}>
                <Box height="auto" width="100%">
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  bgcolor={theme.palette.red}
                  color={theme.palette.white}
                  width="100%"
                  height="100%"
                  textAlign="center"
                  p={2}
                >
                  {item.title}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Stack>

      {/* Categories */}
      <Stack
        overflow="hidden"
        width="100%"
        justifyContent="center"
        alignItems="center"
        gap={isMobile ? 0 : 4}
      >
        {titleComponent("categories")}
        {!isMobile && (
          <Grid
            container
            width="90%"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            {newArrivals.slice(3, 5).map((item, index) => (
              <Grid width={600} height={800} key={index}>
                <Box height="100%" width="100%">
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

        {isMobile && (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{ width: "90%", height: "auto", marginTop: "20px" }}
          >
            {newArrivals.slice(3, 5).map((item, index) => (
              <SwiperSlide key={index}>
                <Box height="100%" width="100%">
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Stack>

      {/* Our Collection */}
      <Stack
        height="100vh"
        width="90%"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        {titleComponent("our collection")}
        {!isMobile && (
          <>
            <ButtonGroup
              disableElevation
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 4,
                gap: 20,
                color: theme.palette.beige,
                "& .MuiButton-root": {
                  borderRadius: 10,
                  bgcolor: theme.palette.red,
                },
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <Button key={i}>Category {i}</Button>
              ))}
            </ButtonGroup>

            <Grid container width="90%" spacing={4}>
              {newArrivals.slice(5, 8).map((item, index) => {
                return (
                  <Grid size={4} height="100%" key={index}>
                    <Stack gap={2}>
                      <Box height="auto" width="100%">
                        <Box
                          component="img"
                          src={item.image}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography
                          bgcolor={theme.palette.red}
                          color={theme.palette.white}
                          width="100%"
                          height="100%"
                          textAlign="center"
                          p={2}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}

        {isMobile && (
          <>
            <FormControl fullWidth>
              <Select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                displayEmpty
                sx={{
                  borderRadius: 2,
                  bgcolor: theme.palette.red,
                  color: theme.palette.beige,
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.red,
                  },
                  "& .MuiSvgIcon-root": {
                    color: theme.palette.beige,
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Select Category
                </MenuItem>
                {["Category 1", "Category 2", "Category 3", "Category 4"].map(
                  (label, index) => (
                    <MenuItem key={index} value={label}>
                      {label}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              style={{ width: "90%", height: "auto", marginTop: "20px" }}
            >
              {newArrivals.slice(5, 8).map((item, index) => (
                <SwiperSlide key={index}>
                  <Box height="auto" width="100%">
                    <Box
                      component="img"
                      src={item.image}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Typography
                    bgcolor={theme.palette.red}
                    color={theme.palette.white}
                    width="100%"
                    height="100%"
                    textAlign="center"
                    p={2}
                  >
                    {item.title}
                  </Typography>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Catalogue;
