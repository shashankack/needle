import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import needleArrow from "../assets/images/vectors/needle.png";

const TitleComponent = (title) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      gap={4}
    >
      <Box
        component="img"
        src={needleArrow}
        sx={{
          width: isMobile ? 80 : 160,
        }}
      />
      <Typography
        sx={{
          fontSize: isMobile ? "4vw" : "2.4vw",
          textTransform: "uppercase",
          fontWeight: 700,
          color: theme.palette.red,
        }}
      >
        {title}
      </Typography>
      <Box
        component="img"
        src={needleArrow}
        sx={{
          width: isMobile ? 80 : 160,
          transform: "rotate(179deg)",
        }}
      />
    </Stack>
  );
};

export default TitleComponent;
