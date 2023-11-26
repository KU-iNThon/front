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
  CardHeader,
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

export const ProfilePage = () => {
  return <></>;
};
