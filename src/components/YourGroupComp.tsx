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
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { YourGroupNoti } from "../components/YourGroupNoti";
import { YourGroupPend } from "../components/YourGroupPend";
import { YourGroupNav } from "../components/YourGroupNav";

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

export const YourGroupComp = () => {
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
        <Box pt={3} px={3} pb={2}>
          <Typography variant="h5" fontWeight="normal">
            English Productivity Group 6pm ~ 9pm
          </Typography>
        </Box>

        <Box px={3} pb={2}>
          <Typography fontWeight="normal">
            We are a group of KU students, studying ever day from 6pm~9pm. We
            are studious and supportive. Please join our community! Active
            students! and awesome moderators. Only accepting 50 people!
          </Typography>
        </Box>

        <Box
          px={3}
          pb={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            bottom: "0",
          }}
        >
          <Typography fontWeight="normal">40/50 Active Users</Typography>
          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#118A00",
              padding: "5px 10px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Request to Join!
          </Button>
        </Box>
      </Card>

      <Card sx={{ height: 200 }}>
        <Box pt={2} px={3} pb={2}>
          <Typography variant="h5" fontWeight="normal">
            English Productivity Group 6pm ~ 9pm
          </Typography>
        </Box>

        <Box px={3} pb={2}>
          <Typography fontWeight="normal">
            We are a group of KU students, studying ever day from 6pm~9pm. We
            are studious and supportive. Please join our community! Active
            students! and awesome moderators. Only accepting 50 people!
          </Typography>
        </Box>

        <Box
          px={3}
          pb={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            bottom: "0",
          }}
        >
          <Typography fontWeight="normal">40/50 Active Users</Typography>
          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#118A00",
              padding: "5px 10px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Request to Join!
          </Button>
        </Box>
      </Card>
    </>
  );
};
