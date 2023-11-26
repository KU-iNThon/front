import { Grid, Box, Toolbar, Container, Paper, Stack } from "@mui/material";
import Profile from "./ProfileBox";
import Task from "./Task";

function RightBar() {
  return (
    <>
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
        <Container maxWidth="lg" sx={{}}>
          <Grid
            container
            spacing={3}
            direction={"column"}
            justifyContent="center"
            alignItems="stretch"
          >
            {/* Chart */}
            <Grid item xs={8} md={8}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 275,
                }}
              >
                <Profile></Profile>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={8} md={8}>
              <Paper
                sx={{
                  p: 2,
                  isplay: "flex",
                  flexDirection: "column",
                  height: 475,
                }}
              >
                <Task></Task>
              </Paper>
            </Grid>
            {/* Recent Orders */}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default RightBar;
