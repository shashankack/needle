import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import { Box } from "@mui/material";

import "swiper/css";
import "swiper/css/effect-creative";

const HeroSection = () => {
  const slides = [
    "/images/carousel_1.png",
    "/images/carousel_2.png",
    "/images/carousel_3.png",
  ];

  return (
    <Box height="100vh">
      <Swiper
        loop
        style={{ height: "100%" }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={slide}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;
