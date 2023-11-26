import React from "react";
import { MouseEvent } from "react";
import { ChangeEvent, useState } from "react";
import {
  Grid,
  Tab,
  Tabs,
  Divider,
  Container,
  Card,
  Box,
  useTheme,
  styled,
  Typography,
  Stack,
  Button,
  Icon,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { YourGroupComp } from "../components/YourGroupComp";
import DeleteIcon from "@mui/icons-material/Delete";

export const YourGroupPend = () => {
  return (
    <>
      <Divider />
      <Card
        sx={{
          height: 200,
          mb: 1,
          mt: 2,
        }}
      >
        <Box
          pt={3}
          px={3}
          pb={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            bottom: "0",
          }}
        >
          <Typography variant="h5" fontWeight="normal">
            New Task: Study Group 6pm~9pm
          </Typography>
          <DeleteIcon sx={{ fontSize: 30 }} />
        </Box>

        <Box px={3} pb={2}>
          <Typography fontWeight="normal">
            Created a new task “Study Session on Monday”.
          </Typography>
        </Box>

        <Box
          px={3}
          pb={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "abosolute",
            bottom: "",
          }}
        >
          <Typography fontWeight="normal">User: nwe123</Typography>
          <Box>
            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#118A00",
                padding: "5px 10px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#FFFFFF",
                marginLeft: "5px",
              }}
            >
              Approve
            </Button>
            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#D31212",
                padding: "5px 10px ",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#FFFFFF",
                marginLeft: "5px",
              }}
            >
              Deny
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};
