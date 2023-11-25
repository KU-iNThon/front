import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import "./Navbar.css";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      style={{ background: "#FFFFFF", color: "#000000" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        ></IconButton>
        <Typography variant="h6" component="div" padding="10px" color="#118A00">
          SOCIAL
        </Typography>
        <Stack direction="row" spacing="2">
          <a href="" className="link">
            Find Group
          </a>
          <a href="" className="link">
            Your Group
          </a>
          <a href="" className="link">
            Notification
          </a>
          <a href="" className="link">
            Profile
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
