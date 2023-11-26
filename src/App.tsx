import ProfileBox from "./components/ProfileBox";
import ListGroup from "./page-components-ref/ListGroup";

import RightBar from "./components/RightBar";
import SearchGroup from "./page-components-ref/SearchGroup";
import { Routes, Route } from "react-router-dom";
import { Grid, Box, Toolbar, Container, Paper, Stack } from "@mui/material";
import { FindGroup } from "./page-components/FindGroup";
import { Profile } from "./page-components/Profile";
import { YourGroup } from "./page-components/YourGroup";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
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
              >
                <Routes>
                  <Route path="/" element={<FindGroup />} />
                  <Route path="/find-group" element={<FindGroup />} />
                  <Route path="/your-group" element={<YourGroup />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Paper>
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
