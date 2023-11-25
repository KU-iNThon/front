import Profile from "./components/Profile";
import ListGroup from "./page-components/ListGroup";
import FindPage from "./FindPage";
import RightBar from "./components/RightBar";
import SearchGroup from "./page-components/SearchGroup";
import { Routes, Route } from "react-router-dom";
import { Grid, Box, Toolbar, Container, Paper, Stack } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/find-group" element="" />
        <Route path="/your-group" element="" />
        <Route path="/notifications" element="" />
        <Route path="/profile" element="" />
      </Routes>

      <FindPage />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
          <Grid
            container
            spacing={3}
            direction={"row"}
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item xs={12} md={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 775,
                }}
              ></Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <RightBar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
