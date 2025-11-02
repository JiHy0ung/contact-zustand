import "./App.css";
import { Container, Grid, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        mb={4}
        sx={{
          fontFamily: "OngleipParkDahyeon",
          fontWeight: "900",
        }}
      >
        Noona Contact
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          width: { xs: "90%", sm: "80%" },
          backgroundColor: "#d0f1f4ff",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          border: "8px double #010101",
          borderRadius: "1rem",
          p: 4,
        }}
      >
        <Grid size={{ xs: 12, sm: 4 }}>
          <ContactForm />
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <ContactList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
