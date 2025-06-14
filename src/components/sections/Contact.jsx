import {
  Box,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
} from "@mui/material";

import TitleComponent from "../TitleComponent";

import model from "../../assets/images/model2.png";
import overlay from "../../assets/images/vectors/contactOverlay.png";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const textFieldStyles = {
    backgroundColor: theme.palette.red,
    "& .MuiOutlinedInput-root": {
      color: theme.palette.beige,
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige,
        border: 2,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige,
      },
    },
    "& .MuiInputLabel-outlined": {
      color: theme.palette.beige,
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: theme.palette.beige,
    },
    input: {
      backgroundColor: theme.palette.red,
    },
  };

  return (
    <Stack
      justifyContent="center"
      maxWidth={1400}
      gap={4}
      margin="60px auto"
      alignItems="center"
    >
      <Box width="100%">{TitleComponent("Contact Us")}</Box>

      <Stack
        direction={isMobile ? "column" : "row"}
        width="100%"
        bgcolor={theme.palette.red}
        borderRadius={4}
        overflow="hidden"
      >
        {/* Left Section - Image */}
        <Box width={isMobile ? "100%" : "50%"} height={isMobile ? 400 : 800}>
          <Box
            component="img"
            src={model}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right Section - Form */}
        <Box
          width={isMobile ? "100%" : "50%"}
          height={isMobile ? "auto" : 800}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          sx={{ backgroundColor: theme.palette.red }}
        >
          <Box
            component="img"
            src={overlay}
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              objectFit: "cover",
            }}
          />

          <Box
            component="form"
            sx={{
              width: isMobile ? "90%" : "70%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              zIndex: 2,
              py: isMobile ? 6 : 0,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.beige}
              fontSize={isMobile ? "6vw" : "2vw"}
            >
              Have a question?
            </Typography>
            <Typography
              mb={3}
              textAlign="center"
              fontSize={isMobile ? "4vw" : "1.4vw"}
              color={theme.palette.beige}
            >
              Every great look starts with a hello.
            </Typography>

            <TextField
              required
              placeholder="Your Name"
              label="Name"
              variant="outlined"
              fullWidth
              sx={textFieldStyles}
            />
            <TextField
              required
              label="Email"
              variant="outlined"
              fullWidth
              sx={textFieldStyles}
            />
            <TextField
              required
              label="Phone"
              variant="outlined"
              fullWidth
              sx={textFieldStyles}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={textFieldStyles}
            />

            <Button
              variant="contained"
              size="large"
              disableElevation
              sx={{
                width: isMobile ? "100%" : "40%",
                alignSelf: isMobile ? "center" : "flex-start",
                backgroundColor: theme.palette.beige,
                color: theme.palette.red,
                borderRadius: 3,
                mt: 2,
                "&:hover": {
                  backgroundColor: theme.palette.beige,
                  opacity: 0.9,
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contact;
