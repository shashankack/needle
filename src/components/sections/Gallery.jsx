import {
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Stack,
  Typography,
} from "@mui/material";
import titleComponent from "../TitleComponent";
import { newArrivals } from "../../assets/data";

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      mt={isMobile ? 10 : 20}
      mb={isMobile ? 6 : 10}
      gap={4}
      justifyContent="center"
      alignItems="center"
    >
      {titleComponent("Gallery")}

      <Grid
        container
        spacing={isMobile ? 2 : 4}
        justifyContent="center"
        alignItems="center"
        width="90%"
      >
        {newArrivals.slice(3, 5).map((item, index) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 6,
            }}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src={item.image}
              alt={`gallery-${index}`}
              sx={{
                width: isMobile ? "100%" : 500,
                height: isMobile ? "auto" : 700,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Gallery;
