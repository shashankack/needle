import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";

import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      height="100vh"
      position="relative"
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        color: theme.palette.white,
        fontFamily: theme.typography.fontFamily,
        textAlign: "center",
        padding: isMobile ? "20px" : 10,
      }}
    >
      <Box
        sx={{
          width: "100%",
          zIndex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          background: `linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%,rgba(189, 55, 87, 1) 100%)`,
          mixBlendMode: "multiply",
        }}
      />
      <Typography
        fontSize={isMobile ? "4.6vw" : "2.6vw"}
        fontWeight={600}
        letterSpacing={4}
        zIndex={2}
      >
        Crafting Celebrations, <br /> One Thread At a Time.
      </Typography>
    </Box>
  );
};

export default Hero;
