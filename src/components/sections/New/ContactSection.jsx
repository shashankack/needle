import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ContactSection = () => {
  const theme = useTheme();
  const {
    red = "#BD3757",
    beige = "#F4E6CD",
    white = "#F8F4E7",
  } = theme.palette || {};
  const primaryFont = theme?.fonts?.primary || "Montserrat, sans-serif";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [snackOpen, setSnackOpen] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to your API / email service
    console.log("Contact form submit:", form);
    setSnackOpen(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Box component="section" sx={{ bgcolor: beige, py: { xs: 6, md: 20 } }}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          sx={{ "--cardMinH": { xs: "380px", md: "520px" } }}
        >
          {/* Left: Contact Form */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 2,
                bgcolor: white,
                border: `1px solid ${beige}`,
                width: "100%",
                minHeight: "var(--cardMinH)",
                display: "flex",
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Stack spacing={2} sx={{ flex: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: ".12em",
                      color: red,
                      fontFamily: primaryFont,
                    }}
                  >
                    Contact
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: primaryFont,
                      color: red,
                      lineHeight: 1.2,
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                  >
                    Send us a message
                  </Typography>

                  <Box component="form" onSubmit={onSubmit}>
                    <Stack spacing={2}>
                      <TextField
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        fullWidth
                        variant="outlined"
                      />
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        fullWidth
                        variant="outlined"
                      />
                      <TextField
                        label="Phone (optional)"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        fullWidth
                        variant="outlined"
                      />
                      <TextField
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        required
                        fullWidth
                        multiline
                        minRows={4}
                        variant="outlined"
                      />

                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            bgcolor: red,
                            color: white,
                            px: 3,
                            py: 1.25,
                            borderRadius: 2,
                            fontFamily: primaryFont,
                            textTransform: "none",
                            "&:hover": { bgcolor: red },
                          }}
                        >
                          Submit
                        </Button>
                        <Button
                          type="button"
                          variant="text"
                          onClick={() =>
                            setForm({
                              name: "",
                              email: "",
                              phone: "",
                              message: "",
                            })
                          }
                          sx={{
                            color: red,
                            fontFamily: primaryFont,
                            textTransform: "none",
                          }}
                        >
                          Clear
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Right: Map (same height) */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 2,
                bgcolor: white,
                border: `1px solid ${beige}`,
                width: "100%",
                minHeight: "var(--cardMinH)",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: "var(--cardMinH)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="iframe"
                  title="Needle - Bengaluru Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62193.44358263358!2d77.4946475486328!3d13.029926199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1763265450b1%3A0xbbdd619f25b9e3b5!2sNeedle!5e0!3m2!1sen!2sin!4v1758100928703!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Success toast */}
      <Snackbar
        open={snackOpen}
        autoHideDuration={2500}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="success"
          sx={{ bgcolor: white, color: red, border: `1px solid ${red}` }}
        >
          Message sent! We’ll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
