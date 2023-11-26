import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/find-group">Find Group</NavLink>
          </a>
          <a href="" className="link">
            <NavLink to="/your-group">Your Group</NavLink>
          </a>
          <a href="" className="link">
            <NavLink to="/profile">Profile</NavLink>
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
