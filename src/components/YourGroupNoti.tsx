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
import { YourGroupPend } from "../components/YourGroupPend";
import { YourGroupComp } from "../components/YourGroupComp";
import DeleteIcon from "@mui/icons-material/Delete";

const Groups = [
  {
    id: 1,
    title: "title1",
    description: "description1",
    room_name: "room_name1",
    people: 10,
    location: "Anam",
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    room_name: "room_name2",
    people: 20,
    location: "Sinchon",
  },
];

export const YourGroupNoti = () => {
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
          <Typography fontWeight="normal">
            Start Date 2023 Nov 25 06:00pm{" "}
          </Typography>
          <Typography fontWeight="normal">
            End Date 2023 Nov 25 06:00pm{" "}
          </Typography>
        </Box>
      </Card>
    </>
  );
};
