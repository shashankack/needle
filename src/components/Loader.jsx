import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Loader = () => {
  const theme = useTheme();
  const { red = "#BD3757", beige = "#F4E6CD" } = theme.palette || {};

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      role="progressbar"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        minHeight: "100dvh",
        bgcolor: beige,
      }}
    >
      <CircularProgress sx={{ color: red }} size={44} thickness={3} />
      <Typography variant="h6" sx={{ color: red, textTransform: "uppercase" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Loader;
