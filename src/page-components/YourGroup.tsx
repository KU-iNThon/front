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
  styled,
  Typography,
  Stack,
  Button,
  Badge,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { YourGroupNoti } from "../components/YourGroupNoti";
import { YourGroupPend } from "../components/YourGroupPend";
import { YourGroupComp } from "../components/YourGroupComp";

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

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Your Groups" value="1" />
            <Tab label="Notifications" value="2" />
            <Tab label="Pending" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <YourGroupComp></YourGroupComp>
        </TabPanel>
        <TabPanel value="2">
          <YourGroupNoti></YourGroupNoti>
        </TabPanel>
        <TabPanel value="3">
          <YourGroupPend></YourGroupPend>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export const YourGroup = () => {
  return (
    <>
      <Typography variant="h5" component="h5" gutterBottom>
        Your Groups!
      </Typography>
      {LabTabs()}
    </>
  );
};
